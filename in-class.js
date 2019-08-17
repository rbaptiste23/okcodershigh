const data = require('./class-2-data.json');

// // Chaining
// const maleAges = data
//      .filter(e => e.sex === "M")
//      .map(e=>e.age);


// const femaleAges = data
//       .filter(e => e.sex === "F")
//       .map(e=>e.age);




// const avgMaleAge = averageAge(maleAges);

// const avgFemaleAge = averageAge(femaleAges);

// console.log("Average male age: ", avgMaleAge.toFixed(0));



function averageAge(col){
   const sum = col.reduce((p,c) => p + c);
   const totalNumberOfItems = col.length;

   return sum / totalNumberOfItems;
}



// Setup skelation first
function summarise(message, filter){ 
    const ages = data
    .filter(e => e.sex === filter)
    .map(e=>e.age);
    const averageAgeCalc = averageAge(ages);
    console.log(`Average ${message} age:`, averageAgeCalc.toFixed(0)); 
}


console.log("=============================================")
summarise("male", "M");
summarise("female", "F");
console.log("=============================================")