var num = parseInt(process.argv[2]);
function isPrime(num) {
  if (num == 1) {
    return false;
  }
  else if (num == 2) {
    return true;
  }
  else {
    for (var i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}
console.log("Number is Prime :" + isPrime(num));