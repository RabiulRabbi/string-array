const products = [
    'products with mango',
    'xiaomi mobile phone',
    'LG butterfly freeze',
    'products with laptop',
    'purple color mobile phone'
]
const search = 'phone';
const output = [];

for(const product of products){
    if(product.toLowerCase().indexOf(search.toLowerCase()) != -1){
        // output.push(product);
    }
}
// console.log(output);

for(const product of products){
    if(product.toLowerCase().includes(search.toLowerCase())){
        // output.push(product);
    }
}
// console.log(output);

for(const product of products){
    if(product.toLowerCase().startsWith(search.toLowerCase())){
        // output.push(product);
    }
}
// console.log(output);
for(const product of products){
    if(product.toLowerCase().endsWith(search.toLowerCase())){
        output.push(product);
    }
}
console.log(output);