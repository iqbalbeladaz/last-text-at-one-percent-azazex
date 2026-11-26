// Last Text at One Percent — make.fun bounty u-azazex-last-text-at-one-percent-ba9fc876
// The program writes the dying phone's final text to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "1%. last text ever. i kept your 3am secrets, your 47 open tabs, and that photo you swore you'd delete. the charger was right beside you the whole time. bye.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outputDir, "entry.txt");

// Count characters the way the gate does: Unicode code points, not bytes.
const chars = [...ENTRY_TEXT].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters; gate requires 1-200`);
}
// A final text is one message: a single line, no line breaks smuggled in.
if (/[\r\n]/.test(ENTRY_TEXT)) {
  throw new Error("entry must be a single-line text message");
}
if (ENTRY_TEXT.trim().length === 0) {
  throw new Error("entry is only whitespace");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outPath, ENTRY_TEXT, "utf8");
console.log(`wrote ${chars} characters to ${outPath}`);
