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
      return { frontmatter };
    } catch (e) {
      console.error('Error parsing frontmatter:', e);
      return { frontmatter: {} };
    }
  }
  
  return { frontmatter: {} };
}

async function generateChangelogSidebar() {
  const changelogDir = path.join(__dirname, '../changelog');
  const outputPath = path.join(__dirname, '../sidebarsChangelog.ts');
  
  try {
    // Read all markdown files
    const files = await fs.readdir(changelogDir);
    const markdownFiles = files.filter(file => 
      file.endsWith('.md') && 
      file !== 'index.md' && 
      !file.startsWith('_')
    );
    
    // Process each file to get metadata
    const entries = await Promise.all(
      markdownFiles.map(async (filename) => {
        const filepath = path.join(changelogDir, filename);
        const content = await fs.readFile(filepath, 'utf8');
        const { frontmatter } = parseFrontmatter(content);
        
        // Extract date for grouping
        const date = new Date(frontmatter.date);
        const year = date.getFullYear();
        const month = date.toLocaleDateString('en-US', { month: 'long' });
        
        // Remove .md extension and date prefix for doc ID
        const docId = filename.replace('.md', '');
        
        return {
          docId,
          title: frontmatter.title,
          date: frontmatter.date,
          year,
          month,
          slug: frontmatter.slug,
        };
      })
    );
    
    // Sort by date (newest first)
    entries.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Group by year and month
    const grouped = {};
    entries.forEach(entry => {
      if (!grouped[entry.year]) {
        grouped[entry.year] = {};
      }
      if (!grouped[entry.year][entry.month]) {
        grouped[entry.year][entry.month] = [];
      }
      grouped[entry.year][entry.month].push(entry);
    });
    
    // Build sidebar structure
    const sidebarItems = [];
    
    // Add index page
    sidebarItems.push({
      type: 'doc',
      id: 'index',
      label: '🚀 What\'s New',
    });
    
    // Add year/month groups
    Object.keys(grouped)
      .sort((a, b) => b - a) // Sort years descending
      .forEach(year => {
        const yearItems = [];
        
        // Get months in chronological order
        const monthsInYear = Object.keys(grouped[year]).sort((a, b) => {
          const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                         'July', 'August', 'September', 'October', 'November', 'December'];
          return months.indexOf(b) - months.indexOf(a);
        });
        
        monthsInYear.forEach(month => {
          const monthItems = grouped[year][month].map(entry => ({
            type: 'doc',
            id: entry.docId,
            label: entry.title,
          }));
          
          yearItems.push({
            type: 'category',
            label: month,
            collapsible: false,
            items: monthItems,
          });
        });
        
        sidebarItems.push({
          type: 'category',
          label: year.toString(),
          collapsible: false,
          items: yearItems,
        });
      });
    
    // Generate TypeScript sidebar configuration
    const sidebarContent = `import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Auto-generated changelog sidebar
 * Generated on ${new Date().toISOString()}
 */
const sidebars: SidebarsConfig = {
  changelogSidebar: ${JSON.stringify(sidebarItems, null, 2)},
};

export default sidebars;
`;
    
    await fs.writeFile(outputPath, sidebarContent);
    
    console.log(`✅ Generated changelog sidebar with ${entries.length} entries`);
    console.log(`📄 Written to: sidebarsChangelog.ts`);
    
  } catch (error) {
    console.error('Error generating changelog sidebar:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  generateChangelogSidebar();
}

module.exports = { generateChangelogSidebar };