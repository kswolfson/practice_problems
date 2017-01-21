$(document).ready(launchBiggerWords);

function launchBiggerWords () {

    var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
    var outputArray = [];

    function biggerWords(inputString, inputArray) {
        var resultsArray = [];
        var j = 0;

        console.log('inputString: ' + inputString);
        console.log('inputString.length = ' + inputString.length);
        console.log('inputArray.length = ' + inputArray.length);

        for (var i = 0; i < inputArray.length; i++) {
            console.log('inputArray[' + i + '] = ' + inputArray[i])
            if (inputArray[i].length > inputString.length) {
                console.log('inputArray[' + i + '] longer than ' + inputString);
                console.log('j =  ' + j);
                resultsArray.push(inputArray[i]);
                console.log('resultsArray[' + j + '] = ' + resultsArray[j]);
                ++j;
            }
        }
        return resultsArray;
    }
    //console.log(biggerWords('whales', myArray));
    $('body').text(biggerWords('whales', myArray));
}