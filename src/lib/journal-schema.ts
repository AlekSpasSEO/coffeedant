import type {stories} from '../data/journal';

export const journalStorySchema = (story: typeof stories[number]) => {
 const canonical=`https://coffeedant.com/journal/${story.id}/`;
 return {'@context':'https://schema.org', '@graph':[
  {'@type':'Article', '@id':`${canonical}#article`, url:canonical, mainEntityOfPage:canonical, headline:story.title, description:story.dek, articleSection:story.category, datePublished:'2026-10-13', dateModified:'2026-10-13', author:{'@type':'Organization',name:'Coffeedant editorial desk'}, publisher:{'@type':'Organization',name:'Coffeedant',url:'https://coffeedant.com/'}, isPartOf:{'@id':'https://coffeedant.com/journal/'}, image:[`https://coffeedant.com/journal/${story.hero}.webp`,...story.media.images.map(photo=>`https://coffeedant.com/${photo.src}`)], associatedMedia:story.media.images.map(photo=>({'@type':'ImageObject',contentUrl:`https://coffeedant.com/${photo.src}`,caption:photo.caption,creditText:photo.credit,license:photo.licenseUrl,acquireLicensePage:photo.sourceUrl})), video:{'@id':`${canonical}#video-${story.media.video.id}`}, citation:[...story.sources.map(source=>source.url),story.media.video.watchUrl]},
  {'@type':'VideoObject','@id':`${canonical}#video-${story.media.video.id}`,name:story.media.video.title,description:story.media.video.note,thumbnailUrl:`https://i.ytimg.com/vi/${story.media.video.id}/hqdefault.jpg`,embedUrl:`https://www.youtube-nocookie.com/embed/${story.media.video.id}`,contentUrl:story.media.video.watchUrl,uploadDate:story.media.video.published??undefined,creator:{'@type':story.media.video.creator==='James Hoffmann'?'Person':'Organization',name:story.media.video.creator,url:story.media.video.creatorUrl}},
  {'@type':'FAQPage',mainEntity:story.faqs.map(faq=>({'@type':'Question',name:faq.q,acceptedAnswer:{'@type':'Answer',text:faq.a}}))},
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Coffeedant',item:'https://coffeedant.com/'},{'@type':'ListItem',position:2,name:'Journal',item:'https://coffeedant.com/journal/'},{'@type':'ListItem',position:3,name:story.title,item:canonical}]}
 ]};
};
