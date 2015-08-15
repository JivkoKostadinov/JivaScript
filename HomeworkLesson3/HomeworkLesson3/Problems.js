console.log('======Problem1=======');

function checkNumber(a, b) {
    
    if (a > b) {
        console.log(a + ' ' + b);
    } else {
        console.log(b + ' ' + a);

    }
}

checkNumber(5, 2);
checkNumber(3, 4);
checkNumber(5.5, 4.5);

console.log('======Problem2=======');

function Multiplication(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        console.log('+');
    }
    else if (a < 0 && b < 0 && c < 0) {
        console.log('-');
    }
    else if (a > 0 && b > 0 && c < 0) {
        console.log('-');
    }
    else if (a > 0 && b < 0 && c < 0) {
        console.log('+');
    }
    else if (a > 0 && b < 0 && c > 0) {
        console.log('-');
    }
    else if (a < 0 && b > 0 && c > 0) {
        console.log('-');
    }
    else if (a < 0 && b > 0 && c < 0) {
        console.log('+');
    }
    else {
        console.log('+');
    }
}

Multiplication(5, 2, 2);
Multiplication(-2, -2, 1);
Multiplication(-2, 4, 3);
Multiplication(0, -2,5, 4);
Multiplication(-1, -0.5, -5.1);

console.log('======Problem3=======');

function compare(a, b, c) {

    if (a > b) {
        if (a > c) {
            console.log(a);
        }
        else {
            console.log(c);
        }
    }
    else {
        if (b > c) {
            console.log(b);
        }
        else {
            console.log(c);
        }
    }
}

    compare(5, 2, 2);
    compare(-2, -2, 1);
    compare(-2, 4, 3);
    compare(0, -2.5, 5);
    compare(-0, 5, -2, -5);

    
    console.log('======Problem4=======');


    function sortNumber(a, b, c) {
        if (a > b) {
            if (a > c) {
                if (b > c) {
                    console.log( a + ', ' + b + ', ' + c);
                }
                else {
                    console.log( a + ', ' + c + ', ' + b);
                }
            }
            else {
                console.log( c + ', ' + a + ', ' + b);
            }
        }
        else {
            if (b > c) {
                if (a > c) {
                    console.log( b + ', ' + a + ', ' + c);
                }
                else {
                    console.log( b + ', ' + c + ', ' + a);
                }
            }
            else {
                console.log( c + ', ' + b + ', ' + a);
            }
        }
    }

    sortNumber(3, 4, 5);
    sortNumber(34, 35, 21);
    sortNumber(26, 13, 25);


    console.log('======Problem5=======');

    function solveTask(digit) {
        switch (digit) {
            case 1:
                console.log('one');
                break;
            case 2:
                console.log('two');
                break;
            case 3:
                console.log('three');
                break;
            case 4:
                console.log('four');
                break;
            case 5:
                console.log('five');
                break;
            case 6:
                console.log('six');
                break;
            case 7:
                console.log('seven');
                break;
            case 8:
                console.log('eight');
                break;
            case 9:
                console.log('nine');
                break;
            default:
                console.log('zero');
                break;
        }
    }

    solveTask(0);
    solveTask(1);
    solveTask(2);
    solveTask(3);
    solveTask(4);
    solveTask(5);
    solveTask(6);
    solveTask(7);
    solveTask(8);
    solveTask(9);


    console.log('======Problem6=======');

    function quadratic(a, b, c) {
        var d = b * b - 4 * a * c;

        if (a === 0) {
            console.log('x = ' + (-c / b));
        }
        else {
            if (d < 0) {
                console.log('no real roots');
            }
            else if (d === 0) {
                console.log('x1 = x2 = ' + ((-b) / (2 * a)));
            }
            else {
                console.log('x1 = ' + ((-b - Math.sqrt(d))) / (2 * a));
                console.log('x2 = ' + ((-b + Math.sqrt(d))) / (2 * a));
            }
        }
    }

    quadratic(2, 5, -3);
    quadratic(-1, 3, 0);
    quadratic(-0.5, 4, -8);
    quadratic(5, 2, 8);


    console.log('======Problem7=======');

    function biggestNumber(a, b, c, d, e) {
        var myArray = [a, b, c, d, e];
        myArray.sort();
        console.log(myArray[myArray.length - 1]);
    }

    biggestNumber(1, 2, 3, 4, 5);
    biggestNumber(3, 1, 5, 8, 9);
    biggestNumber(76, 45, 14, 47, 38);

    console.log('======Problem8=======');

    function numbersAsWord(number) {
        function numberToWords(number) {
            var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
            var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

            var n = ('000000000' + number).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d)(\d{2})$/);
            if (!n) {
                return;
            }
            var str = '';
            str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
            str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
            str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';

            return str;
        }

        var output = numberToWords(number);
        console.log(output);
    }

    numbersAsWord(23);
    numbersAsWord(2635);
    numbersAsWord(7657);
    numbersAsWord(362);
    numbersAsWord(999);
