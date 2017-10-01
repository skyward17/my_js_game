
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
//With a constructor function, you can use the new keyword to create new objects from the same prototype:

//Example
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");


//Adding a Property to an Object
//Adding a new property to an existing object is easy:

//Example
myFather.nationality = "English";

//Adding a Method to an Object
//Adding a new method to an existing object is also easy:

//Example
myFather.name = function () {
    return this.firstName + " " + this.lastName;
};


//Adding Properties to a Prototype
//You cannot add a new property to a prototype the same way as you add a new property to an existing object, because the prototype is not an existing object.

//Example
Person.nationality = "English";
//Try it Yourself »
//To add a new property to a prototype, you must add it to the constructor function:

//Example
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
}


//Adding Methods to a Prototype
//Your constructor function can also define methods:

//Example
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.name = function() {return this.firstName + " " + this.lastName;};
}


//Using the prototype Property
//The JavaScript prototype property allows you to add new properties to an existing prototype:

//Example
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";
//Try it Yourself »
//The JavaScript prototype property also allows you to add new methods to an existing prototype:

//Example
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};




var Enemies = function(first, last, speed, color) {
    this.firstName = first,
    this.lastName = last,
    this.fixedSpeed = speed,
    this.enemyColor =  color;
};
