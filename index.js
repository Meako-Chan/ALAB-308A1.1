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


