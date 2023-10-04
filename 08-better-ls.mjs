import { readdir } from "node:fs";

const folderArgument = process.argv[2] ?? ".";

readdir(folderArgument, (err, files) => {
  if (err) {
    console.log("Error al leer el directorio", err);
    return;
  }

  files.forEach((file) => {
    console.log(file);
  });
});
