const data = require('./class-2-data.json');
const printLetter = require('./mailer.js');


const from = {
    name: "Riley Baptiste",
    street: "804 Pacific Grove Dr",
    city: "Edmond",
    state: "OK",
    zip: "73003"
    
}

data.forEach(function(e) {
    const to = {
        name: e.name,
        ...e.address
    };



  printLetter(from, to);
    
})
