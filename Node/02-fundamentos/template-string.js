const nombre = "Deadpool";
const real = "Wade Winston";

const normal = nombre + ' ' +real;
//const template = ` Jos Santamaria`;//sirve para strings tambien
const template = `${nombre} ${real}`;


console.log(normal);
console.log(template);
//console.log( normal === template);

//Template: tambien toma los saltos de linea literales
const html = `
<h1>Hola</h1>
<p>Mundo</p>`;

console.log(html);