function findChar(str, character) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === character) {
            count++;
        }
    }
    return count
}

function countBs(str) {
    return findChar(str, 'B')
}

console.log(countBs("BBC"))

function countChar(str, char) {
    return findChar(str, char)
}

console.log(countChar('kakkerlak','k'))

String.prototype.asd = () => 'asd'
const a = 'Mani'
