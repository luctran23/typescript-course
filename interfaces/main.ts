function greeter(person: {name: string}) {
    console.log("Hello, " + person.name);
}
let girl = {name: 'lara', age: 21};
greeter(girl);