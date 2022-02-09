input.onGesture(Gesture.Shake, function () {
    jugar = randint(1, 3)
    radio.sendNumber(jugar)
    if (jugar == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (jugar == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
radio.onReceivedString(function (receivedString) {
    jugar_2 = randint(1, 3)
    if (jugar_2 == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (jugar_2 == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
let jugar_2 = 0
let jugar = 0
radio.setGroup(1)
