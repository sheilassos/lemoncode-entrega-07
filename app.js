// EJERCICIO 1 - Validar un IBAN

//  Caso 1
const values = ["ES6600190020961234567890"];

const pattern = /^[a-z]{2}\d{22}$/i;

values.forEach(value => {
    console.log("Es válido " + value + " ? -> ", pattern.test(value));
});

//  Caso 2
const values = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];

const pattern = /^[a-z]{2}\d{2}\s?(\d{4}\s?){4}\d{4}$/i;

values.forEach(value => {
    console.log("Es válido " + value + " ? -> ", pattern.test(value));
});

//  Caso 3
const values = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];

const pattern = /^ES\d{2}\s?(\d{4}\s?){4}\d{4}$/i;
const extract = /^([a-z]{2})(\d{2})/i;

values.forEach(value => {
    console.log("Es válido " + value + " ? -> ", pattern.test(value));
    console.log("Código del país y dígito de control: " + value.match(extract));
});

// EJERCICIO 2 - Validar matrícula coche

//  Caso 1
const values = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];

const pattern = /^\d{4}(-|\s)?[A-Z]{3}$/;


values.forEach(value => {
    console.log("Es válido " + value + " ? -> ", pattern.test(value));
})

// Caso 2
const pattern = /^(\d{4})(-|\s)?([A-Z]{3})$/;

values.forEach(value => {
    console.log("Es válido " + value + " ? -> ", pattern.test(value));
    console.log("Matrícula, parte numérica y letras: " + pattern.exec(value));
});

// EJERCICIOS OPCIONALES

// EJERCICIO 1  - Extraer imágenes de un fichero HTML

//  Caso 1
const values = ['<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>'];

const pattern = /^<img\s+src="(.+)"\s?\/>$/im;

values.forEach(value => {
    console.log("Enlace directo: " + pattern.exec(value));
});

//  Caso 2
const values = ['<html> <body> <img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/> <h1>ejemplo</h1> <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/> </body> </html>'];

const pattern = /^<img\s+src="(.+)"\s?\/>$/gim;

values.forEach(value => {
    console.log("Enlace directo: " + pattern.exec(value));
});

// EJERCICIO 2 - Validar sintaxis tarjeta de crédito

// Caso 1
const values = ["5299 6400 0000 0000", "5299-6400-0000-0000", "5299640000000000"];

const pattern = /^(50|51|52|53|54|55)\d{2}(\s|-)?(\d{12}|(\d{4}(\s|-)?){3})/;

values.forEach(value => {
    console.log("Es válido " + value + " ? -> ", pattern.test(value));
});

//  Caso 2
const extract = /^(\d{4})(\s|-)?(\d{4})(\s|-)?(\d{4})(\s|-)?(\d{4})$/;

values.forEach(value => {
    console.log("Es válido " + value + " ? -> ", pattern.test(value));
    console.log("Extracción en grupo de 4 dígitos: " + value.match(extract));
});

// EJERCICIO 3 - Buscar Expresiones regulares