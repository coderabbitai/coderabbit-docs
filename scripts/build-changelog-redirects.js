const fs = require('fs').promises;
const path = require('path');

async function buildChangelogRedirects() {
  const redirectsPath = path.join(__dirname, '../changelog-redirects.json');
  const redirects = JSON.parse(await fs.readFile(redirectsPath, 'utf8'));
  
  // Generate TypeScript module
  const configContent = `// Auto-generated redirects for changelog migration
// Generated on ${new Date().toISOString()}

export const changelogRedirects = ${JSON.stringify(redirects, null, 2)};
`;

  const outputPath = path.join(__dirname, '../src/config/changelog-redirects.ts');
  
  // Ensure directory exists
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  
  // Write the file
  await fs.writeFile(outputPath, configContent);
  
  console.log(`✅ Generated ${redirects.length} changelog redirects`);
  console.log(`📄 Written to: src/config/changelog-redirects.ts`);
}

// Run if called directly
if (require.main === module) {
  buildChangelogRedirects().catch(console.error);
}

module.exports = { buildChangelogRedirects };