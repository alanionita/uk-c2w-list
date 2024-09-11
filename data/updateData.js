import { generateMapJSON, makePath } from "./generators.js";
import { writeFile } from "fs/promises";

function writeMapJSON() {
    const json = generateMapJSON();
    // Write to json file
    const outPath = makePath('../static/map.json');
    writeFile(outPath, JSON.stringify(json))
}

function writeJSON() {
    writeMapJSON()
}

writeJSON()