
function capitalizeWordsTwo(str){
    let words = str.split(" ").map(word => {
        let firstLetter =  word.slice(0,1);
        let rest = word.slice(1);
        firstLetter = firstLetter.toUpperCase();
        return `${firstLetter}${rest}`;
    });
    return words.join(" ");
}
function capitalizeWordOne(str){
    let words = str.split(" ").map( word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return words.join(" ");
}

console.log(capitalizeWordOne("i got up early today"));

console.log(capitalizeWordOne("i walked starting to the beach"));

capitalizeWordsTwo
console.log(capitalizeWordsTwo("i got up early today"));

console.log(capitalizeWordsTwo("i walked starting to the beach"));
