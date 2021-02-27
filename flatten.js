function flatten(arr) {
    return arr.reduce((prev, curr) => prev.concat(curr))
}

console.log(flatten([[1, 2, 3], [4, 5], [6]]))
