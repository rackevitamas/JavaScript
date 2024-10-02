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
const sz1 = await input('Kérek egy számot: ');
const sz2 = await input('Kérek egy számot: ');
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
const kisebb = (a, b) => {
    if (a > b) {
        return b;
    }
    return a;
};
const nagyobb = (a, b) => {
    if (a > b) {
        return a;
    }
    return b;
}
const negyzet_e = (a, b) =>  {
    if (a == b) {
        return "Négyzet!";
    }
    return "Téglalap!";
}
const kerulet = (a, b) => {
    if (negyzet_e == "Négyzet!") {
        return 4 * +a;
    }
    return 2 * (+a + +b);
}
const terulet = (a, b) => {
    if (negyzet_e == "Négyzet!") {
        return +a * +b;
    }
    return +a * +b;
}



let eredmeny = muvelet(sz1, sz2, add);
console.log(eredmeny);
 eredmeny = muvelet(sz1, sz2, kivonas);
console.log(eredmeny);
 eredmeny = muvelet(sz1, sz2, szorzas);
console.log(eredmeny);
 eredmeny = muvelet(sz1, sz2, divide);
console.log(eredmeny);
 eredmeny = muvelet(sz1, sz2, kisebb);
console.log(eredmeny);
 eredmeny = muvelet(sz1, sz2, nagyobb);
console.log(eredmeny);
 eredmeny = muvelet(sz1, sz2, negyzet_e);
console.log(eredmeny);
 eredmeny = muvelet(sz1, sz2, kerulet);
console.log(eredmeny);
 eredmeny = muvelet(sz1, sz2, terulet);
console.log(eredmeny);

const s1 = await input('Kérek egy számot: ');
const s2 = await input('Kérek egy számot: ');
const s3 = await input('Kérek egy számot: ');

function haromszog_e() {
    if (s1 + s2 > s3 && s1 + s3 > s2 && s2 + s3 > s1) {
        return "Háromszög!";
    }
    return "Nem háromszög!";
}
console.log(haromszog_e());

/* console.log(add(sz1, sz2));
console.log(kivonas(sz1, sz2));
console.log(szorzas(sz1, sz2));
console.log(divide(sz1, sz2)); */