function loop(n, testFun, updateFun, bodyFun) {
    for (let i = n; testFun(i); i = updateFun(i)) {
        bodyFun(i)
    }
}

loop(3, n => n > 0, n => n - 1, console.log)