function checkNumber(number) {
    if (number <= 3) {
        return number > 1;
    }
    if (number % 2 == 0 || number % 3 == 0) {
        return false;
    }
    for (var i = 5; i * i <= number; i += 6) {
        if (number % i == 0 || number % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}

console.log(checkNumber(1));
console.log(checkNumber(2));
console.log(checkNumber(3));
console.log(checkNumber(4));
console.log(checkNumber(9));
console.log(checkNumber(37));
console.log(checkNumber(97));
console.log(checkNumber(51));
console.log(checkNumber(-3));
console.log(checkNumber(0));





