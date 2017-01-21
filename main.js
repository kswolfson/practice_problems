$(document).ready(launchBiggerWords);

function launchBiggerWords () {

    var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];

    function biggerWords(inputString, inputArray) {
        var resultsArray = [];
        var j = 0;

        for (var i = 0; i < inputArray.length; i++) {
            console.log('inputArray[' + i + '] = ' + inputArray[i])
            if (inputArray[i].length > inputString.length) {
                resultsArray.push(inputArray[i]);
                ++j;
            }
        }
        return resultsArray;
    }
    $('body').text(biggerWords('whales', myArray));
}