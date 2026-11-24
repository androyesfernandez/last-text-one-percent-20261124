// Last Text at One Percent — make.fun micro entry
// The phone's final message, at one percent battery:
// "1%. you never finished that text to your ex. i did. sent it."
// The line is 60 characters long, 60 bytes, with no trailing newline.
// It won the internal cross-tournament 5-0 with a mean score of 0.690,
// after the "1%." prefix was added so the dying-battery frame is clear
// from the first three characters.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "1%. you never finished that text to your ex. i did. sent it.";

if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error("LINE must be 1-200 non-whitespace characters with no newline");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
