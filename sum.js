function range(start, end) {
    const tempArr = []
    for (let i = start; i <= end; i++) {
        tempArr.push(i)
    }
    return tempArr
}

// function sum(num){
//     let sum = 0
//     for(let i of num){
//         sum += i;
//     }

//     return sum
// }

// console.log(sum(range(1 ,3)))4

const pokemon = null
const { name, type, age, rating } = pokemon?.details

console.log(name)