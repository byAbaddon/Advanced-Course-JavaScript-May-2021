function printDeckOfCards(cards) {
  const suits = { 'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663' }
  const faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

  function createCard(first, second) {
      function Cards(face, suit) {
          this.check(face, suit)
          this.face = face
          this.suit = suit
          this.toString()
      }
      Cards.prototype.check = function (face, suit) {
          if (!faces.includes(face) || !suits[suit]) {
              throw new Error('Invalid value')
          }
      }
      Cards.prototype.toString = function () {
          return this.face + suits[this.suit]
      }
      return new Cards(first, second)
  }
  let result =  cards.reduce( (a,b) => {
      let result = b.match(/([AKQJ]|\d+)|([SHDC])/gm).map( x => isNaN(x) ? x : Number(x))
      if (!faces.includes(result[0]) || !suits[result[1]]) {
          return `Invalid card: ${b}`
      }
      a.push(createCard(result[0], result[1]).toString())
      return a
  },[])
  console.log(typeof result === 'object' ? result.join() : result);
}

// printDeckOfCards(['AS', '10D', 'KH', '2C'])
// printDeckOfCards(['5S', '3D', 'QD', '1C'])




//---------------------------------------------------------------------(2)-----------------------------

function printDeckOfCards(cards) {   //TODO:...
  function createCard(face, suit) {
    class Cards {
      constructor(face, suit) {
        this.face = face
        this.suit = suit
      }

      toString() {
        return this.face + validSuit[this.suit]
      }
    }

    let card = new Cards(face, suit)
    collection.push(card.toString())
  }

  const validFace =  [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
  const validSuit = { 'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663' }
  let collection = []

  for (const el of cards) {
    face = el.length == 3 ? el.slice(0, -1) : el.slice(0, 1)
    face = isNaN(face) ? face : +face
    suit = el.slice(-1)
    if (!validFace.includes(face) || !validSuit[suit]) {
      console.log('Invalid card:', face + suit)
      return
    }
    createCard(face, suit)
  }

    console.log(collection.join(' '))
}

// printDeckOfCards(['AS', '10D', 'KH', '2C'])
// printDeckOfCards(['5S', '3D', 'QD', '1C'])