const equationResult = (arr, fixed) => {
    const equation = arr.join(" ")
    if(!fixed) {
        return (eval(equation).toFixed(6))
    } else {
        return (eval(equation).toFixed(fixed))
    }
}

export {
    equationResult
}