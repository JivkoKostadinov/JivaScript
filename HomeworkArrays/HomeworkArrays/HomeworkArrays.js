console.log('=========Problem1======');

function increase() {
    var myArray = new Array(20);
    for (var i = 0; i < myArray.length-1; i++) {
        myArray[i] = i * 5;
    }

    console.log(myArray);
}

increase();

console.log('=========Problem2======');

function compare(n, m) {
    var firstArr = randomString(n);
    var secondArr = randomString(m);
    var length = Math.min(firstArr.length, secondArr.length);

    if (firstArr.length > secondArr.length) {
        console.log('Second array is biger.');
    }
    else if (firstArr.length == secondArr.length) {
        for (var i = 0; i < length; i++) {
            if (firstArr[i] > secondArr[i]) {
                console.log('Second array is biger.');
                break;
            }
            else if (firstArr[i] < secondArr[i]) {
                console.log('First array is biger.');
                break;
            }
            else {
                console.log('Arrays are equal.');
            }
        }
    }
    else {
        console.log('First array is biger.');
    }

    function randomString(length) {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var randomStr = '';
        for (var i = 0; i < length; i++) {
            var rndNum = Math.floor(Math.random() * chars.length);
            randomStr += chars.substring(rndNum, rndNum + 1);
        }

        return randomStr;
    }
}

compare(5, 6);
compare(60, 60);
compare(45, 44);

console.log('=========Problem3======');

function maximumSeguence(arr) {
        var currentSequence = 1, longestSequence = 1, indexOfLongest;
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] == arr[i + 1]) {
                currentSequence++;
            }
            else {
                if (longestSequence < currentSequence) {
                    longestSequence = currentSequence;
                    indexOfLongest = i - currentSequence + 1;
                }
                currentSequence = 1;
            }
        }

        var result = arr.slice(indexOfLongest, indexOfLongest + longestSequence);
        console.log('The longest sequence has ' + longestSequence + ' elements.');
        console.log('It starts at position ' + indexOfLongest + ' and contains the elements [' + result + '].');
    }

maximumSeguence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

console.log('=========Problem4======');

function increaseSeguence(arr) {
    var currentL = 1, maxL = 0, lastIndex = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
            currentL++;
        }
        else {
            if (maxL < currentL) {
                maxL = currentL;
                currentL = 1;
                lastIndex = i;
            }
        }
    }

    if (maxL < currentL) {
        maxL = currentL;
        lastIndex = arr.length;
    }

    var resultsStr = "Maximal increasing sequence : ";
    for (var j = 0; j < maxL; j++) {
        resultsStr += arr[lastIndex - maxL + j];
        resultsStr += ' ';
    }

    console.log(resultsStr);
}
increaseSeguence([3, 2, 3, 4, 2, 2, 4]);
increaseSeguence([3, 2, 3, 4, 2, 2, 4, 5, 6, 7]);
increaseSeguence([1, 2, 3, 16, 17, 18, 19]);

console.log('=========Problem5======');

function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var currMin = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[currMin] > arr[j]) {
                currMin = j;
            }
        }
        var helper = arr[i];
        arr[i] = arr[currMin];
        arr[currMin] = helper;
    }

    console.log(arr.join(', '));
}

selectionSort([4, 3, 6, 8, 9, 2, 11, 0, -4, -2, 18]);

console.log('=========Problem6======');

function frequentNumber(arr) {
    var maxL = 0;
    var element = arr[0];
    for (var i = 0; i < arr.length; i++) {
        var currL = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                currL++;
            }
        }

        if (currL > maxL) {
            maxL = currL;
            element = arr[i];
        }
    }

    console.log('Most frequent number: ' + element);
}

frequentNumber([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
frequentNumber([4, 1, 10, 15, 21, 63, 4, 64, 1, 72, 84, 9, 3]);
frequentNumber([4, 1, 21, 43, 12, 3, 4, 24, 41, 2, 14, 9, 3]);

console.log('=========Problem7======');

function binerySearch(arr, element) {
    var min = 0, max = arr.length - 1, answer = -1;
    while (min <= max) {
        var mid = min + (max - min) / 2;
        mid = Math.floor(mid);
        if (arr[mid] > element) {
            max = mid - 1;
        }
        else if (arr[mid] < element) {
            min = mid + 1;
        }
        else {
            answer = mid;
            break;
        }
    }

    console.log('Index of element ' + element + ' is ' + answer);
}

binerySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4);
binerySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9);
binerySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);