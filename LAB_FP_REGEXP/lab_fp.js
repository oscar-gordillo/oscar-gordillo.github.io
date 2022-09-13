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


//FP
function sumFP(arr){
    return arr.reduce((x,y)=>x+y);
}
console.log("Expected output of sumFP([1,2,3,4]) is 10  " + myFunctionTest(10, sumFP([1,2,3,4])));


function multiplyFP(arr){
    return arr.reduce((x,y)=>x*y);
}

console.log("Expected output of multiplyFP([1,2,3,4]) is 24  " + myFunctionTest(24, multiplyFP([1,2,3,4])));


function reverseFP(str){
    var splitString = str.split("");
    return splitString.reduce((x,y)=>y+x);
}

console.log('Expected output of reverseFP("jag testar") is "ratset gaj"  ' + myFunctionTest("ratset gaj", reverseFP("jag testar")));

function filterLongWordsFP(arr,i){
    return arr.filter(w=>w.length>i);
}
console.log('Expected output of filterLongWordsFP(["1","11","111"],1) is ["11","111"]  ' + myFunctionTestArr(["11","111"], filterLongWordsFP(["1","11","111"],1)));