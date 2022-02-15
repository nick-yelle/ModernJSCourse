let re;
re = /hello/;
re = /hello/i;   // i - case insensitive metacharacter

// Metacharacter Symbols
re = /^h/i;         // ^ - must start with
re = / world$/i;   // $ - must end with
re = /^hello$/i;   // ^....$ - must start and end with
re = /h.llo/i;    // . - matches any ONE character
re = /h*llo/i;    // * - matches any character 0 or more times
re = /gre?a?y/i;   // ? - optional character
re = /gre?a?y\?/i;  // \ - escape character


// Brackets [] - Character Sets
re = /gr[ae]y/i;    // Must be an 'a' or and 'e'
re = /[GF]ray/i;    // Must be an 'F' or and 'G'
re = /[^GF]ray/i;    // Match any character except for a 'G' or an 'F'
re = /[A-Z]]ray/;    // Match any uppercase letter
re = /[a-z]]ray/;    // Match any lowercase letter
re = /[A-Za-z]]ray/;    // Match any letter
re = /[0-9]ray/;      // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;      // Must occur exactly {n} amount of times
re = /Hel{2,4}o/i;      // Must occur exactly 2-4 times
re = /Hel{2,}o/i;      // Must occur at least {m} times

// Parentheses () - Grouping
re = /([0-9]x){3}/;

// Shorthand Character Classes
re = /\w/;      // Word character - alphanumeric or _
re = /\w+/;      // + - one or more
re = /\W/;      // Non-word character
re = /\d/;     // Match any digit
re = /\d+/;     // Match any digit
re = /\D/;     // Non-digit character
re = /\s/;     // Match whitespace character
re = /\S/;     // Match non-whitespace character
re = /Hell\b/i;  // Word boundary

// Assertions
re = /x(?=y)/;    // Match x only if followed by y
re = /x(?!y)/;    // Match x only if NOT followed by y


// String to match
const str = 'x';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, exec) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);