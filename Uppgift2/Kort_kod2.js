let suits = ["C", "D", "H", "S"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = [];

    for (let suit of suits) {
        for (let value of values) {
            deck.push(`${suit}-${value}`);
        }
    }
    console.log(deck);
    function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}
shuffle(deck);
console.log(deck);

function dealCards(deck, numCardsPerHand) {
    return deck.splice(0, numCardsPerHand);
}
let playerhand = dealCards(deck, 5);
let player2hand = dealCards(deck, 5);
console.log(`Player1 hand: ${playerhand}`);
console.log(`Player2 hand: ${player2hand}`);

function findCard(playerhand) {
    if (playerhand.includes("H-K")) {
        console.log(true);
    } else {
        console.log(false);
    }
}
findCard(playerhand);

function containsCard(hand, card) {
    return hand.includes(card);
}

function compareHands(hand) {
    return hand.filter(card => card.includes("D")).length;
}
let diaPlayer1 = compareHands(playerhand);
let diaPlayer2 = compareHands(player2hand);

if (diaPlayer1 > diaPlayer2) {
    console.log("player1 have more diamond cards");
} else if (diaPlayer1 < diaPlayer2) {
    console.log("player2 have more diamond cards")
} else {
    console.log("both have the same amount of diamond cards");
}
