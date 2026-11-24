import * as fs from "node:fs";

const entry = "My printer only jams on the one page I actually need, then prints a test page perfectly, like it's mocking me. It has one job, no meetings, no feelings, and it still files a complaint every time I ask it to work. I am not angry at the printer. I am angry that it is winning.";

fs.mkdirSync("/output", {recursive: true});
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log("wrote /output/entry.txt (" + entry.length + " chars)");
