class MultiplicatorUnitFailure extends Error { }

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
    // Your code here. 
    let sucess = false
    let result = 0
    while (!sucess) {
        try {
            result = primitiveMultiply(a, b)
            sucess = true
        } catch (e) {
            continue;
        }
    }
    return result
}

console.log(reliableMultiply(8, 8));
// → 64