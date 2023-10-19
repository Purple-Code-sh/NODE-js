import { sep, join, basename, extname } from "node:path";

console.log("What separate character do I have:", sep);

const joinedPaths = join("main", "subfolder", "subsubfolder");
console.log("Joined paths:", joinedPaths);

const fileNameWithExt = basename("/tmp/some_folder/some.txt");
const fileName = basename("/tmp/some_folder/some.txt", ".txt");
console.log("file name with extension:", fileNameWithExt);
console.log("file names without extension:", fileName);

const extension = extname("image.jpg");
console.log(extension);
