//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// 1

function uppercase(str) {
  if (typeof str == "string") {
    return str.toUpperCase()
  }
}

console.log(uppercase("the quick brown fox"));

// 2
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function find_longest_word(str) {
  if (typeof str == "string") {
    const a = str.split(" ") //* into Array
    const b = a.map(x => x.length) //? .map goes to each item in the array and performs a arrow function on each of them and then returns it's results for each of them
    const c = Math.max(...b) //* 11
    const d = a.find(x => x.length === c) //? .find picks the item out of the unmodified array after .split and returns the unmnodified array item that  matches(true) the criteria it's comparison (x => x.length) gives us [ 3, 11, 8], while (c) where we got the highest number of that array from is [11]. It matches with the second and returns said item.
    return d
  }
}
console.log(find_longest_word("Web Development Tutorial"));

// 3
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
//! Same thing as bove just without split, because it's already an array

function Longest_Country_Name(country_name) {
  const a = country_name.map(x => x.length)
  const b = Math.max(...a)
  const c = country_name.find(x => x.length === b)

  return c
}

console.log(
  Longest_Country_Name(["Australia", "Germany", "United States of America"])
);
