function BasicCard (front, back) {
	this.front = front,
	this.back = back,
	this.readFront = function () {
		console.log(this.front);
	},
	this.readBack = function () {
		console.log(this.back);
	}
}

// var testCard = new BasicCard("Question", "Answer");
// var testArray = [];
// testArray.push(testCard);

// testArray[0].readFront();

// testCard.readFront();
// testCard.readBack();

module.exports = BasicCard;
