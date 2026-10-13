import test from 'node:test';
import assert from 'node:assert/strict';
import {rewriteJournalHref,rewriteJournalHtml} from '../migrate-journal-links.mjs';

test('blog and guide links preserve queries and section anchors',()=>{
 assert.equal(rewriteJournalHref('/blog/espresso-dosing/?from=menu#guide'),'/journal/espresso-dosing/?from=menu#guide');
 assert.equal(rewriteJournalHref('https://coffeedant.com/journal/espresso-machines-for-beginners/#compare'),'https://coffeedant.com/espresso-machine/beginners/#compare');
});
test('preview links retain the GitHub Pages base',()=>{
 assert.equal(rewriteJournalHref('/coffeedant/blog/espresso-dosing/#guide'),'/coffeedant/journal/espresso-dosing/#guide');
 assert.equal(rewriteJournalHref('https://alekspasseo.github.io/coffeedant/blog/'),'https://alekspasseo.github.io/coffeedant/journal/');
});
test('external sources, assets and product reviews are not migrated',()=>{
 for(const href of ['https://example.com/blog/espresso-dosing/','https://coffeedant.com.evil.example/blog/espresso-dosing/','/espresso-machine/breville-bambino/','/journal/documentary/americano-cup.webp','#guide','mailto:ace@growthradical.com'])assert.equal(rewriteJournalHref(href),href);
});
test('link migration preserves all article text, markup and entity bytes',()=>{
 const source='<article><p>Espresso&#8217;s texture &amp; aroma: 1:2.</p><a href="/blog/espresso-dosing/#guide">Dose</a><script>const words="&amp; &#8217;";</script></article>';
 assert.equal(rewriteJournalHtml(source),source.replace('/blog/espresso-dosing/','/journal/espresso-dosing/'));
});

test('restored buying-guide canonicals are not redirected into the Journal',()=>{
 assert.equal(rewriteJournalHref('/espresso-machine/cheap-budget-under-500/'),'/espresso-machine/cheap-budget-under-500/');
 assert.equal(rewriteJournalHref('/coffeedant/journal/budget-espresso-machines-under-500/'),'/coffeedant/espresso-machine/cheap-budget-under-500/');
});
