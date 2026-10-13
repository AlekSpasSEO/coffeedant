import {stories} from './journal';
import {upgradedBlogArticles} from './blog-articles';
import {beginnerGuide} from './beginner-guide';
import {builtInGrinderGuide} from './built-in-grinder-guide';
import {budgetUnder500Guide} from './budget-under-500-guide';
import {prosumerUnder1000Guide} from './prosumer-under-1000-guide';
import {remainingGuideByPath} from './remaining-guides';
import {journalPath, storyPath} from '../lib/journal-routes';

export const journalBuyingGuides = [beginnerGuide, builtInGrinderGuide, budgetUnder500Guide, prosumerUnder1000Guide, ...Object.values(remainingGuideByPath)];
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
 ...stories.map(story=>({id:story.id, path:storyPath(story.id), title:story.title, dek:story.dek, category:story.category, label:story.category, kind:'feature', image:`journal/${story.hero}.webp`, imageAlt:story.heroAlt, minutes:story.minutes})),
 ...upgradedBlogArticles.map(article=>({id:article.slug, path:journalPath(article.path), title:article.title, dek:article.description, category:'Guides', label:article.category, kind:'informational', image:blogImages[article.slug].src, imageAlt:blogImages[article.slug].alt, minutes:minutes(article.bodyHtml)})),
 ...journalBuyingGuides.map(guide=>({id:journalPath(guide.canonicalPath).split('/').filter(Boolean).at(-1)!, path:journalPath(guide.canonicalPath), title:guide.title, dek:guide.description, category:'Guides', label:'Buying guide', kind:'buying-guide', image:guide.media[0].src, imageAlt:guide.media[0].alt, minutes:minutes(guide.sections.map(section=>section.html).join(' '))})),
].map((entry,index)=>({...entry, number:String(index+1).padStart(2,'0')}));
