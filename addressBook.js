var contacts = [
  {
    firstName: "Jordan",
    lastName: "Gates",
    number: "(731) 474-1259",
    address: '3433 Melville Street',
    city: 'Memphis',
    state: 'TN',
    zip: '38118'
  },
  {
    firstName: "Markus",
    lastName: "Knight",
    number: "(573) 646-3300",
    address: '4375 John Daniel Drive',
    city: 'Bland',
    state: 'MO',
    zip: '65014'
  },
  {
    firstName: "Thomas",
    lastName: "Willett",
    number: "(320) 525-2584",
    address: '4053 Brighton Circle Road',
    city: 'Sain Cloud',
    state: 'MN',
    zip: '56301'
  },
  {
    firstName: "Jimmie",
    lastName: "Norman",
    number: "(773) 209-7931",
    address: '3438 Oakmond Road',
    city: 'Arlington Heights',
    state: 'IL',
    zip: '60004'
  },
  {
    firstName: "Bryon",
    lastName: "Shafer",
    number: "(626) 315-2920",
    address: '4945 Middleville Road',
    city: 'Sherman Oaks',
    state: 'CA',
    zip: '91403'
  },
  {
    firstName: "Randolph",
    lastName: "Hall",
    number: "(858) 832-1616",
    address: '2679 Hood Avenue',
    city: 'El Cajon',
    state: 'CA',
    zip: '92020'
  }
];

// Search contacts for a query string
function search(query) {
  console.log("Searching for \""+query+"\"...\n");
  // Storage for found contacts
  var result = [];
  // Go through all contacts
  for(var i = 0; i < contacts.length; i++) {
    // Go through all keys in a contact
    for(key in contacts[i]) {
      // If key contains the query string
      if(contacts[i][key].toLowerCase().indexOf(query.toLowerCase()) != -1) {
        // Add the contact to found contacts
        result.push(contacts[i]);
      }
    }
  }
  // Return array of found contacts
  printResult(result);
};

// Output results to console
function printResult(result) {
  if (result.length != 0) {
    // Found at least one contact
    console.log("%c I found something :)", "color: lime;");
    for(var i = 0; i < result.length; i++) {
      var c = result[i];
      console.log("---\n"+c.firstName+" "+c.lastName);
      console.log("\tfrom "+c.address+"\n\t"+c.city+", "+c.state+" "+c.zip+"\n");
    }
  } else {
    // No contacts found
    console.log("%c I didn't find anything :/\n", "color: coral;");
  }
  console.log("\n\n");
}

search("ran");
search("g");
search("chris");
