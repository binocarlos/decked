decked
======

[![Travis](http://img.shields.io/travis/binocarlos/decked.svg?style=flat)](https://travis-ci.org/binocarlos/decked)

Generate a list of playing cards based on a configurable pack

## installation

node:

```
$ npm install decked
```

component:

```
$ component install binocarlos/decked
```

## usage

Each card in a deck is represented by an object:

```js
{
	suit:'diamond',
	number:11,
	name:'jack'
}
```

The number of a jack is 11, queen is 12, king is 13 and ace is 14 or 1 depending on the 'ace' config option (high or low)

The suit property is one of:

 * heart
 * diamond
 * club
 * spade
 * joker

An ordered array of cards is returned.

```js
var decked = require('decked')

var deck = decked({

	// is ace 1 or 14
	ace:'high',

	// will the deck have 2 jokers inside (card number 0)
	jokers:2

})

var cards = deck()

console.log(cards.length)

// 54 (because we included the jokers)
```

You can pass a filter into the cards function to create a deck with only certain cards in:

```js

// a filter that will remove diamonds
var noDiamonds = deck(function(card){
	return card.suit != 'diamond'
})

// a filter that only returns face cards
var faceCards = deck(function(card){
	return card.number >= 11
})
```

## api

### `var deck = decked(config)`

create a new deck of cards with the given config options:

 * ace ('low' | 'high') - sets the numeric value of the ace to 1 or 14
 * jokers (true | false) - should the deck contain 2 jokers or not

### `var cards = deck(filter)`

get an array of card objects with an optional filter (which can be an array of filters)

## license

MIT