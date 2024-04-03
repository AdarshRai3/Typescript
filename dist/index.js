"use strict";
let n = 23;
let a = "Ada";
let check = true;
//variable_type variable_name : type = value;
// if ts dont know the type of the variable, then it is any , we should try to avoid  any.
// there is also a much easier syntax to declare variable;
let b = "Hello";
// if there is variable that we have to assign it has the types of value than we use type called union 
let c = 23;
//here we can see theat c can be number as well as string according to our usage 
const func = (n, m) => {
    console.log(n * m);
    return m * n;
};
const stringcat = (a, b) => {
    return a + b;
};
// this is type aliasing concept in this we use the type keyword to define the types of the parameters of the function when there are number of parameters and then use the type in place of the parameter of the function we writing function in the above example.
const arr = [12, 34, 23, 54];
const arr2 = ["Delhi", "Agra", "Jaipur"];
const arr3 = new Array(20);
const arr4 = [];
const arr5 = [];
// these are all the valid syntaxes in which we can define an Array.
//the arr3 syntax is highly useful in terms of similairity with the generic syntax
//the arr5 syntax uses the union type by using this we can use two types of datatypes in the same array
const tuple = ["Delhi", 23];
const obj = {
    height: 180,
    weight: 75,
    gender: true,
};
const obj2 = {
    height: 160,
    weight: 60,
};
const obj3 = {
    height: 180,
    weight: 75,
    gender: true,
    country: "india",
    pincode: 123456,
    func: (a, b) => {
        console.log(a * b);
    }
};
obj3.func(10, 3);
const obj4 = {
    height: 160,
    weight: 60,
};
// optional parameter
const funct = (N, M, L) => {
    if (typeof L === "undefined") {
        return "L is not Provided";
    }
    return N * M * L;
};
funct(10, 30, 32);
//default paramter 
const functi = (N, M, L = 20) => {
    return N * M * L;
};
functi(10, 2);
const fut = (...p) => {
    return p;
};
fut(25, 15, 10, 12, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50);
const rs = function lol(q) {
    return 10;
};
const getData = (student) => {
    console.log(student);
};
const getData1 = (students) => {
    console.log(students);
};
const car = (car) => {
    console.log(car);
};
const CarOne = {
    name: "BMW",
    model: 2022
};
car(CarOne);
//in typescript if we fetch the data from the api we can directly see the field using car . and dont have to use console.log to see the products.
const errorHandler = () => {
    return new Error("Error Occured");
};
const errorHandler1 = () => {
    throw new Error();
};
const mode = "dark";
// type in thememode can either be light or dark and other thing will throw an error in the console.
//classes
//public,private,protected and readonly are the access modifiers in typescript 
//public is the default access modifier.it can use the attribute of the class in any part of the code.
//private can access the arttribute of the class in the same class only
//protected can access the attribute of the class in the same class and in the child class when we use extend keyword to extend the class in the child class
//readonly can only access the attribute of the class that value cannot be changed 
class Player {
    constructor(name, age, city, weight, marks) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.weight = weight;
        this.marks = marks;
        this.getMyWeight = () => this.weight;
    }
}
const Player1 = new Player("John", 23, "Delhi", 75, 80);
//we can give the attribute in the parameter in the same number the attribute in the class but the main problem is that we wont be able to access it beyond its access modifier scope 
console.log(Player1.age);
console.log(Player1.getMyWeight());
//if we need weight than we can call to getMyWeight to access weight which is private in the construtor 
class Hooker extends Player {
    constructor(speed, height, name, age, city) {
        super("John", 23, "Delhi", 75, 80);
        this.speed = speed;
        this.height = height;
        this.getMyMarks = () => this.marks;
        this.id = String(Math.random() * 1000);
    }
    get getMySpeed() {
        return this.speed;
    }
    set setMySpeed(val) {
        this.speed = val;
    }
}
// In the above we have used extends that means the child component have the attribute of the parents as well as the attribute of the child components.
const Player3 = new Hooker(10, 160, "John", 23, "Delhi");
console.log(Player3.getMySpeed);
Player3.setMySpeed = 20;
console.log(Player3.getMySpeed);
class Proj {
    constructor(nameP, time, budget) {
        this.nameP = nameP;
        this.time = time;
        this.budget = budget;
        this.giveId = () => String(Math.random() * 1000);
    }
}
const Project1 = new Proj("John", 23, 75);
//typeAssertion and Dom Manipulation
const btnA = document.getElementById("btnA");
// const btnA = <HTMLElement> document.getElementById("btnA");
// const btnA = document.getElementById("btnA")!
btnA.onclick;
const myImg = document.getElementById("myImg");
myImg.src;
const form = document.querySelector("myform");
const myinput = document.querySelector("form>input");
form.onsubmit = (e) => {
    e.preventDefault();
    const value = Number(myinput.value);
    console.log(value);
    const h3 = document.createElement("h3");
    h3.textContent = String(20 + value);
    const body = document.querySelector("body");
    body.append(h3);
};
