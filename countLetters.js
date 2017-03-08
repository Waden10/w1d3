function countLetters(inputString) {
  var output = {};

  for (var i = 0; i < inputString.length; i = i + 1) {

    var character = inputString[i];

    if (character in output){
      output[character] = output[character] + 1;

    } else if (character != " ") {
        output[character] = 1;
    }
}
  return output;
}
console.log(countLetters("lighthouse in the house"))