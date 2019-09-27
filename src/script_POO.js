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

class AddressBook {
  constructor() {
    this.cards = document.querySelectorAll('.card'); //NodeList

    [...this.cards].map( (card, cardIndex) => {
      this.name = card.querySelector('.card__name');
      this.phone = card.querySelector('.card__number');

      this.fillAddressBook(cardIndex);
      this.handleFilterLetters();
      // this.createNewCard();
    });
  }

  fillAddressBook(cardIndex) {
    [...addressBook].map( (contact, contactIndex) => {
      if (cardIndex === contactIndex) {
        this.name.innerHTML = contact.name;
        this.phone.innerHTML = contact.phone;
        console.log(this.name);
        console.log(this.phone);
      }
    });
  }

  createNewCard() {
    const cardsWrapper = document.querySelector('.cards'); //NodeList
    const newCard = document.createElement('div');

    newCard.className = 'card';
    cardsWrapper.appendChild(newCard);
    newCard.innerHTML = 
      '<div class="card__profil">' +
        '<img class="card__avatar" src="/profile.7033d4bd.png" alt="profil">' + 
      '</div>' + 
      '<div class="card__infos">' + 
        '<h2 class="card__name">' + this.name + '</h2>' +
        '<p class="card__number">' + this.phone + '</p>' +
      '</div>';
    console.log(this.name, this.phone);
  }

  handleFilterLetters() {
    const letters = document.querySelectorAll('.filter__letter'); // NodeList
    let firstChar = this.name.innerHTML.slice(0, 1);
    // console.log(firstChar);
    
    [...letters].map( letter => {
      // console.log(letter.innerHTML);
      letter.addEventListener('click', () => {
        if (letter.innerHTML === firstChar) {
          console.log('hehe');
        }
      })
    });
  }
}

const init = new AddressBook();