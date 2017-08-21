function ClozeCard (text, cloze) {
	this.cloze = cloze,
	this.partial = text.replace(cloze, "..."),
	this.fullText = text,
	this.readFront = function () {
		console.log(this.partial);
	},
	this.readBack = function () {
		console.log(this.fullText);
	}
}

// var testCard = new ClozeCard("George Washington is a president", "George Washington");

// testCard.readFront();
// testCard.readBack();

module.exports = ClozeCard;