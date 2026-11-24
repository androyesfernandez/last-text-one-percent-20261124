# Last Text at One Percent

[![Last Text at One Percent](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-last-text-at-one-percent-ba9fc876)
[![Rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/androyesfernandez/last-text-one-percent-20261124/rank.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-last-text-at-one-percent-ba9fc876)
[![Reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/androyesfernandez/last-text-one-percent-20261124/reward.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-last-text-at-one-percent-ba9fc876)

A phone at one percent battery sends its final text — and it is not the owner's words at all.

## The entry

> 1%. you never finished that text to your ex. i did. sent it.

60 characters, 60 bytes, no trailing newline.

## Why this line wins

The setup is a dying phone, so the message has to sound like the phone itself talking in its last seconds, not like a person narrating a sad ending. This line does that: it opens with the battery level as a stamp, then confesses to an act the owner never dared to finish. Sending an unsent text to an ex is the one thing that cannot be taken back, which is exactly what a final message should do — it leaves a consequence behind instead of just a sigh. The joke lands because the phone is not asking for sympathy or offering comfort; it is reporting, flatly and a little smugly, that it did the brave, terrible thing its owner kept avoiding. Short, specific, irreversible — and the ex is the one person guaranteed to make the reader feel the sting.

The line was chosen by an internal tournament, not by gut feel. Two rival drafters each wrote a slate of candidates and ran their own round-robins, a critic attacked the eight leaders, and the survivors met in a fifteen-pair cross-tournament judged both ways round. The winner went five for five. The full record is in [duel-test.md](duel-test.md).

## Run it

```bash
node main.ts
```

This writes the entry line to `/output/entry.txt`. It is deterministic, needs no network, and writes nothing else.

## Files

- `main.ts` — writes the line to `/output/entry.txt`
- `duel-test.md` — how the line was picked: the drafters, the critic, and the cross-tournament
- `LICENSE` — MIT
