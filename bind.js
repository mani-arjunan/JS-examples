Function.prototype.myBind = function(context){
    return (args) => this.call(context, args)
}


function man(name){
    console.log(this.name)
    console.log(name)
}

man.myBind({ name: 'Manikandan' })('asdasd')