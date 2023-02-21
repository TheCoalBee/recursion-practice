// mergeSort() breaks down array to several single-element arrays and sorts each element against itself until a fully-sorted array is returned.
function mergeSort(array) {
    if (array.length <= 1) return array; // Base case

    let middle = Math.floor(array.length/2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);

    return merge(
        mergeSort(left), mergeSort(right) // Split array in two, sort each and merge results together
    );
}


function merge(left, right) {
    let sorted = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sorted.push(left[leftIndex]);
            leftIndex++;
        } else {
            sorted.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return sorted.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const myArray = [10,9,8,7,6,5,4,3,2,2,2,2,2,1];

console.log(mergeSort(myArray));