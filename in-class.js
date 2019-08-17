const data = require('./class-2-data.json');

const maleAges = data
     .filter(e => e.sex === "M")
     .map(e=>e.age);
const femaleAges = data
      .filter(e => e.sex === "F")
      .map(e=>e.age);


//console.log(males);
//console.log(females);


//const maleAges = males.map(e=> e.age);
//const femaleAges = females.map(e=> e.age);


const avgMaleAge = averageAge(maleAges);

const avgFemaleAge = averageAge(femaleAges);


function averageAge(col){
   const sum = col.reduce((p,c) => p + c);
   const totalNumberOfItems = col.length;

   return sum / totalNumberOfItems;
}


console.log("=============================================")
console.log("Average male age: ", avgMaleAge.toFixed(0));
console.log("Average female age: ", avgFemaleAge);
console.log("=============================================")

