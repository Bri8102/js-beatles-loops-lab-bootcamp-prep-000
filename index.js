// add solution here
function theBeatlesPlay(musicians,instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}



function johnLennonFacts() {
var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
let i = 0;
var array = [];
 while(i < facts.length) { 
     array.push(`${facts}!!!`);
     i++;
   }
   return array;
}