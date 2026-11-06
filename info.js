import os from "node:os";
import process from "node:process";

console.log("Node :", process.version);
console.log("OS :", os.type());

const d = new Date();
console.log("Date :", d.toLocaleDateString());
