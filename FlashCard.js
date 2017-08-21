var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var action = process.argv[2];
var frontText = process.argv[3];
var backCloze = process.argv[4];
cards = [];

switch(action) {
	case "basic":
		var newCard = new BasicCard(frontText, backCloze);
		cards.push(newCard);
		newCard.readFront();
		newCard.readBack();
		break;
	case "cloze":
		var newCard = new ClozeCard(frontText, backCloze);
		if (newCard.fullText.includes(newCard.cloze)) {
			cards.push(newCard);
			newCard.readFront();
			newCard.readBack();
		}
		else {
			console.log("Cloze not found in Full Text");
		}
		break;
}