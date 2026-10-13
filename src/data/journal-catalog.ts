import {stories} from './journal';
import {upgradedBlogArticles} from './blog-articles';
import {journalPath, storyPath} from '../lib/journal-routes';

const minutes = (html: string) => Math.max(5, Math.ceil(html.replace(/<[^>]*>/g, ' ').split(/\s+/).length / 210));
const blogImages: Record<string, {src:string; alt:string}> = {
 'conical-vs-flat-burr-grinders': {src:'journal/documentary/americano-portafilter.webp', alt:'Freshly ground coffee in an espresso portafilter'},
 'espresso-dosing': {src:'journal/brew.webp', alt:'Illustrated espresso preparation scene'},
 'espresso-tamp-guide': {src:'journal/documentary/americano-portafilter.webp', alt:'Ground coffee in a portafilter before tamping'},
 'espresso-techniques': {src:'journal/brew.webp', alt:'Illustrated espresso preparation scene'},
 'golden-ratio-espresso': {src:'journal/documentary/americano-cup.webp', alt:'An espresso-based coffee drink'},
 'ground-distribution': {src:'journal/documentary/americano-portafilter.webp', alt:'Ground coffee in an espresso portafilter'},
 'nordic-style-coffee': {src:'journal/freshness.webp', alt:'Illustrated coffee beans and storage scene'},
};

export const journalEntries = [
 ...stories.map(story=>({id:story.id, path:storyPath(story.id), title:story.title, dek:story.dek, category:story.category, label:story.category, kind:'feature', group:'Editorials', image:`journal/${story.hero}.webp`, imageAlt:story.heroAlt, minutes:story.minutes})),
 ...upgradedBlogArticles.map(article=>({id:article.slug, path:journalPath(article.path), title:article.title, dek:article.description, category:'Guides', label:article.category, kind:'informational', group:'Guides', image:blogImages[article.slug].src, imageAlt:blogImages[article.slug].alt, minutes:minutes(article.bodyHtml)})),
].map((entry,index)=>({...entry, number:String(index+1).padStart(2,'0')}));
