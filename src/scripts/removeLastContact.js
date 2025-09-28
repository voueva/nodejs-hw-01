import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export const removeLastContact = async () => { 
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const dbPath = join(__dirname, '../db/db.json');
    
        const raw = await readFile(dbPath, 'utf8');
        let data = JSON.parse(raw);
    
        if (Array.isArray(data) && data.length > 0) {
          data.pop(); 
        } else if (data && Array.isArray(data.contacts) && data.contacts.length > 0) {
          data.contacts.pop();
        } else {
          console.log();
          return;
        }
    
        await writeFile(dbPath, JSON.stringify(data, null, 2), 'utf8');
        console.log();
      } catch (err) {
        console.error(err.message);
        throw err;
      }
    };
    
removeLastContact();
