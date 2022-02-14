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
        if (receivedString == 1) {
            basic.showIcon(IconNames.No)
            radio.sendNumber(6)
        } else if (receivedString == 1) {
            basic.showIcon(IconNames.Happy)
            radio.sendNumber(5)
        } else {
            basic.showIcon(IconNames.Asleep)
            radio.sendNumber(5)
        }
    } else if (jugar_2 == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        if (receivedString == 2) {
            basic.showIcon(IconNames.No)
            radio.sendNumber(6)
        } else if (receivedString == 2) {
            basic.showIcon(IconNames.Happy)
            radio.sendNumber(5)
        } else {
            basic.showIcon(IconNames.Asleep)
            radio.sendNumber(5)
        }
    } else if (jugar_2 == 3) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . # . .
            . # . # .
            # . . . #
            `)
        if (receivedString == 1) {
            basic.showIcon(IconNames.No)
            radio.sendNumber(6)
        } else if (receivedString == 2) {
            basic.showIcon(IconNames.Happy)
            radio.sendNumber(5)
        } else {
            basic.showIcon(IconNames.Asleep)
            radio.sendNumber(5)
        }
    } else if (receivedString == 4) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedString == 5) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.No)
    }
})
let jugar_2 = 0
let jugar = 0
radio.setGroup(1)
