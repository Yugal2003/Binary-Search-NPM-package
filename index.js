function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const midValue = Math.floor((left + right) / 2);
        if (arr[midValue] === target) {
            return midValue;
        } else if (arr[midValue] < target) {
            left = midValue + 1;
        } else {
            right = midValue - 1;
        }
    }

    return -1;
}

// Example
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const target = 15;

const index = binarySearch(arr, target);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}.`);
} else {
    console.log(`Target ${target} not found.`);
}

module.exports = binarySearch;
