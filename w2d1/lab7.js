function max(num1,num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}



function  maxOfThree(num1, num2, num3){
    if (num1 >= num2 && num1 >= num3){
        return num1;
    }
 else if (num2 >= num1 && num2 >= num3){
     return num2;
 }

 else{
     return num3;
 }
}


function isVowel(ch){
    if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
        return true;
    }
    else{
        return false;
    }

}



function sum(numArr=[]) {
    return numArr.reduce((accomulator,currentVal)=>accomulator + currentVal);
}



function multiply(numArr=[]) {
    return numArr.reduce((accomulator,currentVal)=>accomulator * currentVal);
}




function reverse(name){
   
    return name.split("").reduce((rev, char)=> char + rev, '');

}



function findLongestWord(arrWords=[]) {
    let longest;
    let len=0;
    // for(let i=0; i<arrWords.length;i++){
    //     if(arrWords[i].length>len){
    //         len=arrWords[i].length;
    //         longest=arrWords[i];
    //     }

    // }

    // return longest;


    const words=arrWords.filter(word=>{if(word.length>len){
                                        len=word.length;
                                        return word;
    }});

    return words[0].length>words[1]?words[0]:words[1];
}



function filterLongWords(arrWords=[], i){
   return arrWords.filter(word => word.length > i);
        

}




const a = [1,3,5,3,3]; 


// multiply each element by 10;
const b = a.map(function(elem, i, array) {
  return elem * 10;
});


// return array with all elements equal to 3
const c=a.filter(function(elem,i,array){
    return elem==3;
});


// return the product of all elements
const d=a.reduce(function(preValue, elem, i, array){
    return preValue*elem;
});




/* ******************************** Test ***************************** */



/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }

  
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  
  console.assert((myFunctionTest(10, max(20, 10)))!="TEST SUCCEEDED",'Failed assert test');

  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(44, maxOfThree(55, 4, 44)));
  console.log("Expected output of isVowel('o') is true  " + myFunctionTest(true,isVowel('o')));
  console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10,sum([1,2,3,4])));
  console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24,multiply([1,2,3,4])));
  console.log("Expected output of reverse('simon') is nomis  " + myFunctionTest('nomis',reverse('simon')));
  console.log("Expected output of findLongestWord(['abcd','ab','abc','a']) is abcd  " + myFunctionTest('abcd',findLongestWord(['abcd','ab','abc','a'])));
  console.log("Expected output of filterLongWords(['class','javascript','python','php'],5) is 'javascript'" 
  + myFunctionTest('javascript',filterLongWords(['class','javascript','python','php'],5)));
