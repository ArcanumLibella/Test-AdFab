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
      "name" :"Hans Zimmer",
      "email":"h.zimmer@example.com",
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

class AddressBook {
  constructor() {
    // this.cardsWrapper = document.querySelector('.cards'); //NodeList
    // this.newCard = document.createElement('div');

    [...addressBook].map( contact => {
      this.createNewCard(contact);
      this.handleFilterLetters(contact);
    });
    
    // this.displayCard(newCard);
  }

  displayCard() {
    // A refaire et attention au style avec page.is-hidden

  }

  createNewCard(contact) {
    const cardsWrapper = document.querySelector('.cards'); //NodeList
    const newCard = document.createElement('div');

    newCard.className = 'card';
    cardsWrapper.appendChild(newCard);
    newCard.innerHTML = 
      '<div class="card__wrapper">' +
        '<div class="card__profil">' +
          '<img class="card__avatar" src="/profile.7033d4bd.png" alt="profil">' + 
        '</div>' + 
        '<div class="card__infos">' + 
          '<h2 class="card__name">' + contact.name + '</h2>' +
          '<p class="card__number">' + contact.phone + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="card__socials">' +
        '<a class="card__social" href="">' + '<img src="assets/icons/skype.png" alt="Skype">' + '</a>' +
        '<a class="card__social" href="">' + '<img src="assets/icons/skype.png" alt="Skype">' + '</a>' +
        '<a class="card__social" href="">' + '<img src="assets/icons/skype.png" alt="Skype">' + '</a>' +
      '</div>';
  }

  handleFilterLetters(contact, newCard) {
    const letters = document.querySelectorAll('.filter__letter'); // NodeList
    // To retrieve first character of each contact
    const firstChar = contact.name.slice(0, 1);
    const card = document.querySelector('.card');
    
    // To compare filter letter with firstChar of each contact
    [...letters].map( letter => {
      letter.addEventListener('click', () => {
        if (letter.innerHTML !== firstChar) {
          console.log('hehe');
          console.log(card);
          // card.classList.toggle('is-clicked');
        }
      })
    });
  }
}

const init = new AddressBook();