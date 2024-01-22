//object creation
const student={
    fullName:"Soumyadeep Ghosh",
    cgpa:8.5,
    printMarks:function(){
        console.log("marks=",this.marks);
    },
};

//creating manual prototypes
const employee={
    calcTax(){
        console.log("the tax rate is 10%");
    },
};

const calcSalary={
    salary:35000,
}
//set prototype function
calcSalary.__proto__=employee;

//creating class
class ToyotaCar{
    //constructor is added into the class by-default
    //but we can manually add constructor too
    constructor(brand,mileage){
        console.log("creating new object");
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }

};

//creating objects from classes
//this creates a constructor inside the myObject obj
let myObject=new ToyotaCar("fortuner",30);
console.log(myObject);
console.log(typeof myObject);
//now myObject has similar properties as class ToyotaCar

//inheritance
class learner{
    constructor(){
        this.subject="frontend development";
    }
    project(){
        console.log("learning js");
    }
    work(){
        console.log("just keep learning");
    }
}

class engineer extends learner{
    constructor(branch){
        super();
        this.branch=branch;
    }
    project2(){
        console.log("learning js inheritance");
    }
    work(){
        console.log("solve problems and build something");
    }
}

let soumyaObj=new engineer("AEIE engineer");
//inherited from learner class
console.log(soumyaObj.project());

//the work method from engineer class is printed
//so the method is overriden from inherited learner class
console.log(soumyaObj.work());

console.log(soumyaObj);

//practice questions
let DATA="not necessarily needed"

class User{
    constructor(name,email){
       this.name=name;
       this.email=email;
    }
    viewData(){
        console.log("It is"+DATA)
    }
}

class Admin extends User{
    constructor(name,email){
       super(name,email);
    }
    editData(){
        DATA="new data";
    }
}

let student1=new User("Soumya","NA");
let student2=new User("random","NA");

let admin1=new Admin("admin","NA");
let admin2=new Admin("admin2","NA");



























