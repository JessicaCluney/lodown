'use strict';

/* 
* identity: Designed to return the same value that is passed in by the parameter.
*
* @param  {Anything} literally could be anything (string, abject, array, number, boolean, etc.)
*
* @return {Anything} unchanged (at original value)
*
* Usage:
*   identity("Return anything yo!") === "Return anything yo!"
*   identity({5: "pizzas"}) === {5: "pizzas"}
*   identity([1, "Gracie", true]) === [1, "Gracie", true]
*/

function identity(anything){ 
    return anything;
}

module.exports.identity = identity;


/* 
* typeOf: Designed to take any given data and identify the type of data it is.
*
* @param  {Anything} literally could be anything (string, abject, array, number, boolean, etc.)
*
* @return {Anything} type of Anything as a string
*
* Usage:
*   typeOf(9670) // "number"
*   typeOf("My dog is awesome") // "string"
*   typeOf([2, "dog", true]) // "array"
*/

function typeOf(anything) {
     if (Array.isArray(anything)) {
        return 'array';
    } else if (typeof anything === 'string') {
        return 'string';
    } else if (anything === null) {
        return 'null';
    }  else if (typeof anything === 'number') {
       return 'number';
    } else if (anything instanceof Date) {
        return 'date';
    } else if (typeof anything === 'object') {
        return 'object';
    } else if (typeof anything === 'boolean') {
       return 'boolean';
    } else if (typeof anything === 'function') {
        return 'function';
    } else {
        return 'undefined';
    }
}

module.exports.typeOf = typeOf;


/* 
* first: Designed to return the first element of an array. Number parameter will return the first number elements of the array.
*
* @param  {array}  given variable to identify or reject as an array. 
* @param  {number} given variabe to identify or reject as a number; 
*                  determine how many items in the array to return given the first 2 statements are true
*
* @return {array}  If array is not an array, return an empty array;
*                  If number is not given or not a number, return just the first element in the array.
*                  If neither of the first 2 are true, then return the first number items of array
*                   * Keep in Mind: could have negative number; number could greater than array.length
*
* Usage:
*   first("strings", {and: 'things'}) // []
*   first(["this isn't a number", "nope, not this one either", NaN], "Gracie loves pizza") // ["this isn't a number"]
*   first(["Gracie", "Ica", "Yancy"], 1) // ["Gracie"]
*   first(["Gracie", "Ica", "Yancy"], 2) // ["Gracie", "Ica"]
*/

function first(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    }
    if (typeof number !==  'number' || !number) {
        return array[0];
    } else {
      return array.slice(0, number);
    }
}

module.exports.first = first;


/* 
* last: Designed to return the last element of an array. Number parameter will return the last number elements of the array.
*
* @param  {array}  given variable to identify or reject as an array. 
* @param  {number} given variabe to identify or reject as a number. 
*                  determine how many items in the array to return given the first 2 statements are true.
*
* @return {array}  If array is not an array, return an empty array.
*                  If number is not given or not a number, return just the last element in the array.
*                  If neither of the first 2 are true, then return the last number items of array
*                   * Keep in Mind: could have negative number; number could greater than array.length
*
* Usage:
*   last("strings", {and: 'things'}) // []
*   last(["this isn't a number", "nope, not this one either", NaN, "no number here"], "Gracie loves pizza") // ["no number here"]
*   last(["Gracie", "Ica", "Yancy"], 1) // ["Yancy"]
*   last(["Gracie", "Ica", "Yancy"], 2) // ["Ica", "Yancy"]
*/

function last(array, number) {
 if (!Array.isArray(array) || number < 0) {
        return [];
    }
    if( number > array.length ) {
      return array;
    }
    if (typeof number !==  'number' || !number) {
         return array[array.length-1];
    } else {
      return array.slice(-number); // if number = 4 it would give the last 4 items
    }
}

module.exports.last = last;


