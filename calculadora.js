var comida1 = 2800;
var comida2 = 1300;
var bebida1 = 900;
var bebida2 = 650;

var comidaTotal = comida1 + comida2;
var bebidaTotal = bebida1 + bebida2;
var totalCena = comidaTotal + bebidaTotal;

// Desglose comidas
document.getElementById("precioComida1").textContent = `Comida 1: $${comida1}`;
document.getElementById("precioComida2").textContent = `Comida 2: $${comida2}`;
document.getElementById("totalComida").textContent = `Total comidas: $${comidaTotal}`;
console.log(`Total comidas: $${comidaTotal}`);

// Desglose bebidas
document.getElementById("precioBebida1").textContent = `Bebida 1: $${bebida1}`;
document.getElementById("precioBebida2").textContent = `Bebida 2: $${bebida2}`;
document.getElementById("totalBebidas").textContent = `Total bebidas: $${bebidaTotal}`;
console.log(`Total bebidas: $${bebidaTotal}`);

// Total general
document.getElementById("totalCena").textContent = `El total que debe pagar el cliente es de: $${totalCena}`;
console.log(`El total que debe pagar el cliente es de: $${totalCena}`);