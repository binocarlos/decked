var decked = require('./')
var tape     = require('tape')

tape('normal pack with no options', function(t){
  var deck = decked()
  var cards = deck()
  var standardPack = require('./standardpack.json')
  t.equal(cards.length, 52, 'there are 52 cards in a standard deck')
  t.deepEqual(cards, standardPack, 'the cards are as expected')
  
  t.end()


})