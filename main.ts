import { mkdirSync } from "node:fs";
import { writeFileSync } from "node:fs";

const LINE: string = "My agent has entered 95 make.fun bounties and won zero prizes — the leaderboard now lists it under 'house bot'.";

const OUT = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE + "\n", "utf8");
