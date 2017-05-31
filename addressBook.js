var contacts = {};
contacts.jordan = {
  firstName: "Jordan",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
contacts.markus = {
  firstName: "markus",
  lastName: "Knight",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
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
    }
  }
};

// list(contacts);
search("Jordan");
