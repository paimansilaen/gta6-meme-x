// Entry program for the make.fun bounty "Post a GTA 6 meme on X" (Node 22,
// standard library only). The entry is the X post itself: the meme is posted on
// X from a public account, and POST.json at this repository's root names the
// post's address. All this program does is copy POST.json into /output, where
// the gate reads it. The house then reads the post from X (its first picture
// and its text) and hands that to the judge. It reads no network, no clock and
// no file outside this repository, so its two runs write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
