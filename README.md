# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sergerodriguez/lotide`

**Require it:**

`const _ = require('@sergerodriguez/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual()`: takes in two arrays and prints an appropriate message to the console telling us if they match or not. 
* `assertEqual()`: the function compares the two values it takes in and prints out a message      telling us if they match or not.
* `assertObjectsEqual()`: take in two objects and prints an appropriate message to the console telling us if they match or not.
* `countLetters()`: returns an object where each unique character encountered is a property of the object and the value for that property/key should be the number of occurrences for that character.
* `countOnly()`: takes in a collection of items and returns counts for a specific subset of those items.
* `eqArrays()`: takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects()`: takes in two objects and returns true or false, based on a perfect match.
* `findKey()`: takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue()`: takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `flatten()`: takes in an array of arrays and returns a "flattened" version of the array.
* `head()`: returns the first item in an array.
* `letterPositions()`: returns all the indices (zero-based positions) in the string where each character is found.
* `map()`: returns a new array based on the results of the callback function.
* `middle()`: takes in an array and return the middle-most element(s) of the given array.
* `tail()`: returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `takeUntil()`:returns a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `without()`: returns a subset of a given array, removing unwanted elements.