/*
* each: Designed to loop over a collection to determine if collection is an Array or Object and then apply the function to each value in the result collection.
*
* @param {collection} array or object over which to iterate.
* @param {function}   function to be applied to each value in the collection after determining the type of collection.
*
* @call  {function}   if collection is determined to be an array, call function once for each element with the arguments:
*                        element, index, collection
*                     if collection is determined to be an object, call function once for each property with the arguments:
*                        value, key, collection
*
* Usage:
*    each(["Gracie", "Ica", "Yancy"], function(element, index, collection) {console.log(element)}); // "Gracie" "Ica" "Yancy" 
*
*    each({dog: "Gracie", dogsHuman: "Ica", human: "Yancy"}, function(value, key, collection) {console.log(value)}); // "Gracie" "Ica" "Yancy"
*/

function each(collection, func) {
    if(Array.isArray(collection)) {     //if collection is array
       for( var i = 0; i < collection.length; i++) { //loop over array 
           func(collection[i], i, collection); //call function once for each element with the arguments: element, index, collection
       } 
    } else if(typeof collection === 'object') { //if collection is an object 
        for( var key in collection) {
            func(collection[key], key, collection);//call function once for each property with the arguments: value, key, collection
        }
    }
}

module.exports.each = each;


/* 
* indexOf: Designed to determine if given value is inside of given array and if so, return the index of said value; If value is not inside the array, return -1
*          
*
* @param  {array}  array to iterate over
* @param  {value}  given variabe which may or may not be inside the array 
*
* @return {index}  array index of first occurance of value
*                  if value is not in array, return -1
*                   * Keep in Mind: value could appear multiple times within array; array may not contain value
*
* Usage:
*   indexOf(["Gracie", "Ica", "Yancy"], "Yancy") // 2
*   indexOf(["Gracie", "Ica", "Yancy"], "Frank") // -1
*/

function indexOf(array, value) {
    for(var i = 0; i < array.length; i++) {
     if(array[i] === value){ //Return the index of array that is the first occurrance of value
       return i;
     }
    } 
  return -1; //Return -1 if <value> is not in array
}

module.exports.indexOf = indexOf;


/* 
* filter: Designed to iterate over an array and return element(s) where function executed on element returned true
*
* @param  {array}      array to iterate over
* @param  {function}   function used to true or false by passing in arguments: value, index, array
*
* @return {array}      array of elements for which calling function returned true
*
* Usage:
*   filter([1, 2, 3, 4, 5], function(value){return value % 2 === 0}) // [2, 4]
*   filter(["Gracie", "Ica", "Yancy"], function(value, index, collection){return index === 1}) // ["Ica"]
*/

function filter(array, func) {
    var newArray = [];
    each(array, function (value, index, collection) {
        if (func(value, index, collection)) {
            newArray.push(value);
        }
    });
    return newArray;
}

module.exports.filter = filter;


/* 
* reject: Designed to iterate over an array and return element(s) where function executed on element returned false
*
* @param  {array}      array to iterate over
* @param  {function}   call function for each element in array passing the arguments: element, index, array
*
* @return {array}      array of elements for which calling function returned false
*                         * Keep in Mind: function could return something other than boolean
*
* Usage:
*   reject([1, 2, 3, 4, 5], function(element, index, array){return e%2 === 0}) // [1, 3, 5]
*   reject(["Gracie", "Ica", "Yancy"], function(element, index, array){return index === 1}) // ["Gracie", "Yancy"]
*/

function reject(array, func) {
    var newArray = [];
    each(array, function (value, index, collection) {
        if (!func(value, index, collection)) {
            newArray.push(value);
        }
    });
    return newArray;
}

module.exports.reject = reject;


/* 
* partition: Designed to iterate over an array and return an array of 2 arrays: one containing an array for when function returned true and one for when function returned false.
*            
* @param  {array}      array to iterate over
* 
* @param  {function}   call function for each element in array passing the arguments: element, index, array
*
* @return {array}      an array that is made up of 2 sub arrays:
*                         0) An array that contains all the values for which function returned something truthy
*                         1) An array that contains all the values for which function returned something falsy
*                              
*
* Usage:
*   partition([1, 2, 3, 4, 5], function(element, index, array){
*     return element % 2 === 0;
*   }); // [[2, 4], [1, 3, 5]]
}
*   partition([2, 4, 6, 8], function(element, index, arr){
*     return index > 2;
*   }); // [[8], [2, 4, 6]]
}
*/

