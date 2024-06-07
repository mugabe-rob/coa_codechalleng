function transformString(input) {
    const length = input.length;
    
    // Helper function to reverse a string
    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    
    // Helper function to convert a string to ASCII codes
    function toAsciiCodes(str) {
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    if (length % 15 === 0) {
        // If divisible by 15, reverse the string and then convert to ASCII codes
        return toAsciiCodes(reverseString(input));
    } else if (length % 3 === 0) {
        // If divisible by 3, reverse the string
        return reverseString(input);
    } else if (length % 5 === 0) {
        // If divisible by 5, convert to ASCII codes
        return toAsciiCodes(input);
    } else {
        // If not divisible by 3, 5, or 15, return the original string
        return input;
    }
}

// Test cases
console.log(transformString("Hamburger")); // "regrubmaH"
console.log(transformString("Pizza")); // "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // "eikooC pihC etalocohC"
