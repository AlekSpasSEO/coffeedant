const generic = new Set('the a an of for with without review current original generation final series machine coffee espresso manual digital classic pro plus mini duo one super start touch prestige essential integral thermal milk steel pid evo go express barista professional premium automatic semi-automatic evidence control group dark black white stainless silver inox aluminum aluminium walnut smart experience preference counter culture'.split(' '));
const canonical = value => String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[’‘]/g,"'").replace(/[–—]/g,'-');
export const words = value => canonical(value).match(/[a-z0-9]+(?:['-][a-z0-9]+)*/g) ?? [];
const escapeRegex = value => value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
export function identityNormalizer(reviews) {
  const aliases = new Set();
  for (const review of reviews) {
    const brand=canonical(review.brand ?? '');
    const prefix=canonical(review.title.split(/\breview\b/i)[0].trim());
    for (const value of [brand,canonical(review.name ?? ''),prefix]) if(value)aliases.add(value);
    for (const value of [canonical(review.name ?? ''),prefix]) {
      const model=value.replace(new RegExp('^'+escapeRegex(brand)+'\\s*'),'').trim();
      if(model)aliases.add(model);
      for(const token of words(model))if(!generic.has(token)&&(token.length>=4||/\d/.test(token))&&/[a-z]/.test(token))aliases.add(token);
      const base=model.replace(/\s+(?:[a-z]*\d[a-z0-9.\/-]*|(?:original|current|final)\b.*|mk\.?\s*\d.*).*$/,'').trim();
      if(base.length>=4&&!generic.has(base))aliases.add(base);
    }
  }
  const patterns=[...aliases].filter(value=>/[a-z]/.test(value)&&!generic.has(value)).sort((a,b)=>b.length-a.length).map(value=>new RegExp('(?<![a-z0-9])'+escapeRegex(value)+(/[a-z]/.test(value)&&/\d/.test(value)&&!/\s/.test(value)?'(?:/\\d+)?':'')+"(?:'s)?"+'(?![a-z0-9])','g'));
  return input => {let value=canonical(input);for(const pattern of patterns)value=value.replace(pattern,' ');return value.replace(/\[source\]/g,' ').replace(/\s+/g,' ').trim();};
}
export function orderedWordOverlap(a,b) {
  const left=Array.isArray(a)?a:words(a),right=Array.isArray(b)?b:words(b);
  if(!left.length||!right.length)return 0;
  const row=new Uint16Array(right.length+1);
  for(let i=1;i<=left.length;i++) {let previous=0;for(let j=1;j<=right.length;j++){const old=row[j];row[j]=left[i-1]===right[j-1]?previous+1:Math.max(row[j],row[j-1]);previous=old;}}
  return 2*row[right.length]/(left.length+right.length);
}
export function checkReviewOriginality(reviews) {
  const normalize=identityNormalizer(reviews),errors=[],warnings=[],matches=[];
  const documents=reviews.map(review=>({...review,hook:words(normalize(review.title.replace(/^.*?\breview\b\s*:?\s*/i,''))),opening:words(normalize(review.overview))}));
  for(const review of documents)if(/that identity matters because two machines|the useful first question is not whether/i.test(review.overview))errors.push(`${review.slug}: retired overview boilerplate`);
  for(let i=0;i<documents.length;i++)for(let j=i+1;j<documents.length;j++) {
    const a=documents[i],b=documents[j];
    if(a.hook.length&&b.hook.length) {
      const score=orderedWordOverlap(a.hook,b.hook);
      if(score>=.5)matches.push({kind:'title',a:a.slug,b:b.slug,score});
      if(score===1||(score>=.8&&Math.min(a.hook.length,b.hook.length)>=4))errors.push(`Title hooks overlap ${Math.round(score*100)}% after removing names: ${a.slug} and ${b.slug}`);
      else if(score>=.5)warnings.push(`Review title hooks for ${a.slug} and ${b.slug} (${Math.round(score*100)}% wording overlap)`);
    }
    if(a.opening.length&&b.opening.length) {
      const score=orderedWordOverlap(a.opening,b.opening);
      if(score>=.5)matches.push({kind:'overview',a:a.slug,b:b.slug,score});
      if(score>=.85)errors.push(`Opening overviews overlap ${Math.round(score*100)}% after removing names: ${a.slug} and ${b.slug}`);
    }
  }
  const phrases=new Map();
  for(const review of documents) {
    const unique=new Set();
    for(let i=0;i<=review.opening.length-8;i++)unique.add(review.opening.slice(i,i+8).join(' '));
    for(const phrase of unique) {if(!phrases.has(phrase))phrases.set(phrase,[]);phrases.get(phrase).push(review.slug);}
  }
  const widespreadPhrases=[...phrases].filter(([,slugs])=>slugs.length>=10);
  if(widespreadPhrases.length)errors.push(`${widespreadPhrases.length} phrases of eight words recur in ten or more opening overviews; write product-specific prose.`);
  return {reviews:reviews.length,errors,warnings,matches,widespreadPhrases};
}
