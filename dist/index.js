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
// now we are using type aliasing in the functions and also to remember in the function order of the parameters matter not the name need not to be the same ublike object in which have key in the place of paramenters , in which the order as well as the parameters need to be the same.
//by using ? giving the type of the funtion we can easily call the function with optional parameters.
// on using it in the function it will give error in the function to overcome that we use use conditional if with typeof L === "undefined" condition 
//Rest parameter : we dont know how many parameter we need to pass in the function
