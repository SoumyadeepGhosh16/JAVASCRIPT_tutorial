function myfunction(){
    console.log("this is a javascript tutorial");
    console.log("javascript is very useful");
    //unless we put anything in the function
    //upon calling it will print undefined
}

//sum of functions
function sum(a,b){
    //console.log(a+b);
    //in another way
    let s=a+b;
    return s;
}

let val=sum(3,4);
console.log(val)

const arrowSum=(a,b)=>{
    console.log(a+b);
};//arrow functions to create a method

function arrowMul(a,b){
     return a*b;
}

//practice question
//print the number of vowels from a string input
function vowelCount(str){
     let count=0;
   for(let char of str) {
    console.log(char);
    if(char==="a" || 
       char==="e" ||
       char==="i" ||
       char==="o" ||
       char==="u"
      ){
    count++;
      }
   } 
  return count;
}

let call=vowelCount("Soumyadeep")
console.log(call)

//methods

let arr=[1,2,3,4,5,6]

arr.forEach((val)=>{
    console.log(val);
});

//practice problem

let intArr=[1,2,3,4,5];

intArr.forEach(function(value){
    console.log("square of each element of the array"+Math.pow(value,2))
})

//"map" array method

let nums=[67,52,39];

let newArr=nums.map((val)=>{
    return val;
})
console.log(newArr);

//filter array method
//useful to filter out elements 
//based on user requirement

let conArr=[1,2,3,4,5,6,7,8];

let evenArr=conArr.filter((val)=>{
    return val%2===0;
})

console.log(evenArr);

//"reduce" array method

const array1=[1,2,3,4];

const initialValue=0;
const sumWithInitial=array1.reduce((accumulator,currentValue)=>
       accumulator+currentValue,initialValue,
);

console.log(sumWithInitial);

let compareArr=[56,43,49];

const output=compareArr.reduce((prev,curr)=>{
    if(prev>curr){
        return prev;
    }else{
       return curr;  
    }
})

//practice problem
//filter out 90+marks from students array

let student=[80,96,32,85,91];

let topper=student.filter((val)=>{
    return val>=90;
})

//problem#2
console.log(topper);

let n=prompt("enter a number");

let InArr=[];

for(let i=1;i<n;i++){
    InArr[i-1]=i;
}

console.log(InArr);

let initialVal=0;
const output2=InArr.reduce((prev,curr)=>{
   return prev+curr;
})

console.log("sum is"+output2);

const output3=InArr.reduce((prev,curr)=>{
    return prev*curr;
 });
 
 console.log("factorial is" +output3);
 

