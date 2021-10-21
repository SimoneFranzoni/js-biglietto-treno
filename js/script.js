const km = parseInt(prompt("iserire il numero di chilometri"));
const age = parseInt(prompt("iserire l'età del passeggero"));

var price = km * 0.21;

let discount = 0;

if(age < 18){
    discount = 20;
}

if(age >= 65){
    discount = 40;
}

price = (price / 100) * (100 - discount) ;

const textToPrint = ` ${price} `;

document.getElementById('price').innerHTML = textToPrint;