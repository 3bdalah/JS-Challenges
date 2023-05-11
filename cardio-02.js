function longestWord(sen){
    // created filterde array 
    const wordArr = sen.ToLowerCase().match(/[a-z0-9]+/g);

    // sort be  length 
    const sorted = wordArr.sort(function (a,b){
        return b.length - a.length;
    });
    console.log(sorted);
    if(sorted.length ===1){
        return sorted[0];
    }else{
        return sorted;
    }
}

function chunckArray(arr,len){
    const chunkedArr = [];
    let i=0;

    while(i<arr.length){
        chunkedArr.push(arr.slice(i,i+len));
        i+=len;
    }
    return chunkedArr;
}



function flattenArray(arrays){
    // solution 1
    // return arrays.reduce((a,b)=>{
    //     return a.concat(b);
    // });

    // solution 2
    // return [].concat.apply([],arrays);
    
    //  solution 3 
    return [].concat(...arrays);
}



function letterChanges(str){
    let newStr = str.replace(/[a-z]/gi,function (char){
        if(char === 'z' || char === 'Z'){
            return 'a';
        }else{
            return String.fromCharCode(char.charCodeAt()+1);
        }
    });
    newStr = newStr.replace(/a|e|i|o|u/gi,vowel => vowel.toUpperCase());
    return newStr;
}