


//Do not mutate the data..

// ... = Spread operation = Pulls each key value out of the array.








function printLetter(from, to) {
// from object 
// {name, street, city, state, zip}


//   ===================================================================
//  |Riley Baptiste                                                    |
//  |804 Pacific Grove Dr                                              |
//  |"Edmond, OK 73003"                                                |
//  |                                                                  |
//  |                        "Name"                                    |
//  |                        "Address"                                 |
//  |                        "City, State Zip"                         |
//  |                                                                  |
//  ====================================================================
  
 console.log(" ===================================================================");
 console.log("| ", from.name,     );
 console.log("| ", from.street,     );
 console.log("| ",`${from.city}, ${from.state}, ${from.zip}     `);
 console.log("|                                  ", to.name,     );
 console.log("|                                  ", to.street,     );
 console.log("|                                  ",`${to.city}, ${to.state}, ${to.zip}`);
 console.log(" ===================================================================");

}


const from = {
    name: "Riley Baptiste",
    street: "804 Pacific Grove Dr",
    city: "Edmond",
    state: "OK",
    zip: "73003"
    
}


module.exports = {
    from: from,
    printLetter: printLetter
}