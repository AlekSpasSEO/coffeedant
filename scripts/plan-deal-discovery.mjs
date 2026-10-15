import { readFile, appendFile } from 'node:fs/promises';
import { discoveryPlan } from '../src/lib/deal-season.mjs';
const selection = JSON.parse(await readFile(new URL('../src/data/amazon-deal-selection.json', import.meta.url), 'utf8'));
const plan = discoveryPlan({ selectedAt: selection.selectedAt, selectedCampaign: selection.campaign, force: process.argv.includes('--force') });
console.log(JSON.stringify(plan));
if (process.env.GITHUB_OUTPUT) await appendFile(process.env.GITHUB_OUTPUT, `due=${plan.due}\n`);
