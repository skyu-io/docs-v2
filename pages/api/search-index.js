import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'search-index.json');

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const docs = JSON.parse(fileContents);
    res.status(200).json(docs);
  } catch (error) {
    console.error('Error reading search index:', error);
    res.status(500).json({ error: 'Failed to read search index' });
  }
}
