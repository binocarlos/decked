var suits = [
	'heart',
	'diamond',
	'spade',
	'club'
]

var names = {
	'1':'ace',
	'11':'jack',
	'12':'queen',
	'13':'king',
	'14':'ace'
}

function makeJoker(){
	return {
		suit:'joker',
		number:0,
		name:'joker'
	}
}

function makeCards(number){
	return suits.map(function(suit){
		var name = names[number] || number
		return {
			suit:suit,
			number:number,
			name:name
		}
	})
}

module.exports = function(opts){
	opts = opts || {}

	var allCards = []

	for(var i=0; i<opts.jokers || 0; i++){
		allCards.push(makeJoker())	
	}

	var ace = opts.ace || 'high'

	if(ace=='low'){
		allCards = allCards.concat(makeCards(1))
	}

	for(var c=2; c<=13; c++){
		allCards = allCards.concat(makeCards(c))
	}

	if(ace=='high'){
		allCards = allCards.concat(makeCards(14))
	}

	return function(filter){
		return allCards.filter(function(card){
			return filter ? filter(card) : true
		})
	}
}

module.exports.sequence = function(opts){
	opts = opts || {}

	var allCards = []

	var low = typeof(opts.low)=='number' ? opts.low : 1
	var high = opts.high || 10

	for(var c=low; c<=high; c++){
		allCards = allCards.concat(makeCards(c))
	}

	return function(filter){
		return allCards.filter(function(card){
			return filter ? filter(card) : true
		})
	}
}