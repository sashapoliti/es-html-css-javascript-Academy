/*
const fn1 = function (a, b) {
    b++;
    a++;
    return a + b;
}; 

trasformarla in arrow function base
*/

const fn1 = (a, b) => {
    b++;
    a++;
    return a + b;
}



/* 
const fn2 = function (a, b) {
    return a * b;
};

trasformarla in arrow function a riga singola
*/

const fn2 = (a, b) => a * b;



/* 
const fn3 = function (a) {
    a = a * a;
    return a + a;
};

trasformarla in arrow function a parametro singolo con body
*/

const fn3 = a => {
    a = a * a;
    return a + a;
}



/* 
const fn4 = function () {
    let a = 10;
    a = a * a;
    return a + a;
};

funciont a zero parametri con body
*/

const fn4 = () => {
    let a = 10;
    a = a * a;
    return a + a;
}



/* 
const fn5 = function (a) {
    return { prop1: a };
};

arrow function con object literal
*/

const fn5 = a => ({ prop1: a });



/* risultati */

console.log(fn1(5, 10));
console.log(fn2(5, 10));
console.log(fn3(5));
console.log(fn4());
console.log(fn5(5));