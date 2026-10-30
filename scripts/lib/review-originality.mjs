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

// Dedicated methodology and source sections are omitted by the HTML reader. These
// narrowly scoped sentences may also appear beside a rating without being review
// advice. Do not exempt a paragraph just because it contains one disclaimer.
const disclosureSentence = /^(?:Coffeedant (?:has not|did not|does not) (?:physically )?(?:test|tested|taste|tasted|brew|brewed|measure|measured)\b|This (?:is a research-led|review is research-led|score is an editorial judgment)|Scores (?:are|describe) (?:editorial judgments|the documented)|(?:Self-selected )?Owner (?:reports|discussions) (?:are not|cannot establish|do not establish)|(?:It is|These are) not (?:a |)Coffeedant (?:bench |lab |)measurements?)/i;
const sentences = value => String(value).match(/[^.!?]+(?:[.!?]+|$)/g) ?? [];
const editorialText = value => sentences(value)
  .map(sentence => sentence.trim())
  .filter(sentence => !disclosureSentence.test(sentence))
  .join(' ');

export function extractReviewBodyParagraphs(article) {
  const attr = (node, key) => node?.attrs?.find(item => item.name === key)?.value;
  const hasClass = (node, value) => (attr(node, 'class') ?? '').split(/\s+/).includes(value);
  const descendants = node => node ? [node, ...(node.childNodes ?? []).flatMap(descendants)] : [];
  const text = node => ['blockquote','q'].includes(node?.tagName) ? '' : (node?.nodeName === '#text' ? node.value : (node?.childNodes ?? []).filter(child => !(child.tagName === 'a' && /^\[(?:source|\d+)\]$/.test((child.childNodes ?? []).map(item => item.value ?? '').join('').trim()))).map(text).join(' ')).replace(/\s+/g, ' ').trim();
  const omittedSections = new Set(['ratings','video','methodology','sources']);
  const omittedClasses = ['review-source-list','review-buy-actions','review-section-heading','review-score-card','review-rating-card','review-community-evidence','review-community-embed'];
  const result = [];
  const visit = (node, section = '') => {
    if (!node || ['script','style','nav','table','blockquote','q','figure','figcaption'].includes(node.tagName)) return;
    if (node.tagName === 'section') {
      section = attr(node, 'id') ?? section;
      if (omittedSections.has(section)) return;
    }
    if (omittedClasses.some(name => hasClass(node, name)) || (node.attrs ?? []).some(item => item.name === 'data-amazon-recommendation' || item.name === 'data-coffee-finder')) return;
    if (node.tagName === 'p' || (node.tagName === 'li' && !descendants(node).some(child => child !== node && ['p','li'].includes(child.tagName)))) {
      const value = text(node);
      if (value) result.push({ section, text: value });
      return;
    }
    for (const child of node.childNodes ?? []) visit(child, section);
  };
  visit(article);
  return result;
}

function checkBodyOriginality(documents, normalize) {
  const shingleSize = 14;
  const passages = new Map();
  const paragraphs = new Map();
  const bodyDocuments = documents.map(review => {
    let offset = 0;
    const blocks = (review.paragraphs ?? []).map((paragraph, index) => {
      const source = typeof paragraph === 'string' ? { text: paragraph } : paragraph;
      const tokens = words(normalize(editorialText(source.text)));
      const block = { text: source.text, section: source.section ?? '', index, tokens, offset };
      offset += tokens.length;
      return block;
    }).filter(block => block.tokens.length >= shingleSize);
    return { slug: review.slug, blocks, totalWords: offset, reused: new Set() };
  });
  for (const review of bodyDocuments) for (const block of review.blocks) {
    if (block.tokens.length >= 30) {
      const key = block.tokens.join(' ');
      if (!paragraphs.has(key)) paragraphs.set(key, []);
      paragraphs.get(key).push({ slug: review.slug, section: block.section, text: block.text, words: block.tokens.length });
    }
    for (let index = 0; index <= block.tokens.length - shingleSize; index++) {
      const phrase = block.tokens.slice(index, index + shingleSize).join(' ');
      if (!passages.has(phrase)) passages.set(phrase, []);
      passages.get(phrase).push({ slug: review.slug, section: block.section, offset: block.offset + index, review });
    }
  }
  const repeatedParagraphs = [...paragraphs].flatMap(([normalized, occurrences]) => {
    const distinct = [...new Map(occurrences.map(item => [item.slug, item])).values()];
    return distinct.length < 2 ? [] : [{
      kind: 'body-paragraph', normalized, text: distinct[0].text,
      words: distinct[0].words, reviews: distinct.length,
      locations: distinct.map(({ slug, section }) => ({ slug, section })),
    }];
  }).sort((a, b) => b.reviews - a.reviews || b.words - a.words);
  // Merge adjacent shingles occurring in the same reviews. A template paragraph
  // should produce one actionable finding, rather than hundreds of noisy errors.
  const groups = new Map();
  for (const [phrase, occurrences] of passages) {
    const slugs = [...new Set(occurrences.map(item => item.slug))].sort();
    if (slugs.length < 2) continue;
    for (const occurrence of occurrences) for (let i = 0; i < shingleSize; i++) occurrence.review.reused.add(occurrence.offset + i);
    if (slugs.length < 5) continue;
    const key = slugs.join('\n');
    if (!groups.has(key)) groups.set(key, { reviews: slugs.length, phrases: [], locations: [...new Map(occurrences.map(({ slug, section }) => [slug, { slug, section }])).values()] });
    groups.get(key).phrases.push(phrase);
  }
  const widespreadBodyPassages = [...groups.values()].map(group => ({
    ...group, phraseCount: group.phrases.length, phrases: group.phrases.slice(0, 4),
  })).sort((a, b) => b.reviews - a.reviews || b.phraseCount - a.phraseCount);
  const bodyReuse = bodyDocuments.filter(review => review.totalWords).map(review => ({
    slug: review.slug, words: review.totalWords, reusedWords: review.reused.size,
    ratio: Math.round(review.reused.size / review.totalWords * 1000) / 1000,
  })).sort((a, b) => b.ratio - a.ratio);
  const errors = [];
  const longParagraphs = repeatedParagraphs.filter(paragraph => paragraph.words >= 60);
  if (longParagraphs.length) errors.push(`${longParagraphs.length} editorial paragraphs of sixty or more words repeat across different reviews after removing names; see repeatedParagraphs in the originality report.`);
  if (widespreadBodyPassages.length) errors.push(`${widespreadBodyPassages.length} groups of fourteen-word editorial passages recur in five or more review bodies; remove shared padding or write product-specific advice (see report locations).`);
  for (const review of bodyReuse) if (review.reusedWords >= 120 && review.ratio >= .35) errors.push(`${review.slug}: ${Math.round(review.ratio * 100)}% of article words occur in passages shared with other reviews (${review.reusedWords}/${review.words}); review the copied body prose.`);
  return { errors, repeatedParagraphs, widespreadBodyPassages, bodyReuse };
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
  const body = checkBodyOriginality(documents, normalize);
  errors.push(...body.errors);
  return {reviews:reviews.length,errors,warnings,matches,widespreadPhrases,
    repeatedParagraphs: body.repeatedParagraphs,
    widespreadBodyPassages: body.widespreadBodyPassages,
    bodyReuse: body.bodyReuse,
  };
}
