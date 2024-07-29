function firstWord(s) {
  // Trim leading and trailing whitespace
  s = s.trim();
  
  // Initialize an empty temporary string
  let temp = "";

  for (const char of s) {
    if (char != " ") {
      temp += char;
    } else {
      // Return the first word as soon as we encounter a space
      return temp;
    }
  }

  return temp; // This return statement is for strings with no spaces at all
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));


