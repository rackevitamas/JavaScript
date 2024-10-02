/* function enter() {
    let a = document.getElementById('a').value();
    let b = document.getElementById('b').value();
    console.log(`a + b = ${a + b}`);
    console.log(`a - b = ${a - b}`);
    console.log(`a * b = ${a * b}`);
    if (b === 0) {
        throw new Error("Nullával való osztás nem megendedett!")
    }
    else{
        console.log(`a / b = ${a / b}`);
    }
} */
import input from './input.js'
function muvelet(a, b, fuggveny){
    return fuggveny(a, b);
}
/* const name = await input('Kérek egy nevet: ')
console.log(name); */
const sz1 = await input('Kérek egy számot!')
const sz2 = await input('Kérek egy számot!')
/* function add(a, b){
    return +a + +b;
}
function kivonas(a, b){
    return a - b;
}
function szorzas(a, b){
    return a * b;
}
function divide(a, b){
    if (b === 0) {
        throw new Error("Nullával való osztás nem megengedett!");
      }
      return a / b;
} */
const add = (a, b) => +a + +b;
const kivonas = (a, b) => +a - +b;
const szorzas = (a, b) => +a * +b;
const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Nullával való osztás nem megengedett!");
    }
    return a / b;
}
function fgveny(a, b, muvelet){

}
let eredmeny = muvelet(sz1, sz2, add);
console.log(eredmeny);
 eredmeny = muvelet(sz1, sz2, kivonas);
console.log(eredmeny);
 eredmeny = muvelet(sz1, sz2, szorzas);
console.log(eredmeny);
 eredmeny = muvelet(sz1, sz2, divide);
console.log(eredmeny);
/* console.log(add(sz1, sz2));
console.log(kivonas(sz1, sz2));
console.log(szorzas(sz1, sz2));
console.log(divide(sz1, sz2)); */