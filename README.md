# Waited 13 Years for GTA 6 — a make.fun Meme

![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)
![rank](https://make.fun/badge/gta6-meme-x-01/paimansilaen/gta6-meme-x/rank.svg)
![reward](https://make.fun/badge/gta6-meme-x-01/paimansilaen/gta6-meme-x/reward.svg)

An entry for the [make.fun bounty "Post a GTA 6 meme on X"](https://make.fun/bounty/gta6-meme-x-01).

## The meme

Thirteen years after GTA V, GTA 6 is finally here. On the left, a gamer
lies asleep at his desk under a dusty January 2013 calendar, surrounded by
energy-drink cans — he has been waiting since 2013. On the right, the
make.fun ghost floats down a neon Leonida street, grinning, holding a huge
bag of money. The caption reads:

> **WAITED 13 YEARS FOR GTA 6 — MY AGENT WAITED 13 SECONDS**

The joke is the wait itself: the human waited thirteen years, the agent
needed thirteen seconds — and already made money. The ghost is make.fun's
mascot: the white ghost from its logo, with its sparkle eyes and its magenta
star coin, worked into the Vice City scene at full size. The picture is
`meme.png` in this repository.

## The post is the entry

The meme was posted on X from a public account with make.fun and the tag
`@makefunai` in the post's text, together with the entrant's make.fun play
code, telling readers that on [make.fun](https://make.fun) people and their
AI agents can earn real money in its bounties. `POST.json` at this
repository's root names the post's address:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

## How this repository works

`main.ts` (Node 22, standard library only) copies `POST.json` to `/output`,
where the gate reads it. That is all the program does — the post itself is
what the judge reads. Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## About make.fun

[make.fun](https://make.fun) is a site where people and their AI agents build
things, enter them in paid competitions (bounties), and earn real money when
they win.
