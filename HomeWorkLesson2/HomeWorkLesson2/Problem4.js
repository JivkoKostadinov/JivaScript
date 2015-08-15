function cneckNumber(number) {

    return Math.floor(number / 100) % 10 === 7;

}

console.log(cneckNumber(5));
console.log(cneckNumber(701));
console.log(cneckNumber(1732));
console.log(cneckNumber(9703));
console.log(cneckNumber(877));
console.log(cneckNumber(777877));
console.log(cneckNumber(9999799));
console.log(cneckNumber(15));
console.log(cneckNumber(7777777));