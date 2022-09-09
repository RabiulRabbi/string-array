const numbers = ['2','5','34','56','100','45','54'];
// const arraySliced = numbers.slice(3,12);
// console.log(arraySliced);

//splice change the parent array
const arraySplice = numbers.splice(3,2);
const arraySplice = numbers.splice(3,2, 444,555);
console.log(arraySplice);
console.log(numbers);