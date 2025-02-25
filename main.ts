basic.forever(function () {
    if (input.lightLevel() > 200) {
        music.ringTone(523)
    } else if (input.lightLevel() > 160) {
        music.ringTone(392)
    } else if (input.lightLevel() > 120) {
        music.ringTone(330)
    } else if (input.lightLevel() > 80) {
        music.ringTone(262)
    } else {
        music.rest(music.beat(BeatFraction.Whole))
    }
})
