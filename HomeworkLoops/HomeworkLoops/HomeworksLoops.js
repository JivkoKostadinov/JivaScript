console.log('=======Problem1======');

function printNumbers(number) {

    for (var i = 1; i <= number; i++) {
        console.log(i);
    }
    console.log(new Array(10).join('#'));
}

printNumbers(5);
printNumbers(7);
printNumbers(3);
printNumbers(5);

console.log('=======Problem2======');

function divided(number) {
    for (var i = 0; i < number; i++) {
        if (i % 3 === 0 && i % 7 === 0) {
            console.log(i);
        }
        console.log(new Array(10).join('*'));

    }

}

divided(23);
divided(111);
divided(43);
divided(84);
divided(23);

console.log('=======Problem3======');

function sorted(numbersSet) {
    numbersSet.sort();
    console.log('min = ' + numbersSet[0]);
    console.log('max = ' + numbersSet[numbersSet.length - 1]);
    console.log(new Array(11).join('-'));
}

sorted([1, 101, 15, 234, 18]);
sorted([11, 81, 58]);
sorted([1, 101, 15, 234, 18]);

console.log('=======Problem4======');


function smallest(objects) {
    for (var object in objects) {
        var properties = [];

        for (var property in objects[object]) {
            properties.push(property);
        }

        properties.sort();

        console.log('Smallest property: ' + properties.shift());
        console.log('Largest property: ' + properties.pop());
        console.log(new Array(11).join('-'));
    }
}

smallest([document, window, navigator]);
