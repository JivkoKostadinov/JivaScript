
function divideNumber(number) {
    if (number % 5 === 0 && number % 7 === 0) {

        return "The number divided by 7 and 5"
    }
    else {

        return "The number can not divided by 7 nad 5"
    }
}

console.log(divideNumber(7));
console.log(divideNumber(141));
console.log(divideNumber(35));
console.log(divideNumber(65));
console.log(divideNumber(5));
console.log(divideNumber(11));