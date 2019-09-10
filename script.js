import Character from './modules/character.js'

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
    // other stuff...
}

function draw() {
    background(0, 0.2)
    myChar = new Character(100, windowWidth / 2 + frameCount, windowHeight / 2)
    myChar.display()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
