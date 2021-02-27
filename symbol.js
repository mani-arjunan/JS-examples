function Group() {
    this.elements = {}
}

Group.prototype.add = function (val) {
    if (this.elements && this.elements[val]) {
        return
    }
    this.elements[val] = val
}

Group.prototype.has = function (val) {
    return Object.keys(this.elements).filter(values => val.toString() === values).length > 0 ? true : false
}

Group.prototype.delete = function (val) {
    if (this.elements[val]) {
        delete this.elements[val]
        return true
    }
    return 'Element not found'
}

Group.from = function (arr) {
    const g1 = new Group()
    if (Array.isArray(arr)) {
        arr.map(values => g1.add(values))
    } else {
        return 'Should be an array'
    }
    return g1
}

// const g1 = new Group()
// g1.add(2)
// console.log(g1.has(2))

// console.log(g1)

const group = Group.from([10, 20, 20, 20, 30])

console.log(group.has(10))