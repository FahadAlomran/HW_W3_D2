var persons = [
    { age: 28, name: "Ahamd", occupation: "one" },
    { age: 22, name: "Fahad", occupation: "two" },
    { age: 45, name: "Ali", occupation: "three" },
    { age: 35, name: "Saed", specialty: "React" },
    { age: 22, name: "Norah", specialty: "SQL" },
    { age: 18, name: "mohmaed", specialty: "PHP" }
];
function print(x) {
    for (var _i = 0, persons_1 = persons; _i < persons_1.length; _i++) {
        var x_1 = persons_1[_i];
        console.log(x_1);
    }
}
print(persons);
function check(person) {
    for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
        var x = person_1[_i];
        if ("occupation" in x) {
            console.log("User: Name:".concat(x.name, ", Age:").concat(x.age, ", Occupation:").concat(x.occupation));
        }
        else {
            console.log("Admin: Name:".concat(x.name, ", Age:").concat(x.age, ", Occupation:").concat(x.specialty));
        }
    }
}
check(persons);
function change(name, age) {
    for (var _i = 0, persons_2 = persons; _i < persons_2.length; _i++) {
        var x = persons_2[_i];
        if (x.name == name) {
            x.age = age;
        }
    }
    console.log(persons);
}
change("Fahad", 55);
