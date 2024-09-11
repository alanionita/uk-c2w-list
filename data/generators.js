import fs from 'fs'
import { parse } from 'csv-parse/sync'
import { rowToMapRecord } from './MapRecord.js'

export function generateJSON(csvFilePath) {
    try {

        const fileData = fs.readFileSync(csvFilePath)
        const [header, ...rows] = parse(fileData, { columns: false, trim: true })

        const mapRecords = rows.map(rowToMapRecord);
        return mapRecords
    } catch (err) {
        console.error('Err [generateJSON] : ', err.message);
        return;
    }
}