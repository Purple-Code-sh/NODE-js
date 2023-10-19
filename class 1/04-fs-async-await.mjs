import { readFile } from "node:fs/promises";

console.log("Reading first file...");
const text1 = await readFile("./someFile1.txt", "utf-8");
console.log("First file info:", text1);

console.log("Doing other things while callbacks are working");

console.log("Reading second file...");
const text2 = await readFile("./someFile2.txt", "utf-8");
console.log("Second file info:", text2);
