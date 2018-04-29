console.log("Up and running!");
var cards = [
{
  rank: "Queen",
  suit: "hearts",
  cardImange: "images/queen-of-hearts.png"
},
{
  rank: "Queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: "King",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
},
{
  rank: "King",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}

];

var flipCards = function () {
  var cardId = this.getAttribute('data-id');
};


var cardsInPlay = [0];
cardsInPlay.push ([0].rank);
var checkForMe = function () {

  if (cardsInPlay[0] === cardsInPlay[2]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
};

var flipCard = function (queen,king) {
  var checkForMe = function () {
  };
  console.log ("User flipped" + cards[0].rank);
  console.log ("User flipped" + cards[2].rank);
this.setAttribute(src, cards[cardId].cardImage);
if (cardsInPlay.length === [0]) {
 } else {
cardsInPlay[2] === cardsInPlay[0];
}
};

var createBoard = function () {
  for (var i = 0; i < arrayName.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);

}

};
createBoard();
