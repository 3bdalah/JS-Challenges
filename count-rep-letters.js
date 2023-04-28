function countLetters(str){
    let tempArr = str.split("");
    console.log("splite = ",tempArr);
    let letters = [];
    let count =1;
    for(let  i=0;i<tempArr.length;i++){
        if(tempArr[i] === tempArr[i+1]){
            count++;
        }else{
            let value = `${count}${tempArr[i]}`;
            letters.push(value);
            count =1;
        }
    }
    return letters.join('');
}
console.log(countLetters('ffffeerrtttooo'));