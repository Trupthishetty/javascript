//depending on how the data is stored and how it is accessed there are 2 types:primitive nad non primitive .


//primitive:string, number , boolean,null , undefined ,symbol
const score= 100
const sc=10.4

const a=false
const b=null

const c= Symbol('123')
const d=c

console.log(c===d)
const bifNumber=12345678
//non primitice (reference) : array , objects, functions  and return type is function .



const ar=["1",'2','4']

let x={
    name:"sam",
    age:"34"
}

// const fun= func()
// {
//     console.log("hellow");
// }


console.log(typeof(c));
////////////////////////////////////////////////////////MEMORY/////////////////////

//stack (primitive) (impacts the copry), heap(non primitive)(impacts the original value )

let myName ="samy"
let anotherName= myName
 myName="shetty"

console.log(myName + anotherName);

//let n,e

let ob={
    n:"rox",
    e:"abc@ybl"


}

let o=ob
o.n="dog"
//o.n="dog"

console.log(ob);
console.log(o.n);
console.log(ob.n)