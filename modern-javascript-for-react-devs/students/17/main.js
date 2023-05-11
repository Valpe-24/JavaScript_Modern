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

const ex9 = () => {
  var a = "this counts the number of words that end in s";
  console.log(countS(a));

}

const ex10 = () => {
  var array = ["this", "is", "a", "test"];
  console.log(countLetters(array));

}

const ex11 = () => {
  let arr = ['dog', 3, 7, 'cat', 13, 'car'];
  console.log(numbersOnly(arr));

}

// const ex12 = () => {
//   const c = new Calculator();
//     c.add(1,2);
//     c.sub(4,1);
//     c.div(10,2);
//     c.mul(2,2)
//   console.log(c.getHistory())
// }
const ex13 = () => {
  let sum = 0
  let dict = [
    { "firstName": "joe", "lastName": "smith", "age": 10 },
    { "firstName": "paul", "lastName": "simmon", "age": 20 },
    { "firstName": "fred", "lastName": "jones", "age": 30 },
 
]
for(let i = 0; i < dict.length; i++){
  // console.log(dict[i]["age"])
  sum += dict[i]["age"];
}

console.log(`The total age is: ${sum}`); 
}

const ex14 = () => {
  let customers = [{
    name: 'ABC Inc',
    credit: 100
}, {
    name: 'ACME Corp',
    credit: 200
}, {
    name: 'IoT AG',
    credit: 300
}];

let costumerCredit = (creditScore) =>  {
  return creditScore.credit === 200; 
}

console.log(customers.find(costumerCredit));

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

const countS = (sentence) => {
  let wordsEndS = 0;
  let words = sentence.split(' ');
    for(let i = 0; i < words.length; i++){
      let letters = words[i].split('');
        let index = letters.length -1;
        if (letters[index] == 's'){
          wordsEndS++; 
        }
    }
  return wordsEndS;

}

const countLetters = (array) => {
  let newArray =[]; 
   for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].length); 
   }

   return newArray.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
   });
}

const numbersOnly =  (array) => {
  let numberArray = []
  for(let i = 0; i < array.length; i++){
    if (typeof array[i] == 'number')
      numberArray.push(array[i]);
  }
  return numberArray; 
}

// class Calculator {
//   constructor(number1, number2) {
//     this.number1 = number1; 
//     this.number2 = number2; 
//   }

//   get getHistory() {
//     return this.add(), this.sub(), this.div(), this.mul();
    
//   }

//   add(number1, number2) {
//     return `Add: ${this.number1} + ${this.number} = ${this.number1 + this.number2}`
//   }

//   sub() {
//     return `Sub: ${this.number1} - ${this.number} = ${this.number1 - this.number2}`

//   }
//   div() {
//     return `Div: ${this.number1} / ${this.number} = ${this.number1 / this.number2}`

//   }
//   mul() {
//     return `Mul: ${this.number1} * ${this.number} = ${this.number1 * this.number2}`
    
//   }
// }

  

const main = async () => {
  ex1();
  ex2();
  ex3();
  ex4();
  ex5();
  ex6();
  // ex7();
  ex8();
  ex9();
  ex10();
  ex11();
  // ex12();
  ex13();
  ex14();
};

main();
