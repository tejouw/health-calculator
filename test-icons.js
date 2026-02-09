import { getCalculatorsByCategory } from './lib/calculatorRegistry.js';
import { getIcon } from './lib/iconUtils.js';

const dailyLife = getCalculatorsByCategory('daily-life');
const nutrition = getCalculatorsByCategory('nutrition');

console.log('=== DAILY-LIFE ===');
dailyLife.forEach(calc => {
  console.log(`${calc.id}:`);
  console.log(`  icon property: ${calc.icon}`);
  const IconComponent = getIcon(calc.icon);
  console.log(`  getIcon result: ${IconComponent ? 'Found' : 'NOT FOUND'}`);
});

console.log('\n=== NUTRITION ===');
nutrition.slice(0, 2).forEach(calc => {
  console.log(`${calc.id}:`);
  console.log(`  icon property: ${calc.icon}`);
  const IconComponent = getIcon(calc.icon);
  console.log(`  getIcon result: ${IconComponent ? 'Found' : 'NOT FOUND'}`);
});
