// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
// function reverse(str) {
//    // const arr = str.split('');
//    // arr.reverse();
//    // return arr.join('');

//     return str.split('').reverse().join('');
// }

// // Solution 2
// function reverse(str) {
//   let reversed = "";
//
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// Solution 3
function reverse(str) {
    return str.split("").reduce((rev,char)=>{
        return char + rev;
    },'')

// 1. `str.split("")`
//     - This takes your string and breaks it into individual letters
//     - Example: "hello" becomes `["h", "e", "l", "l", "o"]`
//
// 2. `.reduce((rev, char) => {...}, '')`
//     This is like a special loop that builds something new by going through each letter:
//         - = the reversed string we're building (starts as empty `''`) `rev`
//     - = the current letter we're looking at `char`
//     - We start with an empty string `''`
//
// 3. `return char + rev`
//     - For each letter, we put it **in front of** what we've built so far
//     - It's like stacking letters backwards!

    // 1. Start: `rev = ""`, `char = "h"` → return `"h" + "" = "h"`
    // 2. Next: `rev = "h"`, `char = "e"` → return `"e" + "h" = "eh"`
    // 3. Next: `rev = "eh"`, `char = "l"` → return `"l" + "eh" = "leh"`
    // 4. Next: `rev = "leh"`, `char = "l"` → return `"l" + "leh" = "lleh"`
    // 5. Final: `rev = "lleh"`, `char = "o"` → return `"o" + "lleh" = "olleh"`


}

module.exports = reverse;
