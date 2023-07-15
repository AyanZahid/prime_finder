function isPrime(num) {
  for (var i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function findPrimes(upperLimit) {
  var primes = [];

  for (var i = 2; i <= upperLimit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

var inputNumber = parseInt(prompt("Enter a number greater than 2:"));
var primeNumbers = findPrimes(inputNumber);
console.log("Prime numbers:", primeNumbers);
