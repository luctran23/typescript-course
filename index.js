function greeter(person) {
    console.log("hello " + person.firstname + " " + person.lastname);
}
var user = { firstname: "Johny", lastname: "Dang" };
greeter({
    firstname: "lara",
    lastname: "joey"
});
greeter(user);
