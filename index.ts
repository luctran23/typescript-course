interface Person {
    firstname: string;
    lastname: string;
}
function greeter(person: Person) {
    console.log( "hello " + person.firstname + " " + person.lastname);
}
let user = {firstname: "Johny", lastname: "Dang"};
greeter({
    firstname: "lara",
    lastname: "joey"
});
greeter(user);