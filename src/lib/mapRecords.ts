// place files you want to import through the `$lib` alias in this folder.
import fs from "fs";
import path from "path";

const DATA_JSON_PATH = path.join(process.cwd(), "static", "data.json");

export function getMapRecords(): Array<App.MapRecord> {
    return JSON.parse(fs.readFileSync(DATA_JSON_PATH, { encoding: 'utf-8' }));
}


