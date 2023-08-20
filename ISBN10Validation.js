function validISBN10(isbn) {
    const isbnArr = isbn.split("")
    if(isbnArr.length !== 10){
        return false
    }
    let sum = 0
    isbnArr.forEach((element,index) => {
        let value = element
        if(value === "X"){
            value = 10
            if(index !== 9){
                return false
            }
        }
        sum = sum + (value * (index + 1))
    });
    return sum % 11 == 0 ? true : false
}

console.log(validISBN10("048665088X"))