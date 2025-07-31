const fs = require('fs').promises;
const path = require('path');
const yaml = require('js-yaml');

// Parse frontmatter from markdown content
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (match) {
    try {
      const frontmatter = yaml.load(match[1]);
      const body = match[2].trim();
      
      // Extract first paragraph as summary if not provided
      if (!frontmatter.summary && body) {
        const firstParagraph = body.split('\n\n')[0];
        // Remove markdown formatting for summary
        frontmatter.summary = firstParagraph
          .replace(/#+\s+/g, '') // Remove headers
          .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links
          .replace(/[*_]/g, '') // Remove emphasis
          .substring(0, 200);
      }
      
      return { frontmatter, body };
    } catch (e) {
      console.error('Error parsing frontmatter:', e);
      return { frontmatter: {}, body: content };
    }
  }
  
  return { frontmatter: {}, body: content };
}

async function generateChangelogData() {
  const changelogDir = path.join(__dirname, '../changelog');
  const outputPath = path.join(__dirname, '../src/data/changelog-entries.json');
  
  try {
    // Read all markdown files
    const files = await fs.readdir(changelogDir);
    const markdownFiles = files.filter(file => 
      file.endsWith('.md') && 
      file !== 'index.md' && 
      !file.startsWith('_')
    );
    
    // Process each file
    const entries = await Promise.all(
      markdownFiles.map(async (filename) => {
        const filepath = path.join(changelogDir, filename);
        const content = await fs.readFile(filepath, 'utf8');
        const { frontmatter } = parseFrontmatter(content);
        
        // Generate ID from filename or slug
        const id = frontmatter.slug || filename.replace('.md', '');
        
        return {
          id,
          filename,
          metadata: {
            title: frontmatter.title || 'Untitled',
            date: frontmatter.date,
            slug: frontmatter.slug || id,
            tags: frontmatter.tags || [],
            heroImage: frontmatter.heroImage,
            author: frontmatter.author,
            authorImage: frontmatter.authorImage,
            summary: frontmatter.summary,
            permalink: frontmatter.permalink || `/changelog/${frontmatter.slug || id}`,
          }
        };
      })
    );
    
    // Sort by date (newest first)
    entries.sort((a, b) => {
      const dateA = new Date(a.metadata.date);
      const dateB = new Date(b.metadata.date);
      return dateB.getTime() - dateA.getTime();
    });
    
    // Ensure data directory exists
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    
    // Write the JSON file
    await fs.writeFile(
      outputPath, 
      JSON.stringify({ entries }, null, 2)
    );
    
    console.log(`✅ Generated changelog data with ${entries.length} entries`);
    console.log(`📄 Written to: src/data/changelog-entries.json`);
    
    return entries;
  } catch (error) {
    console.error('Error generating changelog data:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  generateChangelogData();
}

module.exports = { generateChangelogData };