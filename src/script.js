// const jSon = require('addressbook.json');

const jSon = `{
  "address-book" :
  [
    {
      "name" :"Jonh Doe",
      "email":"john.doe@example.com",
      "phone": "0123456789"
    },
    {
      "name" :"Sue Shei",
      "email":"sue.shei@example.com",
      "phone": "0123456789"
    },
    {
      "name" :"Eric Widget",
      "email":"eric.widget@example.com",
      "phone": "0123456789"
    },
    {
      "name" :"Max Conversion",
      "email":"max.conversion@example.com",
      "phone": "0123456789"
    },
    {
      "name" :"Desmond Eagle",
      "email":"desmond.eagle@example.com",
      "phone": "0123456789"
    },
    {
      "name" :"Pelican Steve",
      "email":"pelican.steve@example.com",
      "phone": "0123456789"
    },
    {
      "name" :"Fergus Douchebag",
      "email":"fergus.douchebag@example.com",
      "phone": "0123456789"
    },
    {
      "name" :"Ingredia Nutrisha",
      "email":"ingredia.nutrisha@example.com",
      "phone": "0123456789"
    },
    {
      "name" :"Giles Posture",
      "email":"giles.posture@example.com",
      "phone": "0123456789"
    }
  ]
}`;

myJson = JSON.parse(jSon);
// console.log(myJson);

const addressBookObject = Object.keys(myJson);
// console.log(myJson[addressBookObject][0]); // first contact

const addressBook = myJson[addressBookObject];
// console.log(addressBook);

const form = document.querySelector('.form');
const cards = document.querySelectorAll('.card'); //NodeList
const card = document.querySelector('.card'); //NodeList

// const nameContacts = document.querySelectorAll('.card__name');
// const numberContacts = document.querySelectorAll('.card__number');

// [...addressBook].map( contact => {
//   console.log(contact); // Object
//   // console.log(contact.name);
//   // console.log(contact.phone);
//   // console.log(contact.email);

//   [...nameContacts].map( nameContact => {
//     // nameContact.innerHTML = myJson[addressBookObject][1].name;
//     nameContact.innerHTML = contact.name;
//   });
  
//   [...numberContacts].map( numberContact => {
//     numberContact.innerHTML = myJson[addressBookObject][1].phone;
//   });
// });

[...cards, ...indexCard].map( card => {
  const nameContact = card.querySelector('.card__name');
  const numberContact = card.querySelector('.card__number');
  // console.log(nameContact.innerHTML);
  // console.log(numberContact.innerHTML);

  [...addressBook, ...indexContact].map( contact => {
      console.log(contact); // Object
      // console.log(contact.name);
      // console.log(contact.phone);
      // console.log(contact.email);
    nameContact.innerHTML = contact.name;
    numberContact.innerHTML = contact.phone;
  });
})