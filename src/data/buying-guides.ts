import {beginnerGuide} from './beginner-guide';
import {builtInGrinderGuide} from './built-in-grinder-guide';
import {budgetUnder500Guide} from './budget-under-500-guide';
import {prosumerUnder1000Guide} from './prosumer-under-1000-guide';
import {remainingGuideByPath} from './remaining-guides';

export const buyingGuides=[beginnerGuide,builtInGrinderGuide,budgetUnder500Guide,prosumerUnder1000Guide,...Object.values(remainingGuideByPath)].map(guide=>({...guide,updated:'2026-10-13'}));
export const buyingGuideByPath=Object.fromEntries(buyingGuides.map(guide=>[guide.canonicalPath,guide]));
