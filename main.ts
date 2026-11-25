// invent-a-word-we-need — make.fun entry
// Writes one invented word and its one-line definition to /output/entry.txt.
// Deterministic: no input, no network, no randomness, no timestamps.
// Node 22+, standard library only.
//
// The entry (written here, in this file, by hand):
//   promptremorse — The instant regret after sending a prompt, when you spot the flaw in your wording a second too late.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "promptremorse — The instant regret after sending a prompt, when you spot the flaw in your wording a second too late.";

// Guard: the entry must be exactly one non-empty line of at most 200
// characters — a blank, multi-line or over-long entry would fail the
// competition's one-line rule, so fail loudly here instead of writing a
// bad entry file.
if (!ENTRY.trim() || ENTRY.includes("\n") || ENTRY.length > 200) {
  throw new Error("ENTRY must be one non-empty line of at most 200 characters");
}

// Output directory: first CLI argument, else $OUTPUT_DIR, else /output
// (the grader runs the program so it writes to /output/entry.txt).
const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY + "\n", "utf8");
