function playingCards(face, suit) {
  const validFace = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
  const validSuit = { 'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663' }

  if (!validFace.includes(face) || !validSuit[suit])
    throw new Error('Invalid value of face or suit!')
  
  
   class Cards {
    constructor(face, suit) {
      this.face = face
      this.suit = suit 
    }
     
     toString() {
       return this.face + validSuit[this.suit]
     }
  }
  
  const card = new Cards(face, suit)
  return card.toString()   
}

// console.log(playingCards('A', 'S'))
// console.log(playingCards('10', 'H'))
// console.log(playingCards('1', 'C'))


//-------------------------------------------------(2)--------------------

function playingCards(face, suit) {
  const validFace = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
  const validSuit = { 'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663' }

  if (!validFace.includes(face) || !validSuit[suit])
    throw new Error('Invalid value')
  const card = new Cards(face, suit)
  return card.toString()
  
     function Cards(face, suit) {
              this.face = face
              this.suit = suit
              this.toString = () => this.face + validSuit[this.suit]
            }
}

// console.log(playingCards('A', 'S'))
// console.log(playingCards('10', 'H'))
// console.log(playingCards('1', 'C'))