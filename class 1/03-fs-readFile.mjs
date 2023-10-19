import { readFile } from "node:fs";

console.log("Reading first file...");
readFile("./someFile1.txt", "utf-8", (err, text1) => {
  console.log("First file info:", text1);
});

console.log("Doing other things while callbacks are working");

console.log("Reading second file...");
readFile("./someFile2.txt", "utf-8", (err, text2) => {
  console.log("Second file info:", text2);
});
