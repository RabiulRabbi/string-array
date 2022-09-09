//split
const anthem = 'Amer sonar bangla ami tomai valobashi';
const stringSplit = anthem.split(' ');
const stringSplit = anthem.split('a');
console.log(stringSplit);

//slice
const stringSlice = anthem.slice(5,12);
console.log(stringSlice);

//substr
const stringSubstr = anthem.substr(5,12);
console.log(stringSubstr);

//substring
const substring = anthem.substring(5,10);
console.log(substring);

//concatenation
const word1 = 'amader';
const word2 = 'Bangladesh';
const concat = word1 + word2;
const concat = word1.concat(word2);
console.log(concat);

//join
const words = ['a','b','c'];
const stringJoin = words.join('');
const stringJoin = words.join(' ');
const stringJoin = words.join(',');
console.log(stringJoin);