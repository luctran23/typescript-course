function itentity<T>(arg: T): T {
    return arg;
}
let output = itentity<string>("You can put a string or a number, whatever you want right here");
let output2 = itentity<number>(2);
console.log(output);


function loggingItentity<T>(arg: T[]): T[] {
    console.log(arg);
    return arg;
}
loggingItentity(["lara","angle", "John"]);