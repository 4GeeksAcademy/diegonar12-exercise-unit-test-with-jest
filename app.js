// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar){
    let valueInYen = valueInDollar * 149.8 
    return valueInYen
}

const fromYenToPound = function (valueInYen){
    let valueInPound = valueInYen * 0.0053
    return valueInPound
}

module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound,
}

console.log(fromEuroToDollar(4))
console.log(fromDollarToYen(2))
console.log(fromYenToPound(2))