function partition(array, func) {
return [filter(array, func), reject(array, func)];
}

module.exports.partition = partition;


/* 
* unique: Designed to remove duplicates from an array and return a new array
*
* @param  {array} array to iterate over
*
* @return {array} an array that is made up of original array but with duplicate elements removed
*                    
*
* Usage:
*   unique(["Gracie", "Ica", "Yancy", "Gracie", "Ica"]) // ["Gracie", "Ica", "Yancy"]
*   unique([true, "StringyStringString", 5, 5, 1, 0, true, 2, 5]) // [true, "StringyStringString", 5, 1, 0, 2]
*/

function unique(array) {
    var newArray = [];
    each(array, function(value, i, collection) { //loop through array with each to call function once for each element with the arguments:                                                    element, index, collection
        if(indexOf(newArray, value) === -1) {    //indexOf to loop newArray // if value equals -1, it is not in the array and needs to be                                                                               pushed in (indexOf returns -1 for items not pushed to array)
            newArray.push(value);
        }
    });
    return newArray;
}

module.exports.unique = unique;


/* 
* map: Designed to create a new array with the results of calling a function for every collection element.
*
* @param  {collection} array or object to iterate over
* @param  {function}   call function for each element in collection passing these arguments depending on data type: 
*                           array: element, index, collection
*                           object: value, key, collection
*
* @return {array} an array that is made up of return values of each function call
*
* Usage:
*   map([1, 2, 3, 4], function(element, index, array){return e * 2}) // [2, 4, 6, 8]
*   map({name: "Ica", hasDog: "yes"}, {name: "Gracie", hasDog: "no"}, {name: "Yancy", hasDog: "ish"}, function(value, key, collection){return value.hasDog}) // ["yes", "no", "ish"]
*/

function map(collection, func) {
    var newArray = [];
    each(collection, function(value, i, group) {
        newArray.push(func(value, i, group));
    });
    return newArray;
}

module.exports.map = map;


/* 
* pluck: Designed to return property values for a given array of object(s)
*
* @param  {array}     array of objects to iterate over
* @param  {property}  value to be returned in array
*
* @return {array}     containing the value of property for every element in array
*                      
*
* Usage:
*   pluck([{name: "Ica"}, {name: "Gracie"}, {age: 7}], "age") // [7]
*/

function pluck(array, property) {
    return map(array, function(value, i, group) { //returns new array with results of calling a function for every array element
        return value[property];                    // returns a property's value
    });
}

module.exports.pluck = pluck;


/* 
* contains: Designed to return boolean of whether or not a value is present in an array
*
* @param  {array}    array to iterate over
* @param  {value}    value to check for in array
*
* @return {boolean}  true if array contains value; false otherwise
*                        * Keep in Mind: You must use the ternary operator in implementation.
*
* Usage:
*   contains(["Gracie", "Ica", "Yancy"], "Frank") // false
*/

function contains(array, value) {
    return (indexOf(array, value) > -1 ? true : false); //if indexOf function returns greater than -1 value is true since index starts at 0
}

module.exports.contains = contains;


/* 
* every: Designed to return boolean of whether condition is true for all function values when called on all collection values;           false otherwise
*        
* @param  {collection}  array or object to iterate over
* @param  {function}    call for every element of collection based on data type:
*                          array: element, index, collection
*                          object: value, key, collection
*
* @return {boolean}     true if the return value of calling function for every element is true
*                       true if function is not provided
*                       false if even one return value of calling function for every element returns false
*
* Usage:
*   every([10, 20, 50], function(element, index, collection){return element % 10 === 0}) // true
*   every([11, 20, 30], function(element, index, collection){return element % 2 === 0}) // false
*/

function every(collection, func) {
    return reject(collection, function(value, index, collection) { //iterate over collection and return element(s) where function executed on                                                                   element returned false
        if(!func) {  //if no function
            return !!value;  //return true value
        } else {
            return func(value, index, collection); //return function values
        }
    }).length === 0; //sets to boolean // if length is 0, there were no false returned elements 
}

