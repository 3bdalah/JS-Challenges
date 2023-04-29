function longestWord(str){
    let words = str.split(" ");
    let longestWord = "";
    for(let word of words){
        if(word.length > longestWord.length){
         longestWord = word;
        }
    }
    return longestWord;
}

console.log(longestWord("I Woke up early today"));

console.log(longestWord("I Want straight to the beach"));