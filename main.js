// Question 1: Write a function addNumbers that takes a single string parameter and searches for all the numbers in the string, adds them together, then returns the sum. For example: if str is "88Hello 3World!" the output should be 91.

function addNumbers (str) {
	var strArray = str.split('');
	var processedArray = [];
	for (var i = 0; i < strArray.length; i++){
		if (isNaN(parseInt(strArray[i])) === false){
			var tempNumStr = strArray[i];
			for (var j = i+1; j < strArray.length; j++){
				if (isNaN(parseInt(strArray[j])) === false){
					tempNumStr = tempNumStr + strArray[j];
				}
				else
				{
					processedArray.push(tempNumStr);
					i = j;
					break;
				}
			}
		}
	}
	console.log(processedArray);
	var total = 0;
	for (i = 0; i < processedArray.length; i++){
		total = total + parseInt(processedArray[i]);
	}
	console.log(total);
	return total;
}

addNumbers("88Hello 3World!");

// Question 2: Write a function longestWord that takes a single string parameter and returns the largest word in the string. If there are two or more words that are the same length, it returns the first word from the string with that length. Ignore punctuation and assume the input sentence will not be empty.

function longestWord (str){
	var strArray = str.split(' ');
	console.log(strArray);
	var myLongestWord = '';
	for (var k = 0; k < strArray.length; k++){
		if ( strArray[k].length > myLongestWord.length)
			myLongestWord = strArray[k];

	}
	console.log(myLongestWord);
	return myLongestWord;
}

longestWord('my last name is McFarland');
