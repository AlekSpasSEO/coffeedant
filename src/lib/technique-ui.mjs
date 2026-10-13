export function formatTechniqueYield(amount, template = '{yield} g beverage', locale = 'en-US') {
  const format = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 });
  return template.replace('{yield}', format.format(amount));
}
