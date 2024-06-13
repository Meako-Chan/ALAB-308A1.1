//Part 1

let counter = 0;
// increment(counter);

function increment(counter){
    try{
        counter++;
        increment(counter);
    } catch( error){
        console.log(error.message);
        console.log(counter);
    }
    
}      

//part 2

let flattenArr = (arr) => {
    let flat = [];
    arr.forEach(element => {
        if(element instanceof Array){
            flat.push(...flattenArr(element));
        }else{
            flat.push(element);
        }
    });       
    return flat;  
}

const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  }

arr = [1, [2, [3], 4], 5]
console.log(trampoline(flattenArr, arr));

//part 3

function primeNumbers(n){
    let numbers = []
    for(let i = 0; i < n; i++){
        if(isPrime(i)){
            numbers.push[i];
        }
    }
}

function isPrime(n){
    if(number < 2){
        return false;
    }
    for(let i = 0; i < Math.sqrt(n)+1; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

let text = document.createElement('p');

text.innerHTML = primeNumbers(10000);

