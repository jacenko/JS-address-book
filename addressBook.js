var contacts = {};
contacts.jordan = {
  firstName: "Jordan",
  lastName: "Gates",
  number: "(731) 474-1259",
  address: ['3433 Melville Street','Memphis','TN','38118']
};
contacts.markus = {
  firstName: "Markus",
  lastName: "Knight",
  number: "(573) 646-3300",
  address: ['4375 John Daniel Drive','Bland','MO','65014']
};
contacts.thomas = {
  firstName: "Thomas",
  lastName: "Willett",
  number: "(320) 525-2584",
  address: ['4053 Brighton Circle Road','Sain Cloud','MN','56301']
};
contacts.jimmie = {
  firstName: "Jimmie",
  lastName: "Norman",
  number: "(773) 209-7931",
  address: ['3438 Oakmond Road', 'Arlington Heights', 'IL','60004']
};
contacts.bryon = {
  firstName: "Bryon",
  lastName: "Shafer",
  number: "(626) 315-2920",
  address: ['4945 Middleville Road', 'Sherman Oaks', 'CA','91403']
};
contacts.randolph = {
  firstName: "Randolph",
  lastName: "Hall",
  number: "(858) 832-1616",
  address: ['2679 Hood Avenue', 'El Cajon', 'CA','92020']
};
var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};

var search = function(name) {
  for(var prop in contacts) {
    if(contacts[prop].firstName === name) {
      console.log(contacts[prop]);
      return contacts[prop];
    } else {
      alert("Sorry, contact not found. Please add to directory.");
    }
  }
};

// list(contacts);
search("chris");
