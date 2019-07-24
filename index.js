// Make a counter function that returns a function that returns a successive number each time it is called.
function counter () {
    let count = 0;
    let actuallyCount = function () {
      count++;
      return count;
    }
    return actuallyCount;
  };
var count1 = counter() 
var count2 = counter() 
console.log(count1());
console.log(count1());
console.log(count2());
console.log(count2()); 
console.log(count1()); 
// Counter 2
// Allow the caller of counter to initialize the count to the first argument that's passed in.
function counter (x) {
    let count = x;
    let actuallyCount = function () {
      count++;
      return count;
    }
    return actuallyCount;
  };
var count1 = counter(4) 
var count2 = counter(4) 
console.log(count1());
console.log(count1());
console.log(count2());
console.log(count2()); 
console.log(count1()); 
// Counter 3
// Allow the counter to either increment 1 or decrement by 1 by calling the increment and decrement methods, 
// respectively. Note: now the counter needs to return an object rather than a function.
function counter (x) {
    this.increment = () => {
      x++;
      return x;
    }
    this.decrement = () => {
        x--;
      return x;
    }
};

var count = new counter(0);
console.log(count.increment()); 
console.log(count.increment()); 
console.log(count.decrement()); 
console.log(count.decrement());