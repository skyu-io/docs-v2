const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Define the directory containing your docs
const docsDirectory = path.join(process.cwd(), 'pages', 'docs');

// Define the output file path
const outputFile = path.join(process.cwd(), 'public', 'search-index.json');

// Function to recursively walk through the docs directory
const walkDirectory = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      walkDirectory(filepath, filelist);
    } else if (file.endsWith('.mdx') || file.endsWith('.md')) {
      filelist.push(filepath);
    }
  });
  return filelist;
};

// Function to extract the first H1 title (# Title) from the content
const extractFirstH1Title = (content) => {
  const h1Regex = /^#\s+(.+)$/m; // Regex to match the first H1
  const match = content.match(h1Regex);
  return match ? match[1].trim() : null; // Return null if no H1 found
};

// Function to extract the first paragraph after the main title (heading 1)
const extractFirstParagraphAfterTitle = (content) => {
  const lines = content.split('\n');
  let foundTitle = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('# ')) {
      foundTitle = true; // Found the title (heading 1)
    } else if (foundTitle && line.length > 0 && !line.startsWith('#')) {
      // Once the title is found, return the next non-empty line as the description
      return line;
    }
  }
  return null; // Return null if no description found
};

// Generate the search index
const generateIndex = () => {
  const allFiles = walkDirectory(docsDirectory);
  const docs = [];

  allFiles.forEach((filepath) => {
    const content = fs.readFileSync(filepath, 'utf8');
    const { content: mdxContent } = matter(content); // Parse frontmatter and content using gray-matter

    // Extract the title from the first H1 in the content
    const title = extractFirstH1Title(mdxContent);

    // Extract the first paragraph after the title as the description
    const description = extractFirstParagraphAfterTitle(mdxContent);

    // Only include documents that have both a title and a description
    if (title && description) {
      // Derive the route from the file path
      const relativePath = path.relative(path.join(process.cwd(), 'pages'), filepath);
      const route = '/' + relativePath.replace(/\\/g, '/').replace(/\.(mdx|md)$/, '');

      docs.push({ route, title, description });
    } else {
      console.warn(`Skipped file ${filepath} due to missing title or description.`);
    }
  });

  // Write the search index to the public directory
  fs.writeFileSync(outputFile, JSON.stringify(docs, null, 2));
  console.log('Search index generated successfully at', outputFile);
};

generateIndex();
