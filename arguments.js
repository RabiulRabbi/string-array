// function addNumbers(numbers){
//     // const result = num1 + num2;
//     let result = 0;
//     for(const num of arguments){
//         result = result + num;
//     }
//     return result;
// }
// const result = addNumbers(4,67,7,50,34);
// console.log(result);

function fullName(firstName, lastName){
    let result = '';
    for(const name of arguments){
        result = result + name + ' ';
    }
    return result;
}
const result = fullName('rabiul','islam','rabbi');
console.log(result);