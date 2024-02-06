// const std1={
//     name:"Rajkumar",
//     marks:90,
//     age:23,
//     gender:"male",
//     getMarks:function(){
//       return this.marks;  
//     }
// };
// const std2={
//     name:"prince",
//     marks:95,
//     age:21,
//     gender:"male",
//     getMarks:function(){
//         return this.marks;  
//       }
// };
// const std3={
//     name:"pammi",
//     marks:98,
//     age:20,
//     gender:"female",
//     getMarks:function(){
//         return this.marks;  
//    }};



//For Prototypes
// let arr1=[1,2,3,4,5,6,7,8,9,10];
// let arr2=[1,2,3,4];
// arr1.sayhello=()=>{
//     console.log("hello!, I am array")
// };
// arr2.sayhello=()=>{
//     console.log("hello!, I am array")
// };




//For Factory function

// function Personmaker(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`my name is ${this.name} and my age is ${this.age}`);
//         }
//     }
//     return person;
// }
// let p1=Personmaker("raj",20)//output:-p1.talk():- my name is raj and my age is 20
// let p2=Personmaker("pammi",21)



//New Operator(constructor function):-doesn't return anything & start with capital letter
// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     console.log(this);
// }
//     Person.prototype.talk=function(){
//         console.log(`my name is ${this.name} and my age is ${this.age}`);
//     }

// let p1=new Person("raj",20);
// let p2=new Person("pammi",21);




//For Class
// class Person{
//     constructor(name,age){
//     this.name=name;
//     this.age=age;
//    }
//     talk(){
//         console.log(`my name is ${this.name} and my age is ${this.age}`);
//     }
// }
// let p1=new Person("raj",20);
// let p2=new Person("pammi",21);




//Inheritance-
//  class Person{
//     constructor(name,age){
//         console.log("person class constructor");
//     this.name=name;
//     this.age=age;
//     }
//     talk(){
//         console.log(`my name is ${this.name} and my age is ${this.age}`);
//     }
// }
// class student extends Person{
//     constructor(name,age,marks){
//         console.log("student class constructor");
//         super(name,age);  //call the parent class
//     this.marks=marks;
// }
// }
// // let std1=new student("raj",20,90);
// // let std2=new student("pammi",21,95);

// class teacher extends Person{
//     constructor(name,age,subject){
//         console.log("teacher class constructor");
//         super(name,age);   //call the parent class
//     this.subject=subject;
// }
// }


class Mammal{    //parent class
    constructor(name){
        this.name=name;
        this.type="warm-blooded";
    }
    eat(){
        console.log("i am eating")
    }
}

class dog extends Mammal{     //child class
    constructor(name){
        super(name);
    }
    bark(){
        console.log("wooff...")
    }
}

class cat extends Mammal{      //child class
    constructor(name){
        super(name);
    }
    meow(){
        console.log("wooff...")
    }
}