function add(a,b) {
  return a+b;
}

function subtract(a,b) {
  return a -b;
}

function sum(a,b) {
  return a+b;
}

function multiply(a,b) {
  return a*b;
}

function power(a,pow) {
  return a ** pow;
}

function factorial(num) {
  let fact = 1;
  for(var i=2 ; i<=num;i++){
    fact *= i;
  }
  return fact;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