module.exports.every = every;


/* 
* some: Designed to return boolean of whether condition is true for atleast 1 function value when called on all collection values; false otherwise
*       
*
* @param  {collection}  array or object to iterate over
* @param  {function}    call for every element of collection based on data type:
*                          array: element, index, collection
*                          object: value, key, collection
*
* @return {boolean}     true if the return value of calling function for atleast 1 element is true
*                       true if function is not provided return true if at least one element is truthy, otherwise return false
*                       false if return value of calling function for all elements returns false 
*
* Usage:
*   some(["pizza", "dogs", 1, true, 3, 5], function(element, index, collection){return element === "Frank"}) // false
*   some([1, 2, 3], function(element, index, collection){return element % 2 === 0}) // true
*/

function some(collection, func) {
 return filter(collection, function(value, index, group) { //iterate over collection and return element(s) where function executed on element                                                             returned true
        if(!func) {  //if no function
            return !!value;  //return true value
        } else {
            return func(value, index, collection); //return function values
        }
    }).length > 0; //sets to boolean; if greater than 0, result is true because items are in arrays length
}

module.exports.some = some;


/* 
* reduce: Designed to execute function for each value of the array and then reduce the array to a single value
*
* @param  {array}     array to iterate over
* @param  {function}  call for every element of array: previousResult, currentValue, currentIndex
*                       previous result = return value of function for the second iteration
* @param  {seed}      = previous result for first iteration 
*                     if seed in not given, use the first value of array in its place 
*
* @return {value}     return value of the final function call after the last iteration
*
* Usage:
*   var cookies = [['sugar', 'chocolate chip'], ['big', 'small'], ['sugar free', 'loads o sugar']].reduce(function(yum, yummy) {
*   return yum.concat(yummy);}, []); // ["sugar", "chocolate chip", "big", "small", "sugar free", "loads o sugar"]
*
*   reduce([1, 2, 3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) // 6
*/

function reduce(array, func, seed) {
    var arrayToIterate = array;
    var previousResult;
    var indexModifier = 0;
    if (seed !== null && seed !== undefined) { //if seed is given, seed = previousResult
       previousResult = seed;
    } else {
       previousResult = array[0]; //else previousResult = first element in array
       arrayToIterate = array.slice(1, array.length); //slicing everything from array but the new 'seed' @ array[0]
       indexModifier = 1; //array is short 1 index if else is run, so it needs to be modified
    }
    each(arrayToIterate, function(value, index, collection) {//loop through array with each to call function once for each element with the                                                              arguments: element, index, collection
       previousResult = func(previousResult, value, index + indexModifier); //modifier = 0 for if; 1 for else
    });
    return previousResult; //final iteration
}

module.exports.reduce = reduce;


/* 
* extend: Designed to consolidate object properties into 1 single object.
*
* @param  {Object}              first object: have all properties for objects passed held here
* @param  {Object}              second object: copy properties from here into first object 
* @param  {additional objects?} account for object parameters that may not be visible (arguments)
*                               if more objects are indeed passed in, copy their properties to first object in the order they are                                 passedin.
*
* @return {first object}        object with all other objects properties copied in
*
* Examples:
*   var pizzaPals = {name:"Ica"};
*   extend(pizzaPals, {name2:"Gracie"}); // data now equals {name:"Ica", name2:"Gracie}
*   extend(pizzaPals, {name:"Yancy"}); // data now equals {name:"Yancy"}
*/

function extend(objectOne, objectTwo) {
    // Use the arguments variable that is passed to all JavaScript functions.
    // The arguments is an array-like (not exactly an array) structure that contains
    // all arguments passed to the function, not just the named parameters.
    // Use Array.prototype.slice to turn it into a real array.
    var args = Array.prototype.slice.call(arguments);
    return reduce(args, function(previousSum, currentValue, currentIndex) { //reduce args (objects) to single value
        return Object.assign(previousSum, currentValue);  //return consolidated object using (target, source)// values passed in may replace                                                                                                    original values if duplicates present
    });
}

module.exports.extend = extend;