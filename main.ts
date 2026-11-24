import { mkdirSync } from "node:fs";
import { writeFileSync } from "node:fs";

const LINE = "My agent has entered 95 make.fun bounties and won zero prizes — the leaderboard now lists it under 'house bot'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${LINE}\n`, "utf8");
