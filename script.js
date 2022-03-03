const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];


/*
  Static Methods
*/

// Array.of();

// Make a function that creates a range from x to y with Array.from();

function createRange(x, y) {
  let range = Array.from({length: y - x + 1}, function(item, index) {
    return x + index;
  });
  return range;
}


// Check if the last array you created is really an array with Array.isArray();

const numberArray = createRange(1,10);
let isArrayValue = Array.isArray(numberArray);

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()

const arrayOne = Object.entries(meats);
const arrayTwo = Object.keys(meats);
const arrayThree = Object.values(meats);


/*
  Instance Methods
*/

// Display all bun types with " or " - use join()

const displayBuns = buns.join(" or ");

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into a array
const sentanceArray = "hot dogs,hamburgers,sausages,corn".split(",");

// take the last item off toppings with pop()

const lastItem = toppings.pop(toppings.length);

// add it back with push()

toppings.push(lastItem);

// take the first item off toppings with shift()

toppings.shift(0);

// add it back in with unshift()

toppings.unshift("Mushrooms");

// Do the last four,but immutable (with spreads and new variables)

let unmutable = toppings.slice(0, -1);
unmutable.push(toppings[toppings.length -1])


// Make a copy of the toppings array with slice()

const toppingsCopy = toppings.slice();

// Make a copy of the toppings array with a spread

const spreadToppingsCopy = [...toppings];

// take out items 3 to 5 of your new toppings array with splice()

spreadToppingsCopy.splice(3, 2);

// find the index of Avocado with indexOf() / lastIndexOf()

spreadToppingsCopy.indexOf("Avocado");
// Check if hot sauce is in the toppings with includes()
// add it if it's not

if(!spreadToppingsCopy.includes("hot sauce")) {
  spreadToppingsCopy.push("Hot sauce");
};

// flip those toppings around with reverse()

spreadToppingsCopy.reverse();

/*
  Callback Methods
*/

// find the first rating that talks about a burger with find()

const burgerRating = feedback.find(el => el.comment.includes("burger"));

// find all ratings that are above 2 with filter()

const aboveTwo = feedback.filter(el => el.rating > 2);

// find all ratings that talk about a burger with filter()

const allBurgers = feedback.filter(el => el.comment.includes("burg"));

// Remove the one star rating however you like!

const goodFeedback = feedback.filter(el => el.rating > 1);

// check if there is at least 5 of one type of meat with some()

const valueArr = [...Object.values(meats)];
valueArr.some(el => el >= 5);

// make sure we have at least 3 of every meat with every()

valueArr.every(el => el >= 3);

// sort the toppings alphabetically with sort()

const alphabetical = toppings.sort();

// sort the order totals from most expensive to least with .sort()

const sortedOrders = orderTotals.sort(function(a, b) {
  return b - a;
})

// Sort the prices with sort()

const sortedPrices = Object.values(prices).sort(function(a, b) {
  return a - b;
});

/*
  Looping Methods (next)
*/

// Grab all the text from a web page
// Count how many times each letter and number occurs

