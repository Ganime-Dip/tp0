import os from "node:os";
import process from "node:process";

console.log("Node :", process.version);
console.log("OS :", os.type());

const d = new Date();
console.log("Date :", d.toLocaleDateString());

const go = os.freemem() /1024 ** 3;
console.log("RAM :", go.toFixed(1), "Go");