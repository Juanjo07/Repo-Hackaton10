// EJERCICIO 1

let nombre = "Juanjo"
let apellido = "Zarate"
let edad = 32

       
e1 = () => console.log('Hola mi nombre es', nombre, apellido, "y mi edad es", edad)
e1()


// EJERCICIO 2

function sumaOfCubes(a,b,c){
    return a**3+b**3+c**3
    
}
console.log(sumaOfCubes(1,5,9))

// EJERCICIO 3

function valor(a,b){
    return valor
}
console.log(valor)

// EJERCICIO 4

function sum(...rest) {
    return rest.reduce((a, b) => {
      return a + b;
    });
  }
  
  console.log(sum(5, 10, 15));

// EJERCICIO 5

let fil = ['casa', 5, 7];

function m(num) {
  return num >= 0;
}

console.log(fil.filter(m));

// EJERCICIO 6

/*
let num = [0,1,2,3,4,5,7,8,9]
      
function matriz() {
    a = Math.min(...num)
    b = Math.max(...num)
    console.log(a,b)
}
matriz()*/

// EJERCICIO 7

const numbers = [1,2,3,4,5,6,7,8,9,0];
num = numbers.join('')
let a = num.slice(0, 3);
let b = num.slice(3,6);
let c = num.slice(6,10);
console.log("("+a+") "+b+"-"+c)

// EJERCICIO 8

function e8([a,b,c]) {
    num1 = Math.max(...a)
    num2 = Math.max(...b)  
    num3 = Math.max(...c)
    console.log([num1, num2, num3])
  }
  
  e8([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])

// EJERCICIO 9

function e9 (cadena, letter){
    return console.log(cadena.indexOf(letter)+","+cadena.lastIndexOf(letter));
}

e9("hello","l");

// EJERCICIO 10

function toArray(datos) {
    lista = Object.entries(datos)
    return lista
}

let x = { a: 1, b: 2 }
console.log(toArray(x))

// EJERCICIO 11

function sumofbudget(array){
    let sum = 0;
    for (i = 0; i<array.length; i++){
        sum = sum + array[i].budget;
    }
    return 'La suma de los presupuesto es: '+sum;
}

function main(){
    let getBudgets = [
                        { name: "John", age: 21, budget: 23000 },
                        { name: "Steve", age: 32, budget: 40000 },
                        { name: "Martin", age: 16, budget: 2700 }
                    ];
    return console.log(sumofbudget(getBudgets));
}

main();

// EJERCICIO 12

let StudentNames = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
    ];

function getnames(array){
let students = [];
array.forEach(element => students.push(element.name));
return console.log(students);
}

getnames(StudentNames);

// EJERCICIO 13

function toArray(object){
    return Object.entries(object);
}

function main(){
    let objeto = {
                        likes: 2,
                        dislikes: 3,
                        followers: 10
                };
    return console.log(toArray(objeto));
}

main();

// EJERCICIO 14

function e14_squaresSum(num){
    let sum = 0, i = 1;
    do {
        sum = sum + Math.pow(i, 2);
        i = i + 1;
        } while (i <= num);

    return console.log(sum);
}

e14_squaresSum(3);

// EJERCICIO 15

function multiplyByLength(array){
    let prueba = [];
    array.forEach(element => prueba.push(element * array.length));
    return console.log(prueba);
}

multiplyByLength([2, 3, 1, 0]);

// EJERCICIO 16

function countdown(num){
    let prueba = [];
    for (i=num; i>=0; i--){
        prueba.push(i);

    }
    return console.log(prueba);
}

countdown(8);

// EJERCICIO 17

function e17_diffMaxMin(array){
    return Math.max(...array)-Math.min(...array);
}

console.log(e17_diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));

// EJERCICIO 18

function esnumero(elemento){
    return typeof elemento === 'number'
}

function filterList(array){
    return array.filter(esnumero);
}

console.log(filterList([1, 2, 3, 'x', 'y', 10]));

// EJERCICIO 19

function repeat(num,cant){
    let array = [];
    for (i=0; i<cant; i++){
        array.push(num);
    }
    return array;
}

console.log(repeat(13,5));

// EJERCICIO 20

function replace(string, word){
    return string.replace(/[aeiou]/ig,word);
}

console.log(replace('apples and bananas','u'));

// EJERCICIO 21

function findNemo (string){
    let array = string.split(" ");
    let index = array.indexOf('Nemo')+1;
    return 'I found Nemo at '+index+'!';

}
console.log(findNemo('I am finding Nemo !'));

// EJERCICIO 22

function capLast(string){
    let indexCapLetter = string.length-1;
    let partini = string.substr(0,indexCapLetter);
    let capletter = string.charAt(indexCapLetter).toUpperCase();
    return partini+capletter;
}

console.log(capLast('hello'));
