import { generateJSON } from "./generators.js";
import * as path from 'path';
import { fileURLToPath } from 'url';
import { writeFile } from "fs/promises";



function updateDataJson() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const csvPath = path.resolve(__dirname, 'sample.csv');
    const json = generateJSON(csvPath);
    console.log('json ::', json)
    
    // Write to json file
    const outPath = path.resolve(__dirname, '../static/data.json');
    writeFile(outPath, JSON.stringify(json))
}

updateDataJson()