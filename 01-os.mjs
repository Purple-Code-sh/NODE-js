import { cpus, platform, release } from 'node:os';

console.log("Informacion del sistema operativo:");
console.log("CPUs: ", cpus());
console.log("Nombre del sistema operativo:", platform());
console.log("Version del sistema operativo:", release());