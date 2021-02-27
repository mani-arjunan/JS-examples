let str = ""
let parentLoopRemainder = 0
for(let i=0;i<8;i++){
    parentLoopRemainder = i%2
    for(let j=0;j<8;j++){
        if(j % 2 === parentLoopRemainder){
            str+= " "
        } else {
            str += "#"
        }
    }
    console.log(str)
    str=""
 }