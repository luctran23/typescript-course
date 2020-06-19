interface Person {
    name: string;
}

function greeter(person: Person) {
    console.log("Hello, " + person.name);
}
let girl = {name: 'lara', age: 21};

greeter(girl);