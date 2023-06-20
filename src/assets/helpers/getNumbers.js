const arrayOfNumbers = () => {
    const numbers = Array.from(Array(10));
    const numIndex = [ ...numbers.map((_, i) => { return i })];
    
    return numIndex
}

export {
    arrayOfNumbers,
}