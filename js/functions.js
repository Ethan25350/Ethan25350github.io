console.log("Please stop looking at my code, or else")
  var x = 3;
  function generateFunny() {
    var funnyPhrases = [
      "dog water",
      "no maidens?",
      "Dababy",
      "What da dog doin?",
      "Water",
      "Sometimes it takes a real man to become best girl"
    ]
    var funnyWords = document.getElementById("funnyWords");
    funnyWords.innerHTML = funnyPhrases[rollDie() - 1 ];
  }
  function rollDie() {
    var newNumber = Math.random();
    newNumber = newNumber * 6;
    newNumber = Math.ceil(newNumber);
    return newNumber;
  }
  function getDieRoll() {
    var dieBox = document.getElementById('dieBox');
    dieBox.innerHTML = rollDie();
  }
