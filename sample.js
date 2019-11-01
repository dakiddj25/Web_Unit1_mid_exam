function product(arr = 0) {
    let product = 1;
    if(arr.length === 0){ product *= arr.length}
    arr.forEach((el) => {
        product *= el 
    })

    return product
}

console.log(product(([1,2,3])))