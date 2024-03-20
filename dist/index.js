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
