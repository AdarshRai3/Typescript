let n:number = 23;
let a:string ="Ada";
let check:boolean = true;
//variable_type variable_name : type = value;
// if ts dont know the type of the variable, then it is any , we should try to avoid  any.
// there is also a much easier syntax to declare variable;

let b =<string>"Hello";

// if there is variable that we have to assign it has the types of value than we use type called union 
let c:string|number = 23;
//here we can see theat c can be number as well as string according to our usage 

const func = (n:number, m:number):number=>{
    console.log(n*m);
    return m*n;
}

//when using closure and arrow function in ts, in the above example we have to use types with the paramenters of the function as well as defined the return type of the function

type calc = (a: string ,b:string)=>string;

const stringcat : calc =(a,b)=>{
    return a+b;
}