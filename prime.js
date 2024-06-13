//part 3

function primeNumbers(n){
    let numbers = "";
    for(let i = 0; i <= n; i++){
        console.log(isPrime(i))
        if(isPrime(i)){
            numbers = numbers + " " + i;
        }
    }
    return numbers;
}

function isPrime(n){
    if(n < 2){
        return false;
    }
    for(let i = 2; i < Math.sqrt(n)+1; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

let text = document.createElement('h2');

text.innerHTML = primeNumbers(10000);

document.body.appendChild(text);
alert("Prime numbers are generated");
