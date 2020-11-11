var num = process.argv[2];
function isPrime(num) {
  if (num == 1) {
    return false;
  }
  else if (num == 2) {
    return true;
  }
  else {
    for (var i = 2; i < (num / 2); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}
console.log("Number is Prime :" + isPrime(num));