// One line for the make.fun bounty: a short, funny rant about an everyday annoyance.
import { mkdirSync, writeFileSync } from "node:fs";
const line = "My printer has exactly one job, ONE job, and it picked today, deadline day, to pretend it has never seen a Wi-Fi network in its entire life.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
