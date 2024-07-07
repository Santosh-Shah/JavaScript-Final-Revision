function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// this way is not allowed
// Person.nationality = "Nepali";

Person.prototype.nationality = "Nepali";
Person.psrototype.hello = "This is hello"


const myFriend = new Person("Ram", "Varma", 45, "blue");
console.log(myFriend);
console.log(myFriend.nationality)