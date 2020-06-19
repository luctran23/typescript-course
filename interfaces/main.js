function greeter(person) {
    var newPerson = { name: "Diamond", tall: 20 };
    if (person.name) {
        newPerson.name = person.name;
    }
    if (person.height) {
        newPerson.tall = person.height;
    }
    return newPerson;
}
var girl = { name: 'lara', status: 'single' };
var x = greeter(girl);
console.log(x);
