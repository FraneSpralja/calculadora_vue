const printNumbers = () => {
    const numbers = Array.from( Array( 10 ) )
    const indexNumbers = numbers.map( ( _ , i ) => i )
    return indexNumbers;
}

export default printNumbers;