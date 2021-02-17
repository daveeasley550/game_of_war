const suit = ["hearts", "spades", "clubs", "diamonds"]
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king", "ace"]
const score =[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
 
class Card {
    constructor (suit, rank, score){
        this.suit = suit;
        this.rank = rank;
        this.score =score;
    }
}
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
}
const theDeck = new Deck
theDeck.cardCreate()
let playerDeck = [...theDeck.cards];
function shuffle() {
    playerDeck.sort(() => Math.random() - 0.5);
}
shuffle(playerDeck)
let half = Math.ceil(playerDeck.length / 2);
let playerOneDeck = playerDeck.splice(0, half)
let computerDeck = playerDeck.splice(-half)

function flipCards() {
    let playerOneCard = playerOneDeck.shift()
    let computerCard = computerDeck.shift()
    console.log(`Player's card is ${playerOneCard.rank} of ${playerOneCard.suit} `)
    console.log(`Computer's card is ${computerCard.rank} of ${computerCard.suit} `)   
    round(playerOneCard, computerCard)  
}
function round(playerOneCard, computerCard){
    if(playerOneCard.score > computerCard.score){
        console.log("Player Wins " + " player has " + playerOneDeck.length + " computer has " + computerDeck.length)
        playerOneDeck.unshift(computerCard)
        playerOneDeck.unshift(playerOneCard);  
    }else if(playerOneCard.score < computerCard.score){
        console.log("Computer Wins " + " player has " + playerOneDeck.length + " computer has " + computerDeck.length)
        computerDeck.unshift(playerOneCard)
        computerDeck.unshift(computerCard);
    }else{
        console.log("WAR!")
        war(playerOneCard, computerCard);
    } 
}
function war(playerOneCard, computerCard){   
let playerWarDeck = playerOneDeck.splice(0, 3)
let computerWarDeck = computerDeck.splice(0, 3)
let playerWarCard = playerOneDeck.shift()
let computerWarCard = computerDeck.shift()
 if(playerWarCard.score > computerWarCard.score){
        console.log("Player Wins " + " player has " + playerOneDeck.length + " computer has " + computerDeck.length)
        playerOneDeck = [...new Set(playerOneDeck.concat(playerWarDeck,computerWarDeck, playerOneCard, computerCard, playerWarCard, computerWarCard ))]        
}else if(playerWarCard.score < computerWarCard.score) {
    console.log("Computer Wins " + " player has " + playerOneDeck.length + " computer has " + computerDeck.length)
    computerDeck = [...new Set(computerDeck.concat(playerWarDeck,computerWarDeck, playerOneCard, computerCard, playerWarCard, computerWarCard ))]   
}
}
let game = true
while(game){
    if(playerOneDeck.length ==0){
        console.log("Game Over, Computer wins! computer has 52")
        game=false
    }else if(computerDeck.length ==0){
        console.log("You win, man over machine! player has 52")
        game=false
    } else flipCards()  
} 











