let car ={brand:"toyota",model:"hulux",year:2020};
console.log(car);

let student={};

student.name="Brian";
student.age=20;
student.grade="A";

//console.log(student.name);
//console.log(student.age);

function Person(fname,carmodel,age){
    this.fname=fname;
    this.carmodel=carmodel;
    this.age=age;
};

const person1= new Person("Brian","BMW",20);
const person2= new Person("John","Toyota",25);

console.log(person1);
console.log(person2);

let mechanic={
    fname:"Mike",
    lname:"Tyson",
    age:30,
    car:"Toyota",
    fullname: function(){
        return this.fname+ " "+this.lname;
    }
};

console.log(mechanic.fullname());



