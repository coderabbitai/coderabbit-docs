const fs = require('fs').promises;
const path = require('path');
const yaml = require('js-yaml');

// Simple slugify function
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')      // Replace spaces with hyphens
    .replace(/-+/g, '-')       // Replace multiple hyphens with single
    .trim();
}

// Parse frontmatter manually
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (match) {
    const frontmatter = yaml.load(match[1]);
    const body = match[2];
    return { frontmatter, body };
  }
  
  return { frontmatter: {}, body: content };
}

// Extract changelog entries from the main file
async function parseChangelog() {
  const changelogPath = path.join(__dirname, '../docs/changelog.md');
  const content = await fs.readFile(changelogPath, 'utf8');
  
  // Skip the frontmatter
  const { body } = parseFrontmatter(content);
  
  // Split by date headers (## Month Day, Year)
  const dateRegex = /^## (.+)$/gm;
  const entries = [];
  let match;
  const positions = [];
  
  while ((match = dateRegex.exec(body)) !== null) {
    positions.push({
      date: match[1],
      index: match.index,
      line: body.substring(0, match.index).split('\n').length
    });
  }
  
  // Extract content for each entry
  for (let i = 0; i < positions.length; i++) {
    const start = positions[i].index;
    const end = positions[i + 1] ? positions[i + 1].index : body.length;
    const entryContent = body.substring(start, end).trim();
    
    // Extract the first heading after the date as the title
    const titleMatch = entryContent.match(/### (.+)/);
    const title = titleMatch ? titleMatch[1].replace(/[⚡️✨🚀🐛🔧📦🎨]/g, '').trim() : 'Update';
    
    entries.push({
      date: positions[i].date,
      title: title,
      content: entryContent.replace(/^## .+\n/, '').trim(), // Remove the date header
      originalIndex: i
    });
  }
  
  return entries;
}

// Convert date string to YYYY-MM-DD format
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Detect tags based on content
function detectTags(content, title) {
  const tags = [];
  const patterns = {
    feature: /new feature|added|introduce|beta|early access/i,
    improvement: /improve|enhance|optimize|performance|update/i,
    bugfix: /fix|bug|issue|resolve/i,
    breaking: /breaking change|deprecated|removed/i,
    security: /security|vulnerability|patch/i,
    docs: /documentation|docs|readme/i,
    tools: /static analysis|linter|tool/i,
  };
  
  const fullText = title + ' ' + content;
  
  for (const [tag, pattern] of Object.entries(patterns)) {
    if (pattern.test(fullText)) {
      tags.push(tag);
    }
  }
  
  return tags.length > 0 ? tags : ['general'];
}

// Main migration function
async function migrateChangelog() {
  console.log('📋 Starting changelog migration...\n');
  
  const entries = await parseChangelog();
  const changelogDir = path.join(__dirname, '../changelog');
  const redirects = [];
  const usedSlugs = new Set();
  
  console.log(`Found ${entries.length} changelog entries\n`);
  
  // Process each entry
  for (const entry of entries) {
    const formattedDate = formatDate(entry.date);
    
    // Generate unique slug
    let slug = slugify(entry.title);
    let finalSlug = slug;
    let counter = 1;
    
    while (usedSlugs.has(finalSlug)) {
      finalSlug = `${slug}-${counter}`;
      counter++;
    }
    usedSlugs.add(finalSlug);
    
    // Create filename with date for sorting
    const filename = `${formattedDate}-${finalSlug}.md`;
    const filepath = path.join(changelogDir, filename);
    
    // Detect tags
    const tags = detectTags(entry.content, entry.title);
    
    // Create frontmatter
    const frontmatter = {
      title: entry.title,
      date: formattedDate,
      slug: finalSlug,
      tags: tags,
      hide_table_of_contents: true,
      heroImage: `/img/changelog/${finalSlug}-hero.webp`,
      permalink: `/changelog/${finalSlug}`,
    };
    
    // Build file content
    const yamlContent = yaml.dump(frontmatter);
    const fileContent = `---\n${yamlContent}---\n\n${entry.content}\n`;
    
    // Write file
    await fs.writeFile(filepath, fileContent);
    console.log(`✅ Created: ${filename} -> /changelog/${finalSlug}`);
    
    // Add redirect (we'll implement this later)
    // For now, just collect the mapping
    redirects.push({
      from: `/docs/changelog#${formattedDate}`,
      to: `/changelog/${finalSlug}`
    });
  }
  
  // Save redirect mappings
  const redirectsPath = path.join(__dirname, '../changelog-redirects.json');
  await fs.writeFile(redirectsPath, JSON.stringify(redirects, null, 2));
  
  console.log(`\n✅ Migration complete!`);
  console.log(`📁 Created ${entries.length} changelog files`);
  console.log(`🔀 Generated ${redirects.length} redirect mappings`);
  
  return { entries: entries.length, redirects: redirects.length };
}

// Run if called directly
if (require.main === module) {
  migrateChangelog().catch(console.error);
}

module.exports = { migrateChangelog };