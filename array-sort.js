const bigNumbers = [8,3,4,1,7,4,5,2];
// const numberSort = bigNumbers.sort();
// const reverseSort = bigNumbers.sort().reverse();
// console.log(reverseSort);

const nayoks = ['razzak','omorsani', 'sakib','dipjol'];
// const nayokSort = nayoks.sort();
// const nayokSort = nayoks.sort().reverse();
// console.log(nayokSort);


const bigNumbers2 = [200,34,3,56,400,2,199];
const numberSort = bigNumbers2.sort(function(a,b){
    return a-b;
});
console.log(numberSort);