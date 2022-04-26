//  https://www.hackerrank.com/challenges/one-month-preparation-kit-pangrams/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

// A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

// Example


// The string contains all letters in the English alphabet, so return pangram.

// Function Description

// Complete the function pangrams in the editor below. It should return the string pangram if the input string is a pangram. Otherwise, it should return not pangram.

// pangrams has the following parameter(s):

// string s: a string to test
// Returns

// string: either pangram or not pangram
// Input Format

// A single line with string .

// Constraints


// Each character of , 

// Sample Input

// Sample Input 0

// We promptly judged antique ivory buckles for the next prize

// Sample Output 0

// pangram

// Sample Explanation 0

// All of the letters of the alphabet are present in the string.

// Sample Input 1

// We promptly judged antique ivory buckles for the prize

// Sample Output 1

// not pangram

// Sample Explanation 0

// The string lacks an x. 




function pangrams(s) {
    // Write your code here
    s = s.toLowerCase() 
    s = s.replace(/[^A-Za-z]/g, "") // remove all the character apart from a-z
    s = s.replace(/(.)(?=.*\1)/g, "") //remove all the duplicates
    console.log(s);
    return s.length == 26 ? "pangram":"not pangram"
}

pangrams("We promptly judged antique ivory buckles for the next pri232@3$$$$$$$$ze")