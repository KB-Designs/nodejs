let fruits=["apple","banana","orange"];

fruits.push("grape");

let flength=fruits.length;

for(let i=0; i<fruits.length;i++){
    console.log(fruits[i]);
};

const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
};
console.log(myObj);