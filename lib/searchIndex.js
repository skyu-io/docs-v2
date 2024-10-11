import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDirectory = path.join(process.cwd(), 'docs');

export function getDocsData() {
  const fileNames = fs.readdirSync(docsDirectory);
  const allDocsData = fileNames.map((fileName) => {
    const filePath = path.join(docsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // Use gray-matter to parse the frontmatter and content
    const { content, data } = matter(fileContents);

    return {
      content,
      data,
      fileName,
    };
  });

  return allDocsData;
}
