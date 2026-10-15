// One calendar for the static page, browser rollover and unattended jobs.
// Campaign dates describe Coffeedant coverage, never an Amazon sale guarantee.
export const dealTimeZone = 'America/New_York';
export const localDay = (now = new Date()) => new Intl.DateTimeFormat('en-CA', {
  timeZone: dealTimeZone, year: 'numeric', month: '2-digit', day: '2-digit',
}).format(new Date(now));
const shiftDay = (day, offset) => new Date(Date.parse(`${day}T12:00:00Z`) + offset * 86400000).toISOString().slice(0, 10);
export const formatDay = day => new Intl.DateTimeFormat('en-US', {
  month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
}).format(new Date(`${day}T12:00:00Z`));

export function dealCalendar(year) {
  const firstThursday = 1 + (4 - new Date(Date.UTC(year, 10, 1)).getUTCDay() + 7) % 7;
  const blackFriday = `${year}-11-${String(firstThursday + 22).padStart(2, '0')}`;
  const cyberMonday = shiftDay(blackFriday, 3);
  return [
    { id: 'black-friday', name: 'Black Friday', date: blackFriday, start: shiftDay(blackFriday, -14), end: shiftDay(blackFriday, 1), focus: 'Machines & grinders', categories: ['machines', 'grinders'], overview: 'Start with the machine or grinder you actually need. Compare the exact model, seller and reference price before chasing a large percentage.' },
    { id: 'cyber-monday', name: 'Cyber Monday', date: cyberMonday, start: shiftDay(blackFriday, 1), end: shiftDay(cyberMonday, 1), focus: 'Brewers & accessories', categories: ['brewers', 'kettles', 'accessories'], overview: 'Recheck the weekend shortlist. Online offers can change quickly; compare the final price and any Prime conditions before buying.' },
    { id: 'christmas', name: 'Christmas', date: `${year}-12-25`, start: [shiftDay(cyberMonday, 1), `${year}-12-01`].sort().at(-1), end: `${year}-12-26`, focus: 'Coffee gifts', categories: ['coffee', 'brewers', 'milk', 'accessories'], overview: 'Match the gift to their brewing routine. Check compatibility, returns and the delivery estimate for your address; a holiday offer is not a delivery promise.' },
  ];
}

export function getDealSeason(now = new Date()) {
  const day = localDay(now);
  const year = Number(day.slice(0, 4));
  const calendar = dealCalendar(year);
  const campaign = calendar.find(event => day >= event.start && day < event.end) ?? null;
  const phase = campaign ? campaign.id !== 'christmas' && day < campaign.date ? 'preview' : 'live' : 'evergreen';
  const title = campaign ? `${campaign.name} coffee deals ${year} | Coffeedant` : 'Coffee Deals on Amazon: Machines, Beans & More | Coffeedant';
  const description = campaign
    ? `Explore current Amazon coffee offers during our ${campaign.name} coverage. Compare verified prices, conditions and coffee gear, with fresh deal searches every six hours.`
    : 'Browse Amazon coffee deals on beans, pods, espresso machines, grinders, brewers and accessories. Plan for Black Friday, Cyber Monday and Christmas.';
  return {
    day, year, calendar, campaign, phase, key: `${year}:${campaign?.id ?? 'evergreen'}:${phase}`, title, description,
    kicker: campaign ? `AMAZON US / ${campaign.name.toUpperCase()} ${phase === 'preview' ? 'PREVIEW' : 'COVERAGE'}` : 'AMAZON US / THE FRIDAY ROUNDUP',
    headline: campaign ? `${campaign.name} coffee deals.` : 'Coffee deals.',
    accent: campaign ? phase === 'preview' ? 'Build your shortlist.' : campaign.id === 'christmas' ? 'Give better mornings.' : 'Make the upgrade count.' : 'Better mornings.',
    intro: campaign ? campaign.overview : 'A better price on your next bag, brewer, or espresso setup. Explore coffee deals on Amazon, gathered in one place. Plan ahead for the biggest shopping days below.',
    noteKicker: campaign ? phase === 'preview' ? 'THE DATE TO PLAN FOR' : 'OUR SEASONAL COVERAGE' : 'A FRESH ROUND EVERY',
    noteTitle: campaign ? formatDay(campaign.date).replace(`, ${year}`, '') : 'Friday.',
    noteText: campaign ? `Fresh searches every six hours during our ${campaign.name} coverage. Individual offers have their own end times.` : 'New finds once a week. Current prices checked throughout the week.',
    browseTitle: campaign ? `Current offers for ${campaign.name}.` : 'What’s brewing this week.',
  };
}

export function discoveryPlan({ now = new Date(), selectedAt, selectedCampaign, force = false } = {}) {
  const season = getDealSeason(now);
  const checked = Date.parse(selectedAt);
  const age = new Date(now).getTime() - checked;
  const sameDay = Number.isFinite(checked) && localDay(checked) === season.day;
  const friday = new Date(`${season.day}T12:00:00Z`).getUTCDay() === 5;
  const localHour = Number(new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Skopje', hour: '2-digit', hourCycle: 'h23' }).format(new Date(now)));
  // Six-hour UTC buckets tolerate job runtime/delays without skipping the next
  // scheduled search merely because the preceding one finished minutes later.
  const newSlot = Math.floor(new Date(now).getTime() / 21600000) !== Math.floor(checked / 21600000);
  const due = force || (season.campaign
    ? selectedCampaign !== season.campaign.id || !Number.isFinite(age) || age < 0 || newSlot
    : friday && localHour >= 9 && !sameDay);
  return { due, campaign: season.campaign?.id ?? null, phase: season.phase };
}

export function seasonalQueries(category, season = getDealSeason()) {
  if (season.campaign?.id === 'christmas') return ({ coffee: ['coffee gift set'], brewers: ['pour over coffee gift set'], accessories: ['espresso accessories gift set'] })[category] ?? [];
  if (season.campaign) return ({ machines: ['Breville espresso machine', 'DeLonghi espresso machine'], grinders: ['burr coffee grinder'], brewers: ['AeroPress coffee maker'] })[category] ?? [];
  return [];
}
