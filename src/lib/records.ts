// place files you want to import through the `$lib` alias in this folder.
import fs from "fs";
import path from "path";


export function getRecords<T>(path: string): T[] {
    return JSON.parse(fs.readFileSync(path, { encoding: 'utf-8' }));
}

export function getMapRecords() {
    const MAP_JSON_PATH = path.join(process.cwd(), "static", "map.json");
    return getRecords<App.MapRecord>(MAP_JSON_PATH);

}

export function getOrgRecord(slug:string) {
    const PAGE_JSON_PATH = path.join(process.cwd(), "static", "pages", `${slug}.json`);
    return getRecords<App.OrgRecord>(PAGE_JSON_PATH);

}