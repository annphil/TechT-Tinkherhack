const Filter = require("./backend/node_modules").BadWordsFilter();

function scan(stream){
const filter = new Filter();

const words = require("./extra-words.json");
filter.addWords(...words);


}

module.exports = scan;