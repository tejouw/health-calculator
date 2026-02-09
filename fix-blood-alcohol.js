const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'calculators', 'substance', 'blood-alcohol-calculator', 'bloodAlcoholContent.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Fix broken category fields (remove leading commas and fix quotes)
content = content.replace(/range: ,([^']+)'/g, "range: '$1'");
content = content.replace(/label: ,([^']+)'/g, "label: '$1'");
content = content.replace(/color: ,([^']+)'/g, "color: '#$1'");

// Fix Turkish categories
content = content.replace(/range: ,%([^']+)'/g, "range: '%$1'");
content = content.replace(/label: ,([^İÇğşüöıÖÜĞŞİIa-zA-Z ]+)'/g, "label: '$1'");

// Fix FAQ questions with leading commas
content = content.replace(/question: ,([^']+)'/g, "question: '$1'");

// Escape all apostrophes in long string fields
const fields = [
  'interpretation',
  'limitations',
  'healthRisks',
  'alternativeMeasures',
  'demographicDifferences',
  'medicalDisclaimer',
  'answer'
];

// For each field, find strings that start with single quote and escape internal apostrophes
fields.forEach(field => {
  // Pattern: field: 'text with apostrophe's here',
  const regex = new RegExp(`(${field}:\\s*)'([^'](?:[^'\\\\]|\\\\.)*)('s|'t|'d|'m|'re|'ve|'ll|don't|doesn't|isn't|aren't|wasn't|weren't|won't|wouldn't|shouldn't|couldn't|can't|haven't|hasn't|hadn't)([^`]*)',`, 'gs');

  content = content.replace(regex, (match, prefix, before, apos, after, suffix) => {
    // Replace this field's string with escaped apostrophes
    const escaped = (before + apos + after).replace(/'/g, "\\'");
    return `${prefix}'${escaped}',`;
  });
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ File fixed successfully!');
console.log('Run: npm run dev or yarn dev to test');
