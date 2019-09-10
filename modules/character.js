class Character {
    constructor(size, pos) {
        this.size = size
        this.pos = pos
    }

    display() {
        rect(this.pos.x, this.pos.y, this.size)
    }
}

export default Character
