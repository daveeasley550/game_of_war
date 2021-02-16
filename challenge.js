
 
class Card {
    constructor (suit, rank, score){
        this.suit = suit;
        this.rank = rank;
        this.score =score;
    }
}
const suit = ["hearts", "spades", "clubs", "diamonds"]
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king", "ace"]
const score =[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

class Deck {
    constructor () {
        this.cards = []   
    }
    cardCreate() {
        for(let i = 0; i < suit.length; i++){
            for(let j = 0; j < rank.length; j++){
                let newCard = new Card(suit[i], rank[j], score[j])
                this.cards.push(newCard)
                
            }
        }
    }
    draw() {
        return this.cards[Math.floor(Math.random() * this.cards.length)];
    }

}

const theDeck = new Deck
theDeck.cardCreate()
let drawnCards = theDeck.draw()
console.log(theDeck)
console.log(drawnCards)