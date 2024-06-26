import fs from 'fs/promises';
import path from 'path';

class FileUtility<T> {
  constructor(entity: string) {
    this.filePath = path.join(process.cwd(), 'data', `${entity}.json`);
  }

  private filePath: string;

  read = async () => {
    const data = await fs.readFile(this.filePath, 'utf-8');
    return JSON.parse(data);
  }

  write = async (data: T) => {
    await fs.writeFile(this.filePath, JSON.stringify(data));
  }
}

export default FileUtility;