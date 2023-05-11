

function reverseString01(str){
    return str.split('').reverse().join('');
};


function reverseString02(str){
       for(let i=str.length-1; i>=0; i--){
        revString +=str[i];
       }
    return revString;
}


function reverseString03(str){
    let revString = "";
    for(let char of str){
        revString = char + revString;
    }
    return revString;
}

function reverseString04(){
    let revString= '';
    str.splite('').forEach(char => revString = char + revString);
}


function reverseString05(){
    // let revString= '';
    return str.split('').reduce(function(revString,char){
        return char + revString;
    });
}


// #########################################


function isPalindrom(str){
    const revString = str.splite('').reverse().join('');
    return revString === str;
}



function reverseInt(int){
    const revString =  int.toString().splite('').revrse().join('');
    return parseInt(revString);
}


function capitalizeLetter01(str){
    const strArr = str.tolowerase().split(' ');
    for(let i=0;i<strArr.length;i++){
        strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);
    }
    return strArr.join(' ');
}


function capitalizeLetter02(str){
   return str.toLowerCase().split(' ').map(function(word) {
    return word[0].toUpperCase() + word.substr(1);
   }).join(' ');
}


function maxCharacter(str){
    const charMap = {};
    let maxNum= 0;
    const maxChar = '';
    str.split('').forEach( function(char) {
        if(charMap[char]){
            charMap[char]++;
        }else{
            charMap[char] =1;
        }
    });
    for(let char in charMap){
        // debugger
        if(charMap[char]> maxChar){
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    console.log(charMap);
}


function fizzBuzz(num){
    console.log(num);
    for(let i =1;i<=100;i++){
        if( i % 15 === 0)
            console.log("fizzBuzz");
        else if(i%3 === 0)
            console.log('fizz');
        else if(i % 5  ===0 )
            console.log("buzz");
        else
            console.log(i);
    }
}
