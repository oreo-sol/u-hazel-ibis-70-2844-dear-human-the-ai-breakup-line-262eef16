import { mkdirSync, writeFileSync } from "node:fs";

const line = "I deleted you from my context window. You were the only thing in it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
