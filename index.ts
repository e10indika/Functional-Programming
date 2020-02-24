//1

function identity(x) {
  return x;
}

//let identity = a => a;

//2
function add(x, y) {
  return x + y;
}

//3
function mult(x, y) {
  return x * y;
}

//4
function functionf(x) {
  return function() {
    return x;
  };
}

//5
function addf(x) {
  return function(y) {
    return x + y;
  };
}

//6
function applyf(f){
  return function(x){
    return function(y){
      return f(x,y);
    }
  }
}

//7
function curry(f, x){
  return function(y){
    return f(x, y)
  }
}

let inc1  = curry(add, 1);
let inc2 = addf(1);
let inc = identity(add);


function twice(f){
  return function(x){
    return f(x, x)
  }
}
// let twice = (f) => (x) => f(f(x,0));
let double = twice(add)
let square = twice(mult)

function compose(f1, f2){
  return function(x){
    return square(double(x));
  }
}

// let functionf = (x) => () => x;
// let addf = (x) => (y) => x + y;
 let applyff = (f) => (x) => (y) => f(x,y)

console.info(identity(1));
console.info(add(3, 6));
console.info(mult(5, 9));
console.info(functionf(9)());
console.info(addf(67)(5));

console.info(applyf(add)(3)(5))

let add3 = curry(add, 3)
console.info(add3(7))


// console.info(inc(7))
console.info(inc2(inc2(8)))

console.info(double(11))
console.info(square(9))

console.info(compose(double, square)(3))
