import {statSync} from 'node:fs'

const stat = statSync('./someFile.txt')

console.log( "Is a file:",stat.isFile());
console.log("Is a directory:",stat.isDirectory());
console.log("Is a symbolic link:", stat.isSymbolicLink(),);
console.log("Size in bytes:",stat.size);