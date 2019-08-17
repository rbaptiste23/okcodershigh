// Files will have the ./ 
// Modules from third parties will not have it

const data = require('./class-2-data.json');
const mailer = require('./mailer.js');
const _ = require('lodash');





// data.forEach(function(e) {
//     const to = {
//         name: e.name,
//         ...e.address
//     };



_.forEach(data, function(e){
    const to = {
        name: e.name,
        ...e.address
    }

  mailer.printLetter(mailer.from, to);
    
})




// Every node project 
/* 
   Cd 
   Cd 
   mkdir new-project
   cd new-project
   npm init  = (This is for the package.json file)



  *****************************
   package.json
   README.md
   src/ source files 
   node-modules
*/