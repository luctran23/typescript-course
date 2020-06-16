interface Person {
    firstname: string;
    lastname: string;
}
function greeter(person: Person) {
    console.log( "hello " + person.firstname);
}

greeter({
    firstname: "lara",
    lastname: "joey"
});
