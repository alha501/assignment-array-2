input.onButtonPressed(Button.A, function () {
    a = heroes_rate[randint(0, 4)]
    basic.showString("" + (a))
})
input.onButtonPressed(Button.AB, function () {
    if (a > b) {
        basic.showString("" + (a))
        basic.showString("Hero Win")
    } else if (a < b) {
        basic.showString("" + (b))
        basic.showString("Villain Win")
    }
})
input.onButtonPressed(Button.B, function () {
    b = villains_rate[randint(0, 4)]
    basic.showString("" + (b))
})
let b = 0
let a = 0
let villains_rate: number[] = []
let heroes_rate: number[] = []
let superheroes = [
"Spider Man",
"Captain Marvel",
"Captain America",
"Batman",
"Thor"
]
heroes_rate = [
6,
5,
4,
7,
8
]
let supervillains = [
"Thanos",
"Joker",
"Hades",
"Venom",
"Dr Doom"
]
villains_rate = [
10,
9,
5,
5,
4
]
basic.forever(function () {
	
})
