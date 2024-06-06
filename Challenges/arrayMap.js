// Function to check if there is a subarray with a given sum
function containsSubarrayWithSum(array, targetSum) {
    // Initialize the start index of the current subarray
    let leftIndex = 0;
    // Initialize the sum of the current subarray
    let subarraySum = 0;

    // Loop through each element in the array with 'rightIndex' as the end index of the current subarray
    for (let rightIndex = 0; rightIndex < array.length; rightIndex++) {
        // Add the current element to the subarray sum
        subarraySum += array[rightIndex];

        // If the subarray sum exceeds the target sum, move the start index to the right
        while (subarraySum > targetSum && leftIndex <= rightIndex) {
            // Subtract the element at the start index from the subarray sum
            subarraySum -= array[leftIndex];
            // Move the start index to the right
            leftIndex++;
        }

        // If the subarray sum equals the target sum, return true
        if (subarraySum === targetSum) {
            return true;
        }
    }

    // If no subarray with the target sum is found, return false
    return false;
}

// Example usage:
const numbers = [4, 2, 7, 1, 9, 5]; // Array to search
const target = 17; // Target sum to find
console.log(containsSubarrayWithSum(numbers, target));  // Output: true
