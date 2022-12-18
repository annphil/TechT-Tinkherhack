const Filter = require("bad-words");

function scan(stream){
const filter = new Filter();

const words = require("./extra-words.json");
filter.addWords(...words);


}

module.exports{scan};