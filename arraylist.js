function LinkedList() {
    this.head = null
    this.tail = null

    this.addListEnd = function (value) {
        const newNode = { value, rest: this.head }
        this.head = newNode
        if (!this.tail) {
            this.tail = newNode
        }
    }

    this.addListStart = function (value) {
        const newNode = { value, rest: null }
        if (!this.head) {
            this.head = newNode
        }
        if (!this.tail) {
            this.tail = newNode;
            return
        }
        this.tail.rest = newNode
        this.tail = newNode
    }

    this.prepend = function ({ ...newNode }) {
        if (!this.head) {
            this.head = newNode
        }
        if (!this.tail) {
            this.tail = newNode
            return
        }
        this.tail.rest = newNode
        this.tail = newNode
    }
    this.addListStartHead = function (value) {
        const newNode = { value, rest: null }
        if (!this.head) {
            this.head = newNode
            return
        }
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.rest === null) {
                currentNode.rest = newNode
                currentNode = newNode.rest
            } else {
                currentNode = currentNode.rest
            }
        }
    }
    this.getHead = function () {
        return { ...this.head }
    }
}


function prepend(value, nextValue) {
    const arrToLi = new LinkedList()
    arrToLi.prepend({ value, rest: nextValue })
    return arrToLi.getHead()
}

console.log(prepend(10, prepend(20, null)))
function arrayToList(arr) {
    const arrToLi = new LinkedList()
    for (let i = 0; i < arr.length; i++) {
        arrToLi.addListStart(arr[i])
    }

    return arrToLi.getHead()
}

function listToArray(list, finalArray = []) {
    if (list.rest === null) {
        finalArray.push(list.value)
        return finalArray
    } else {
        finalArray.push(list.value)
        return listToArray(list.rest, finalArray)
    }

}


function nth(arrList, n, count = 0) {
    if (count === n) {
        return arrList.value
    } else {
        return nth(arrList.rest, n, count + 1)
    }
}
// console.log(listToArray(arrayToList([1, 2, 3, 4, 5])))
console.log(nth(arrayToList([1, 2, 3, 4, 5]), 4))