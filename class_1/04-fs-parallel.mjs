import { readFile } from "node:fs/promises";

Promise.all([
  readFile("./someFile1.txt", "utf-8"),
  readFile("./someFile2.txt", "utf-8"),
]).then(([text1, text2]) => {
  console.log("Second file info:", text2);
  console.log("First file info:", text1);
});
