// add solution here
function theBeatlesPlay(musicians,instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

var array = [];

function johnLennonFacts() {
var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
let i = 0;

 while(i<facts.length){ 
     var newFact = `${facts[i]} !!!`;
     array.push(newFact);
     i++;
   }
   return array;
}