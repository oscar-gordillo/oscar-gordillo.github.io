function compArrays(array1,array2){
    return array1.length === array2.length && array1.every(function(value, index) { return value === array2[index]});
}
function myFunctionTestArr(expected, found) {
    if (compArrays(expected,found)) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }

function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }

function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    };
  }

  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  console.assert(20===max(20, 10),'TEST FAILED');

function maxOfThree(a,b,c){
    if (a > b && a > c) {
        return a;
    }else {
        if(b>a && b>c){
            return b;
        }else{
            return c;
        }

    }
} 

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.assert(44===maxOfThree(5,4,44),'TEST FAILED');
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.assert(55===maxOfThree(55,4,44),'TEST FAILED');

function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}

console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a')));
console.assert(true===isVowel('a'),'TEST FAILED');

function sum(arr){
    let s=0;
    for (let i=0;i<arr.length;i++){
        s=s+arr[i];
    }
    return s;
}

console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1,2,3,4])));
console.assert(10===sum([1,2,3,4]),'TEST FAILED');

function multiply(arr){
    let m=1;
    for (let i=0;i<arr.length;i++){
        m=m*arr[i];
    }
    return m;
}

console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1,2,3,4])));
console.assert(24===multiply([1,2,3,4]),'TEST FAILED');

function reverse(str){
    var newString="";
    for (let i=str.length-1;i>=0;i--) {
        newString=newString+str[i];
    }
    return newString;
}

console.log('Expected output of reverse("jag testar") is "ratset gaj"  ' + myFunctionTest("ratset gaj", reverse("jag testar")));
console.assert("ratset gaj"==reverse("jag testar"),'TEST FAILED');

function findLongestWord(arr){
    var max=0;
    for(let i=0;i<arr.length;i++){
        if (arr[i].length > max) {
            max=arr[i].length;
        }
    }
    return max;
}

console.log('Expected output of findLongestWord(["1","11","111"]) is 3  ' + myFunctionTest(3, findLongestWord(["1","11","111"])));
console.assert("ratset gaj"==reverse("jag testar"),'TEST FAILED');

function filterLongWords(arr,i){
    return arr.filter(w=>w.length>i);
}
console.log('Expected output of filterLongWords(["1","11","111"],1) is ["11","111"]  ' + myFunctionTestArr(["11","111"], filterLongWords(["1","11","111"],1)));
console.assert(compArrays(["11","111"],filterLongWords(["1","11","111"],1)),'TEST FAILED');

const a = [1,3,5,3,3]; 
    const b = a.map(function(elem, i, array) {
        return elem * 10;
    });
    console.log(b);

    console.log('Expected output of mapping [1,3,5,3,3] multiplying by ten is [10,30,50,30,30] ' + myFunctionTestArr([10,30,50,30,30], a.map(function(elem, i, array) {
        return elem * 10;
    })));
    console.assert(compArrays([10,30,50,30,30],b),'TEST FAILED');

    const c = a.filter(function(elem, i, array){
        return elem === 3;});

    console.log(c);

    console.log('Expected output of filtering [1,3,5,3,3] to only 3 is [3,3,3] ' + myFunctionTestArr([3,3,3], a.filter(function(elem, i, array){
        return elem === 3;})));
        console.assert(compArrays([3,3,3],c),'TEST FAILED');

    const d = a.reduce(function(prevValue, elem, i, array){
            return prevValue * elem;
        });
        console.log(d);
    console.log('Expected output of reducing [1,3,5,3,3] multiplying its elements is 135  ' + myFunctionTest(135, a.reduce(function(prevValue, elem, i, array){
        return prevValue * elem;
    })));
    console.assert(135===d,'TEST FAILED');




