interface Person {
    name?: string;
    height?: number;
}

function greeter(person: Person): {name: string; tall: number} {
    let newPerson = {name: "Diamond", tall: 20};
    if(person.name) {
        newPerson.name = person.name;
    }
    if(person.height) {
        newPerson.tall = person.height;
    }
    return newPerson;
}
let girl = {name: 'lara', status: 'single'};

let x = greeter(girl);
console.log(x);