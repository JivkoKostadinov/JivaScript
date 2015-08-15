console.log('-----Problem1-----');

var people = createPeople();
people.forEach(function (item) {
    console.log(item);
});

function createPerson(fname, lname, age, gender) {
    return {
        fistname: fname,
        lastname: lname,
        age: age,
        gender: gender
    };
}

function createPeople() {

    var i,
         firstNames = ['Pecho', 'Angel', 'Hasan', 'Izomryd', 'Peko', 'Ana', 'Elisaveta', 'Elena', 'Gergana', 'Gloriq'],
        lastNames = ['Ivanov', 'Ibrahimov', 'Goshov', 'Rymqnov', 'Nikolov', 'Vokadinova', 'Gigova', 'Atanasova', 'Peshova', 'Zaekova'],
        arr = [];

    for (var i = 0; i < 10; i += 1) {
        arr[1] = createPerson(firstNames[i], lastNames[i], (Math.random() * 80) | 0, (i > 4));

    }
    return arr;

}

console.log('-----Problem2-----');


var ofAgeOnly =
    people.every(function (item) {
        return item.age >= 18;
    });
console.log(ofAgeOnly);




console.log('-----Problem3-----');

var underaged =
    people.filter(function (item) {
        return item.age < 18;
    }).forEach(function (item) {
        console.log(item);
    });

console.log('Няма намерени съвпадения,затова масива е празен');

console.log('-----Problem4-----');

var femaleSum =
    people.filter(function (item) {
        return item.gender;
    }).reduce(function (sum, item, i, arr) {
        var count = arr.length;
        return (sum + item.age / count);
    }, 0);

console.log(femaleSum);

console.log('-----Problem5-----');

if (!Array.prototype.find) {
    Array.prototype.find = function (callback) {
        var i, len = this.length;
        for (i = 0; i < len; i += 1) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }
    };
}

var youngestMale =
    people.sort(function (a, b) {
        return a.age - b.age;
    }).find(function (item) {
        return !item.gender;
    });

console.log(youngestMale.firstname, youngestMale.lastname);


console.log('-----Problem6-----');

var result = people.reduce(function (obj, item) {
    if (obj[item.firstname[0]]) {
        obj[item.firstname[0]].push(item);
    } else {
        obj[item.firstname[0]] = [item];
    }
    return obj;
}, {});

console.log(result);