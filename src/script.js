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
    },
    {
      "name" :"Quentin Tarantino",
      "email":"q.tarantino@example.com",
      "phone": "0123456789"
    },
    {
      "name" :"Hans Zimmer",
      "email":"h.zimmer@example.com",
      "phone": "0123456789"
    },
    {
      "name" :"Kill Bill",
      "email":"k.Bill@example.com",
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

const cardsWrapper = document.querySelector('.cards');
console.log(cardsWrapper);
const cards = document.querySelectorAll('.card'); //NodeList
const card = document.querySelector('.card'); //NodeList

const handleAddressBook = () => {
  [...cards].map( (card, cardIndex) => {
    this.nameContact = card.querySelector('.card__name');
    this.numberContact = card.querySelector('.card__number');

    [...addressBook].map( (contact, contactIndex) => {
        if (cardIndex === contactIndex) {
          this.nameContact.innerHTML = contact.name;
          this.numberContact.innerHTML = contact.phone;
          // let firstChar = this.nameContact.innerHTML.slice(0, 1);
          // console.log(firstChar);

          const handleFilter = () => {
            const letters = document.querySelectorAll('.filter__letter'); // NodeList
            let firstChar = this.nameContact.innerHTML.slice(0, 1);
            console.log(firstChar);
            
            [...letters].map( letter => {
              // console.log(letter.innerHTML);
              letter.addEventListener('click', () => {
                if (letter.innerHTML === firstChar) {
                  console.log("hehe");
                }
              })
            });
          }
          handleFilter();
        }
    });
  })
}

handleAddressBook();