const text = `Skip to main content
  Skip to search
  Skip to select language
  ✨ Learn more about MDN Web Docs' new design.


  References
  Guides
  toggle theme to light mode

  SHOW SEARCH
  References
  JavaScript
  JavaScript
  Standard built-in objects
  Array
  Array.prototype.reduce()

  English (US)
  RELATED TOPICS
  Standard built-in objects
  Array
  Properties
  Array.prototype[@@unscopables]
  Array.prototype.length
  Methods
  Array.prototype[@@iterator]()
  get Array[@@species]
  Array.prototype.at()
  Array.prototype.concat()
  Array.prototype.copyWithin()
  Array.prototype.entries()
  Array.prototype.every()
  Array.prototype.fill()
  Array.prototype.filter()
  Array.prototype.find()
  Array.prototype.findIndex()
  Array.prototype.flat()
  Array.prototype.flatMap()
  Array.prototype.forEach()
  Array.from()
  Array.prototype.groupBy()
  Array.prototype.groupByToMap()
  Array.prototype.includes()
  Array.prototype.indexOf()
  Array.isArray()
  Array.prototype.join()
  Array.prototype.keys()
  Array.prototype.lastIndexOf()
  Array.prototype.map()
  Array.of()
  Array.prototype.pop()
  Array.prototype.push()
  Array.prototype.reduce()
  Array.prototype.reduceRight()
  Array.prototype.reverse()
  Array.prototype.shift()
  Array.prototype.slice()
  Array.prototype.some()
  Array.prototype.sort()
  Array.prototype.splice()
  Array.prototype.toLocaleString()
  Array.prototype.toSource()
  Array.prototype.toString()
  Array.prototype.unshift()
  Array.prototype.values()
  Inheritance:
  Function
  Properties
  Function.arguments
  Function.caller
  Function.displayName
  Function.length
  Function.name
  Methods
  Function.prototype.apply()
  Function.prototype.bind()
  Function.prototype.call()
  Function.prototype.toSource()
  Function.prototype.toString()
  Object
  Properties
  Object.prototype.constructor
  Object.prototype.__proto__
  Methods
  Object.prototype.__defineGetter__()
  Object.prototype.__defineSetter__()
  Object.prototype.__lookupGetter__()
  Object.prototype.__lookupSetter__()
  Object.prototype.hasOwnProperty()
  Object.prototype.isPrototypeOf()
  Object.prototype.propertyIsEnumerable()
  Object.setPrototypeOf()
  Object.prototype.toLocaleString()
  Object.prototype.toSource()
  Object.prototype.toString()
  Object.prototype.valueOf()
  IN THIS ARTICLE
  Syntax
  Description
  Examples
  Specifications
  Browser compatibility
  See also
  Array.prototype.reduce()
  The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

  The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

  Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:


  The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.

  Syntax
  // Arrow function
  reduce((previousValue, currentValue) => { /* ... */ } )
  reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
  reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
  reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

  // Callback function
  reduce(callbackFn)
  reduce(callbackFn, initialValue)

  // Inline callback function
  reduce(function(previousValue, currentValue) { /* ... */ })
  reduce(function(previousValue, currentValue, currentIndex) { /* ... */ })
  reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ })
  reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)
  Copy to Clipboard
  Parameters
  callbackFn
  A "reducer" function that takes four arguments:

  previousValue: the value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].
  currentValue: the value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].
  currentIndex: the index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.
  array: the array to traverse.
  initialValue Optional
  A value to which previousValue is initialized the first time the callback is called. If initialValue is specified, that also causes currentValue to be initialized to the first value in the array. If initialValue is not specified, previousValue is initialized to the first value in the array, and currentValue is initialized to the second value in the array.

  Return value
  The value that results from running the "reducer" callback function to completion over the entire array.

  Exceptions
  TypeError
  The array contains no elements and initialValue is not provided.

  Description
  The ECMAScript spec describes the behavior of reduce() as follows:

  callbackfn should be a function that takes four arguments. reduce calls the callback, as a function, once for each element after the first element present in the array, in ascending order.

  callbackfn is called with four arguments:

  the previousValue (value from the previous call to callbackfn)
  the currentValue (value of the current element)
  the currentIndex, and
  the object being traversed
  The first time that callback is called, the previousValue and currentValue can be one of two values:

  If an initialValue was supplied in the call to reduce, then previousValue will be equal to initialValue and currentValue will be equal to the first value in the array.
  If no initialValue was supplied, then previousValue will be equal to the first value in the array and currentValue will be equal to the second.
  It is a TypeError if the array contains no elements and initialValue is not provided.

  reduce does not directly mutate the object on which it is called but the object may be mutated by the calls to callbackfn.

  The range of elements processed by reduce is set before the first call to callbackfn. Elements that are appended to the array after the call to reduce begins will not be visited by callbackfn. If existing elements of the array are changed, their value as passed to callbackfn will be the value at the time reduce visits them; elements that are deleted after the call to reduce begins and before being visited are not visited.

  If the array only has one element (regardless of position) and no initialValue is provided, or if initialValue is provided but the array is empty, the solo value will be returned without calling callbackFn.

  If initialValue is provided and the array is not empty, then the reduce method will always invoke the callback function starting at index 0.

  If initialValue is not provided then the reduce method will act differently for arrays with length larger than 1, equal to 1 and 0, as shown in the following example:

  const getMax = (a, b) => Math.max(a, b);

  // callback is invoked for each element in the array starting at index 0
  [1, 100].reduce(getMax, 50); // 100
  [    50].reduce(getMax, 10); // 50

  // callback is invoked once for element at index 1
  [1, 100].reduce(getMax);     // 100

  // callback is not invoked
  [    50].reduce(getMax);     // 50
  [      ].reduce(getMax, 1);  // 1

  [      ].reduce(getMax);     // TypeError
  Copy to Clipboard
  How reduce() works without an initial value
  The code below shows what happens if we call reduce() with an array and no initial value.

  const array = [15, 16, 17, 18, 19];

  function reducer(previous, current, index, array) {
    const returns = previous + current;
    return returns;
  }

  array.reduce(reducer);
  Copy to Clipboard
  The callback would be invoked four times, with the arguments and return values in each call being as follows:

  callback iteration	previousValue	currentValue	currentIndex	array	return value
  first call	15	16	1	[15, 16, 17, 18, 19]	31
  second call	31	17	2	[15, 16, 17, 18, 19]	48
  third call	48	18	3	[15, 16, 17, 18, 19]	66
  fourth call	66	19	4	[15, 16, 17, 18, 19]	85
  The value returned by reduce() would be that of the last callback invocation (85).

  How reduce() works with an initial value
  Here we reduce the same array using the same algorithm, but with an initialValue of 10 passed the second argument to reduce():

  [15, 16, 17, 18, 19].reduce( (previousValue, currentValue, currentIndex, array) => previousValue + currentValue, 10 )
  Copy to Clipboard
  The callback would be invoked five times, with the arguments and return values in each call being as follows:

  callback iteration	previousValue	currentValue	currentIndex	array	return value
  first call	10	15	0	[15, 16, 17, 18, 19]	25
  second call	25	16	1	[15, 16, 17, 18, 19]	41
  third call	41	17	2	[15, 16, 17, 18, 19]	58
  fourth call	58	18	3	[15, 16, 17, 18, 19]	76
  fifth call	76	19	4	[15, 16, 17, 18, 19]	95
  The value returned by reduce() in this case would be 95.

  Examples
  Sum all the values of an array
  let sum = [0, 1, 2, 3].reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
  }, 0)
  // sum is 6
  Copy to Clipboard
  Alternatively written with an arrow function:

  let total = [ 0, 1, 2, 3 ].reduce(
    ( previousValue, currentValue ) => previousValue + currentValue,
    0
  )
  Copy to Clipboard
  Sum of values in an object array
  To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your function.

  let initialValue = 0
  let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.x
  }, initialValue)

  console.log(sum) // logs 6
  Copy to Clipboard
  Alternatively written with an arrow function:

  let initialValue = 0
  let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
      (previousValue, currentValue) => previousValue + currentValue.x
      , initialValue
  )

  console.log(sum) // logs 6
  Copy to Clipboard
  Flatten an array of arrays
  let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    function(previousValue, currentValue) {
      return previousValue.concat(currentValue)
    },
    []
  )
  // flattened is [0, 1, 2, 3, 4, 5]
  Copy to Clipboard
  Alternatively written with an arrow function:

  let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    ( previousValue, currentValue ) => previousValue.concat(currentValue),
    []
  )
  Copy to Clipboard
  Counting instances of values in an object
  let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

  let countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
      allNames[name]++
    }
    else {
      allNames[name] = 1
    }
    return allNames
  }, {})
  // countedNames is:
  // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
  Copy to Clipboard
  Grouping objects by a property
  let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];

  function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }

  let groupedPeople = groupBy(people, 'age')
  // groupedPeople is:
  // {
  //   20: [
  //     { name: 'Max', age: 20 },
  //     { name: 'Jane', age: 20 }
  //   ],
  //   21: [{ name: 'Alice', age: 21 }]
  // }
  Copy to Clipboard
  Bonding arrays contained in an array of objects using the spread operator and initialValue
  // friends - an array of objects
  // where object field "books" is a list of favorite books
  let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }]

  // allbooks - list which will contain all friends' books +
  // additional list contained in initialValue
  let allbooks = friends.reduce(function(previousValue, currentValue) {
    return [...previousValue, ...currentValue.books]
  }, ['Alphabet'])

  // allbooks = [
  //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
  //   'Romeo and Juliet', 'The Lord of the Rings',
  //   'The Shining'
  // ]
  Copy to Clipboard
  Remove duplicate items in an array
  Note: If you are using an environment compatible with Set and Array.from(), you could use let arrayWithNoDuplicates = Array.from(new Set(myArray)) to get an array where duplicate items have been removed.

  let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
  let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
    if (previousValue.indexOf(currentValue) === -1) {
      previousValue.push(currentValue)
    }
    return previousValue
  }, [])

  console.log(myArrayWithNoDuplicates)
  Copy to Clipboard
  Replace .filter().map() with .reduce()
  Using Array.filter() then Array.map() traverses the array twice, but you can achieve the same effect while traversing only once with Array.reduce(), thereby being more efficient. (If you like for loops, you can filter and map while traversing once with Array.forEach()).

  const numbers = [-5, 6, 2, 0,];

  const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
    if (currentValue > 0) {
      const doubled = currentValue * 2;
      previousValue.push(doubled);
    }
    return previousValue;
  }, []);

  console.log(doubledPositiveNumbers); // [12, 4]
  Copy to Clipboard
  Running Promises in Sequence
  /**
  * Runs promises from array of functions that can return promises
  * in chained manner
  *
  * @param {array} arr - promise arr
  * @return {Object} promise object
  */
  function runPromiseInSequence(arr, input) {
    return arr.reduce(
      (promiseChain, currentFunction) => promiseChain.then(currentFunction),
      Promise.resolve(input)
    )
  }

  // promise function 1
  function p1(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 5)
    })
  }

  // promise function 2
  function p2(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 2)
    })
  }

  // function 3  - will be wrapped in a resolved promise by .then()
  function f3(a) {
  return a * 3
  }

  // promise function 4
  function p4(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 4)
    })
  }

  const promiseArr = [p1, p2, f3, p4]
  runPromiseInSequence(promiseArr, 10)
    .then(console.log)   // 1200
  Copy to Clipboard
  Function composition enabling piping
  // Building-blocks to use for composition
  const double = x => x + x
  const triple = x => 3 * x
  const quadruple = x => 4 * x

  // Function composition enabling pipe functionality
  const pipe = (...functions) => initialValue => functions.reduce(
      (acc, fn) => fn(acc),
      initialValue
  )

  // Composed functions for multiplication of specific values
  const multiply6 = pipe(double, triple)
  const multiply9 = pipe(triple, triple)
  const multiply16 = pipe(quadruple, quadruple)
  const multiply24 = pipe(double, triple, quadruple)

  // Usage
  multiply6(6)   // 36
  multiply9(9)   // 81
  multiply16(16) // 256
  multiply24(10) // 240
  Copy to Clipboard
  Write map using reduce
  if (!Array.prototype.mapUsingReduce) {
    Array.prototype.mapUsingReduce = function(callback, initialValue) {
      return this.reduce(function(mappedArray, currentValue, currentIndex, array) {
        mappedArray[currentIndex] = callback.call(initialValue, currentValue, currentIndex, array)
        return mappedArray
      }, [])
    }
  }

  [1, 2, , 3].mapUsingReduce(
    (currentValue, currentIndex, array) => currentValue + currentIndex + array.length
  ) // [5, 7, , 10]
  Copy to Clipboard
  Specifications
  Specification
  ECMAScript Language Specification
  # sec-array.prototype.reduce
  Browser compatibility
  Report problems with this compatibility data on GitHub
  desktop	mobile	server
  Chrome	Edge	Firefox	Internet Explorer	Opera	Safari	WebView Android	Chrome Android	Firefox for Android	Opera Android	Safari on iOS	Samsung Internet	Deno	Node.js
  reduce
  Open	
  Open	
  Open	
  Open	
  Open	
  Open	
  Open	
  Open	
  Open	
  Open	
  Open	
  Open	
  Open	
  Open
  Legend
  Full support
  Full support
  See also
  Polyfill of Array.prototype.reduce in core-js
  Array.prototype.reduceRight()
  Found a problem with this page?
  Edit on GitHub
  Source on GitHub
  Report a problem with this content on GitHub
  Want to fix the problem yourself? See our Contribution guide.
  Last modified: Feb 18, 2022, by MDN contributors

  Your blueprint for a better internet.

  MDN on Twitter
  MDN on Github
  MDN
  About
  Hacks Blog
  Careers
  Support
  Report a page issue
  Report a site issue
  Our communities
  MDN Community
  MDN Forum
  MDN Chat
  Developers
  Web Technologies
  Learn Web Development
  Website Privacy Notice
  Cookies
  Legal
  Community Participation Guidelines
  Visit Mozilla Corporation’s not-for-profit parent, the Mozilla Foundation.
  Portions of this content are ©1998–2022 by individual mozilla.org contributors. Content available under a Creative Commons license.

`;
 


  const result = text
    .toLowerCase()
    .split("")
    .filter(el => el.match(/[a-z0-9]/i))
    .reduce(function(acc, item) {
      acc[item] ? acc[item] = acc[item] + 1 : acc[item] = 1;
      return acc;
    }, {})


  const sortedResult = Object
    .entries(result)
    .sort((a,b) => a[1] - b[1]);

    console.log(sortedResult);