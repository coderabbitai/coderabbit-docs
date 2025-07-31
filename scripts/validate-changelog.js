const fs = require('fs').promises;
const path = require('path');
const yaml = require('js-yaml');

// Parse frontmatter
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (match) {
    const frontmatter = yaml.load(match[1]);
    return { frontmatter, body: match[2] };
  }
  
  return { frontmatter: null, body: content };
}

async function validateChangelog() {
  const errors = [];
  const warnings = [];
  const slugs = new Set();
  
  const changelogDir = path.join(__dirname, '../changelog');
  const files = await fs.readdir(changelogDir);
  
  // Filter out non-markdown files and special files
  const changelogFiles = files.filter(file => 
    file.endsWith('.md') && 
    file !== 'index.md' && 
    !file.startsWith('_')
  );
  
  console.log(`\n📋 Validating ${changelogFiles.length} changelog entries...\n`);
  
  for (const filename of changelogFiles) {
    const filepath = path.join(changelogDir, filename);
    const content = await fs.readFile(filepath, 'utf8');
    const { frontmatter } = parseFrontmatter(content);
    
    if (!frontmatter) {
      errors.push(`${filename}: Missing frontmatter`);
      continue;
    }
    
    // Required fields
    if (!frontmatter.title) errors.push(`${filename}: Missing required 'title'`);
    if (!frontmatter.date) errors.push(`${filename}: Missing required 'date'`);
    if (!frontmatter.slug) errors.push(`${filename}: Missing required 'slug'`);
    if (!frontmatter.tags || !Array.isArray(frontmatter.tags)) {
      errors.push(`${filename}: Missing or invalid 'tags' array`);
    }
    
    // Date format validation
    if (frontmatter.date && !/^\d{4}-\d{2}-\d{2}$/.test(frontmatter.date)) {
      errors.push(`${filename}: Invalid date format (expected YYYY-MM-DD, got ${frontmatter.date})`);
    }
    
    // Check for duplicate slugs
    if (frontmatter.slug) {
      if (slugs.has(frontmatter.slug)) {
        errors.push(`${filename}: Duplicate slug '${frontmatter.slug}'`);
      }
      slugs.add(frontmatter.slug);
    }
    
    // Filename convention
    if (!filename.match(/^\d{4}-\d{2}-\d{2}-[\w-]+\.md$/)) {
      warnings.push(
        `${filename}: Filename doesn't follow convention YYYY-MM-DD-slug.md`
      );
    }
    
    // Hero image optimization
    if (frontmatter.heroImage && !frontmatter.heroImage.endsWith('.webp')) {
      warnings.push(`${filename}: Consider using .webp for hero image`);
    }
    
    // Check if hide_table_of_contents is set
    if (frontmatter.hide_table_of_contents !== true) {
      warnings.push(`${filename}: Consider setting hide_table_of_contents: true`);
    }
  }
  
  // Report results
  if (errors.length > 0) {
    console.error('❌ Validation errors:');
    errors.forEach(err => console.error(`  - ${err}`));
    console.log('');
    process.exit(1);
  }
  
  if (warnings.length > 0) {
    console.warn('⚠️  Warnings:');
    warnings.forEach(warn => console.warn(`  - ${warn}`));
    console.log('');
  }
  
  console.log(`✅ Validated ${changelogFiles.length} changelog entries`);
  console.log(`📍 Found ${slugs.size} unique slugs`);
}

// Run if called directly
if (require.main === module) {
  validateChangelog().catch(console.error);
}

module.exports = { validateChangelog };