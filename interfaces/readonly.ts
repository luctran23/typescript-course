interface Point {
    readonly x: number;
    readonly y: number;
}
let num:Point = { x: 10, y: 20};

console.log(num.x);
// num.x = 1; error because x is readonly mode




