import { generateMapJSON, generatePageJSON, makePath } from "./generators.js";
import { writeFile } from "fs/promises";

function writeMapJSON() {
    const json = generateMapJSON();
    // Write to json file
    const outPath = makePath('../static/map.json');
    writeFile(outPath, JSON.stringify(json))
}

function writePageJSON() {
    const json = generatePageJSON();
    const slugs = Object.keys(json);
    slugs.forEach(slug => {
        // Write to json file
        const outPath = makePath(`../static/pages/${slug}.json`);
        writeFile(outPath, JSON.stringify(json[slug]))
    })
}

function writeJSON() {
    writeMapJSON()
    writePageJSON()
}

writeJSON()