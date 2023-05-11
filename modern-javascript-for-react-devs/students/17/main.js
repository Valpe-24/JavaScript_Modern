//
// File: main.js
// Date: 5/24/2022
//

const ex1 = () => {
  const array = [1, "2", 3, "test", 1.2];
  console.log(countNumbers(array));
};

// test cases for ex.1
// array1 = ["6", "valerie", false, 5, 3];
// array2 = [6, "sky", "sun", 5, "3"];
// array3 = ["valerie", true, 5, "3"];

const ex2 = () => {
  const array = [5, 100, 8, 1, -91];
  console.log(minNumber(array));
  
};

// test cases for ex.2
// array1 = [5, 100, 8, 1, -91]
// array2 = [200, 1500, 3, 10];
// array3 = [90, 50, 4, 70];

const ex3 = () => {
  const array1 = [1, 2];
  const array2 = ['a', 'b', 'c', 'd', 'e'];
  console.log(interleave(array1, array2));
  
};

//test cases for ex.3
//array1 = [1, 2];
//array2 = ['a', 'b', 'c', 'd', 'e'];

const ex4 = () => {
console.log(palidrome('radar'));
console.log(palidrome('month'));
}

const ex5 = () => {
  console.log(timesWord("today this is a this is a this is a test.", "this"));
}

const ex6 = () => {
  const array = ['this', 'is', 'happiness', 'test', 'happy'];
    console.log(longestString(array));
}

// const ex7 = () => {
//   let n = [1, 3, 6, 3, 6, 10];
//     console.log(sort(n));

// }

const ex8 = () => {
  let words = "Count the words in this string";
console.log(countWords(words));

}

const countNumbers = (array) => {
  let retval = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "number") 
      retval += 1;
  }

  return retval;
};


const minNumber = (array) => {
  let smallestNumber = 0;

  for (let i = 0; i < array.length; i++) {

    if (i == 0) 
      smallestNumber = array[0];

    else if (array[i] < smallestNumber) 
      smallestNumber = array[i];
  }

  return smallestNumber;
};

const interleave = (array, array1) => {
  let arrayElements = "";
  if (array.length == array1.length){
    for(let i = 0; i < array.length; i++){
      arrayElements += array[i]
      arrayElements += array1[i]
    }
    return arrayElements
  }else {
    return "ERROR: Array length mismatch"
  }
}


const palidrome = (word) => {
  let newWord = "";
  for (let i = word.length -1; i >= 0; i--) {
    newWord += word[i];
  }
  if (newWord == word) {
    return true; 
  }else {
    return false; 
  }
}

const timesWord = (sentence, word) => {
  let wordArray = sentence.split(' ');
  let wordCount = 0; 

    for (let i = 0; i < wordArray.length; i++){
      if(wordArray[i] == word){
        wordCount++; 
      }
    }
  return word + " appears: " + wordCount + " times."
}

const longestString = (array) => {
  let longestWord = ''; 
  let mostLetters = 0; 

    for(let i = 0; i < array.length; i++){
      if(i == 0)
        mostLetters = array[0].length;
      else if(array[i].length > mostLetters)
        mostLetters = array[i].length;
        if (array[i].length == mostLetters)
          longestWord = array[i];
    }
    return longestWord; 
}

// const sort = (array) => {
//     for(let i = 0; i < array.length; i++){
      
//     }
    
//   return newArray; 
// }

const countWords = (sentence) =>{
  let words = sentence.split(' ');
  let numberOfWords = words.length
  return numberOfWords
}
  

const main = async () => {
  ex1();
  ex2();
  ex3();
  ex4();
  ex5();
  ex6();
  // ex7();
  ex8();
};

main();
