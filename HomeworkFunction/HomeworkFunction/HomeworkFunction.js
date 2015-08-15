console.log('-----Problem1-----');

function ehglishDigit(number) {
    
    var searchNumber = number % 10;
    
    switch (searchNumber) {
        case 1: console.log('One'); break;
        case 2: console.log('Two'); break;
        case 3: console.log('Three'); break;
        case 4: console.log('Four'); break;
        case 5: console.log('Five'); break;
        case 6: console.log('Six'); break;
        case 7: console.log('Seven'); break;
        case 8: console.log('Eight'); break;
        case 9: console.log('Nine'); break;
        case 0: console.log('Zero'); break;
        default:
            console.log('Please enter number between 0 and 9');

    }

}

ehglishDigit(512);
ehglishDigit(1024);
ehglishDigit(12309);
ehglishDigit(512);

console.log('-----Problem2-----');

var num = 123.45;

var reversedNum = digitReverse(num);
console.log(reversedNum);

function digitReverse(num) {
    num = num + '';  
    num = num.split(''); 
    num.reverse(); 
    num = num.join('');
    return num * 1; 
}

console.log('-----Problem3-----');

function countOccurrences(text, searchedWord, isCaseSensitive) {
    isCaseSensitive = isCaseSensitive || false;    
    var substrings = text.split(searchedWord);
    return substrings.length - 1;
}

function printResult() {
    var text = 'This is Telerik Academy in telerik';
    var searchedWord = 'Telerik';
    console.log(countOccurrences(text, searchedWord, true));
}

printResult();


console.log('-----Problem4-----');


function searchDiv() {
    return document.getElementsByTagName('div').length;
}

console.log(searchDiv());

console.log('-----Problem5-----');

function count(arr, num) {
    var answer = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            answer++;
        }
    }
    console.log('The number' + ' ' + num + ' ' + 'is count in this string ' + ' ' + answer);

   // return answer;
}

console.log(count([1, 2, 3, 4, 1, 2, 4, 2, 3, 1, 4, 2, 3, 2], 2));
console.log(count([1, 2, 3, 4, 1, 2, 4, 2, 3, 1, 4, 2, 3, 2], 3));
console.log(count([1, 2, 3, 4, 1, 2, 4, 2, 3, 1, 4, 2, 3, 2], 1));
console.log(count([1, 2, 3, 4, 1, 2, 4, 2, 3, 1, 4, 2, 3, 2], 4));


console.log('-----Problem6-----');

function largerNumber(arr, number) {
    if (number <= 0 || number >= arr.length - 1) {
        console.log("Please take another element's position.");
    }
    else {
        if (arr[number] > arr[number - 1] && arr[number] > arr[number + 1]) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}

largerNumber([1, 2, 3, 4, 1, 2, 4, 2, 3, 1, 4, 2, 3, 2], 3);
largerNumber([1, 2, 3, 4, 1, 2, 4, 2, 3, 1, 4, 2, 3, 2], 4);
largerNumber([1, 2, 3, 4, 1, 2, 4, 2, 3, 1, 4, 2, 3, 2], 1);
largerNumber([1, 2, 3, 4, 1, 2, 4, 2, 3, 1, 4, 2, 3, 2], 5);


console.log('-----Problem7-----');

function FirstLarger(arr) {
    var hasFound = false;
    for (var i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            hasFound = true;
            return i;
        }
    }

    if (!hasFound) {
        return -1;
    }
}

console.log(FirstLarger([1, 2, 3, 4, 1, 2, 4, 2, 3, 1, 4, 2, 3, 2]));
console.log(FirstLarger([1, 1, 1, 1, 1]));
