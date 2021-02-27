function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.operation = function (input, type) {
    return new Vector(eval(`${this.x}${type}${input.x}`), eval(`${this.y}${type}${input.y}`))
}

Vector.prototype.plus = function (vec) {
    return this.operation(vec, '+')
}

Vector.prototype.minus = function (vec) {
    return this.operation(vec, '-')
}


const v1 = new Vector(1, 2)

console.log(v1.plus(new Vector(2, 3)))