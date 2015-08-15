function point(x, y){
     
    return (x * x + y * y) < 5 * 5;

}

console.log(point(4, 4));
console.log(point(10, 10));
console.log(point(12, 4));
console.log(point(4, 12));