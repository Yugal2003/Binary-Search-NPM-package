#  Binary Search

## Description
This module provides Binary Search functions for manipulating arrays in JavaScript.

## Installation
You can install this library via npm:
```bash
npm i binary-search-npm
```

## Usage
To use the binary search function in your code, follow the example below:

## Example

```javascript
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const target = 15;

const index = binarySearch(arr, target);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}.`);
} else {
    console.log(`Target ${target} not found.`);
}

## License
This library is licensed under the [ISC License](https://opensource.org/licenses/ISC).

## Author
Created by Yugal.