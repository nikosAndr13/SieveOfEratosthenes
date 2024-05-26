/*This function takes in a number, 
  and returns an array of all the primes up to the number */

const countPrimes = function (n) {
  const primes = [];
  if (n < 3) return primes; // we know that the Sieve of Eratosthenes has the condition of n >= 2

  const isPrime = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers

  //check all the numbers from 2 to the n
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      //add the prime number i to the array
      primes.push(i);
      //If i is divisible by i we mark it as non-prime
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return primes; //return the array of primes
};

console.log(countPrimes(50));
