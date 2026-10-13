import history from './journal-history.json';
import trends from './journal-trends.json';
import {guides} from './journal-guides';
const artwork:Record<string,{hero:string,alt:string}>={
 'coffeehouse-public-life':{hero:'coffeehouse',alt:'Artistic reconstruction of a London coffeehouse with readers and merchants'},
 'coffee-colonial-world':{hero:'colonial',alt:'Original illustration of cultivated coffee terraces in a Javanese mountain landscape'},
 'kopi-luwak':{hero:'civet',alt:'Original illustration of an Asian palm civet freely resting on a tropical forest branch'},
 'decaf-renaissance':{hero:'decaf',alt:'Original still-life illustration of green beans, roasted beans and a cup of coffee'},
 'fermentation-frontier':{hero:'fermentation',alt:'Illustrated coffee cherries beside a fermentation vessel'},
 'water-hidden-ingredient':{hero:'water',alt:'Illustrated glasses of water with refracted light beside espresso'},
 'freshness-clock':{hero:'freshness',alt:'Illustrated sealed coffee bag beside whole beans and ground coffee'},
};
export const stories = [...history, ...trends, ...guides].map((story,index)=>({...story,hero:artwork[story.id]?.hero??story.hero,heroAlt:artwork[story.id]?.alt??story.heroAlt,heroCaption:'Original AI-assisted artwork by Coffeedant. Illustrative reconstruction; it documents no actual facility, visit or test.',number:String(index+1).padStart(2,'0'),minutes:Math.max(5,Math.ceil(story.sections.flatMap(section=>section.paragraphs).join(' ').replace(/<[^>]*>/g,'').split(/\s+/).length/210))}));
