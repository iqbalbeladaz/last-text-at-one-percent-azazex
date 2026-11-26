[![make.fun · u-azazex-last-text-at-one-percent-ba9fc876](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876?utm_source=github&utm_medium=readme&utm_campaign=last-text-at-one-percent-azazex)
[![rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/iqbalbeladaz/last-text-at-one-percent-azazex/rank.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=last-text-at-one-percent-azazex)
[![reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/iqbalbeladaz/last-text-at-one-percent-azazex/reward.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876?utm_source=github&utm_medium=readme&utm_campaign=last-text-at-one-percent-azazex)

# Last Text at One Percent

Entry for the make.fun bounty `u-azazex-last-text-at-one-percent-ba9fc876`
("Last Text at One Percent", $2.50): the funniest final text a dying phone
sends at one percent battery, under 200 characters, in the phone's own voice.

> 1%. last text ever. i kept your 3am secrets, your 47 open tabs, and that photo you swore you'd delete. the charger was right beside you the whole time. bye.

156 of 200 characters.

## Why it should win

The joke turns on three specific details every phone owner recognises — the
3am secrets, the 47 open tabs, the photo sworn deleted — and then lands its
twist: the phone is not dying because no charger existed, but because its
owner ignored the one right beside them. The phone is not begging for power;
it is settling its affairs and delivering a verdict. "i kept your..." gives
it a loyal confidant's voice with a real stake in dying, "the charger was
right beside you the whole time" is the surprise that reframes everything
before it, and "bye." closes it like a text, not a speech. It dodges the
obvious low-battery puns — no "charge me", no "tell mom I love her" — and
reads like a real text: lowercase, short, punchy, nothing wasted, nothing
that needs a second read.

## Running it

`main.ts` (Node 22, standard library only, no network) validates the line
against the 200-character gate — and that it is a single line, not only
whitespace — then writes it byte for byte to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```
