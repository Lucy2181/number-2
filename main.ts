let Rock = 0
input.onGesture(Gesture.Shake, function () {
    Rock = randint(1, 3)
    if (Rock == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (Rock == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (Rock == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            # # # . .
            # # # . .
            `)
    }
})
basic.forever(function () {
	
})
