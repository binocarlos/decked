var decked = require('./')
var tape     = require('tape')

tape('normal pack with no options', function(t){
  var deck = decked()
  var cards = deck()
  
  t.equal(cards.length, 52, 'there are 52 cards in a standard deck')
  

  var suits = {}

  cards.forEach(function(card){
    if(!suits[card.suit]){
      suits[card.suit] = 0
    }
    suits[card.suit]++
  })

  t.equal(suits.heart, 13)
  t.equal(suits.spade, 13)
  t.equal(suits.diamond, 13)
  t.equal(suits.club, 13)
  
  t.end()


})


tape('pack with jokers', function(t){
  var deck = decked({
  	jokers:3
  })
  var cards = deck()

  var joker = {
  	suit:'joker',
  	number:0,
  	name:'joker'
  }
  
  t.deepEqual(cards[0], joker, 'the first card is a joker')
  t.deepEqual(cards[1], joker, 'the second card is a joker')
  t.deepEqual(cards[2], joker, 'the third card is a joker')
  t.notEqual(cards[3].type, 'joker', 'the fourth card is not a joker')

  t.end()
})


tape('pack with low aces', function(t){
  var deck = decked({
  	ace:'low'
  })
  var cards = deck()
  
  t.equal(cards[0].number, 1, 'the first card is an ace')
  t.equal(cards[0].name, 'ace', 'the first card is an ace')

  t.end()
})


tape('filtered pack', function(t){
  var deck = decked()
  var cards = deck(function(card){
    return card.suit=='diamond'
  })

  t.equal(cards.length, 13)

  cards.forEach(function(card){
    t.equal(card.suit, 'diamond', 'card ' + card.name + ' is a diamond')
  })

  t.end()
})


tape('sequence 0 till 15', function(t){
  var deck = decked.sequence({
    low:0,
    high:15
  })
  var cards = deck()

  t.equal(cards.length, 64, '64 cards') // 0 -> 15 = 15 cards x 4

  t.equal(cards[0].number, 0, 'the first card is number 0')
  t.equal(cards[cards.length-1].number, 15, 'the last card is number 15')

  t.end()
})