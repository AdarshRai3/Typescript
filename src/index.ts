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
// this is type aliasing concept in this we use the type keyword to define the types of the parameters of the function when there are number of parameters and then use the type in place of the parameter of the function we writing function in the above example.

const arr:number[]=[12,34,23,54];
const arr2:string[]=["Delhi","Agra","Jaipur"];
const arr3:Array<boolean>=new Array(20);
const arr4:Array<string>=[];
const arr5:Array<number|string>=[];

// these are all the valid syntaxes in which we can define an Array.
//the arr3 syntax is highly useful in terms of similairity with the generic syntax
//the arr5 syntax uses the union type by using this we can use two types of datatypes in the same array

const tuple:[string,number]=["Delhi",23];
//this is a tuple which is act as fixed size array and can contain elements of different types

type objBody =
    {
        height : number,
        weight : number,
        gender? : boolean,
    };
const obj: objBody={
    height : 180,
    weight :75,
    gender : true,
}
const obj2:objBody={
    height : 160,
    weight:60,
}
// so in the above example we have use type alising , we want to make some attributs of the object as optional than we can use syntax : gender?: 
type FuncType = (a:number,b:number)=>void;
interface objBody2 
{
    height : number,
    weight : number,
    gender? : boolean,
}
interface objBody3 extends objBody2{
    country:string,
    pincode:number,
    func:FuncType,
}
const obj3:objBody3={
    height : 180,
    weight :75,
    gender : true,
    country:"india",
    pincode:123456,
    func:(a,b)=>{
        console.log(a*b);
    }
}

obj3.func(10,3);
const obj4:objBody2={
    height : 160,
    weight:60,
}

// when it comes to generic and object we should focus on using interace because we can  use extends keyword and use attributes for other obj.
// we use type for Functype and use that FuncType inside the interface objBody3 and then use it in the func attribute and after using that as an attribute of obj3 


//function 
type MulType = (A:number, B:number,C?:number)=>number|string;

// optional parameter
const funct:MulType = (N,M,L)=>{
    if(typeof L === "undefined"){
        return "L is not Provided"
    }
    return N*M*L;

};
funct(10,30,32)
//default paramter 
const functi:MulType = (N,M,L=20)=>{
    
    return N*M*L;

};
functi(10,2);
// now we are using type aliasing in the functions and also to remember in the function order of the parameters matter not the name need not to be the same ublike object in which have key in the place of paramenters , in which the order as well as the parameters need to be the same.

//by using ? giving the type of the funtion we can easily call the function with optional parameters.
// on using it in the function it will give error in the function to overcome that we use use conditional if with typeof L === "undefined" condition 



type FunType = (...p: number[])=>number[];
const fut:FunType = (...p)=>{
    return p;
};
fut(25,15,10,12,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50);

//Rest parameter : we dont know how many parameter we need to pass in the function

type RsType = (q:number)=>number;
const rs:RsType= function lol(q){
    return 10;
}

const getData = (student:{
    name:string,
    age:number,
    city:string,
    class:string,
    marks:number;
}):void=>{
    console.log(student);
}

// this is how we write function with object in Typescript but there is better way of writing this and that way is keep defining the obeject in the type and using it the function directly 

type getDataType=(students:{
    name:string,
    age:number,
    city:string,
    class:string,
    marks:number;
})=>void;
const getData1:getDataType = (students)=>{
    console.log(students);
}

// another better way of doing this is by using interface in the place of the type because we can use extends interface keyword and use attributes for other obj.

interface carInterface{
    name:string,
    readonly model:number;
    color?:string;
    
}

type carType = (car:carInterface)=>void;
const car:carType = (car)=>{
    console.log(car);
}

const CarOne:carInterface={
    name:"BMW",
    model:2022
}

car(CarOne);

//in typescript if we fetch the data from the api we can directly see the field using car . and dont have to use console.log to see the products.

const errorHandler = ()=>{
    return new Error("Error Occured");
}

const errorHandler1 =():never=>{
    throw new Error ();
}

// as you can see the difference in the above examples that when we throw error in the errorHandle the type becomes never but in the case we use return it will give the type as error 

type thememode= "light" | "dark";

const mode:thememode= "dark";

// type in thememode can either be light or dark and other thing will throw an error in the console.

//classes
//public,private,protected and readonly are the access modifiers in typescript 
//public is the default access modifier.it can use the attribute of the class in any part of the code.
//private can access the arttribute of the class in the same class only
//protected can access the attribute of the class in the same class and in the child class when we use extend keyword to extend the class in the child class
//readonly can only access the attribute of the class that value cannot be changed 
class Player{
   constructor(
     public  name:string,
     public age:number,
     public city:string,
     private weight:number,
     protected marks:number
   ){}
   getMyWeight=()=>this.weight;
   //private can only be used in the same scope means inside the class
}

const Player1 = new Player("John",23,"Delhi",75,80);
//we can give the attribute in the parameter in the same number the attribute in the class but the main problem is that we wont be able to access it beyond its access modifier scope 
console.log(Player1.age);

console.log(Player1.getMyWeight());
//if we need weight than we can call to getMyWeight to access weight which is private in the construtor 

class Hooker extends Player{
    readonly id:string;
    constructor(
        private speed:number,
        private height:number,
        name:string,
        age:number,
        city:string
    ){
        super("John",23,"Delhi",75,80);
        this .id= String(Math.random()*1000 );
    }
    getMyMarks=()=> this.marks;

    get getMySpeed():number{
           return this .speed;
    }

    set setMySpeed(val:number){
        this.speed=val;
    }
}
// In the above we have used extends that means the child component have the attribute of the parents as well as the attribute of the child components.
 const Player3 = new Hooker(10,160,"John",23,"Delhi");
     
 console.log(Player3.getMySpeed);
 Player3.setMySpeed=20;
 console.log(Player3.getMySpeed);
// by using getter and settter function in the class we can directly access the height and set the marks 
//setter function dont return anything and always take at least one parameter.

interface ProjectType{
    nameP:string,
    time: number;
    budget:number;
}

interface GiveId{
    giveId:()=>string;
}

class Proj implements ProjectType,GiveId{
    constructor(
        public nameP:string,
        public time: number,
        public budget:number
    ){}
    giveId=()=>String(Math.random()*1000);
}
 
const Project1 = new Proj("John",23,75);

//typeAssertion and Dom Manipulation
const btnA = document.getElementById("btnA")as HTMLElement;
// const btnA = <HTMLElement> document.getElementById("btnA");
// const btnA = document.getElementById("btnA")!
btnA.onclick;

const myImg = document.getElementById("myImg") as HTMLImageElement;

myImg.src;