import fs from 'fs'
import * as path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'csv-parse/sync'
import { rowToMapRecord } from './MapRecord.js'
import { rowToPageRecord } from './PageRecord.js'

export function makePath(to) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    return path.resolve(__dirname, to)
}

function readCSV() {
    try {
        const csvPath = makePath('sample.csv')
        const fileData = fs.readFileSync(csvPath)
        const [header, ...rows] = parse(fileData, { columns: false, trim: true })
        return rows
    } catch (err) {
        console.error('Err [readCSV] : ', err.message);
        return;
    }
}

export function generateMapJSON() {
    try {
        const rows = readCSV()
        const mapRecords = rows.map(rowToMapRecord);
        return mapRecords
    } catch (err) {
        console.error('Err [generateMapJSON] : ', err.message);
        return;
    }
}

export function generatePageJSON() {
    try {
        const rows = readCSV()
        const pages = rows.map(rowToPageRecord);

        const pagesObj = pages.reduce((acc, page) => {
            if (!page.slug) return acc;
            acc[page.slug] = page;
            return acc;
        }, {});
        return pagesObj
    } catch (err) {
        console.error('Err [generatePageJSON] : ', err.message);
        return;
    }
}