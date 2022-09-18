// var name = "Gerardo";
// var lastName = "Ruiz";

// function realName(name, lastName) {
// return name + " " + lastName;
// };

// alert (realName());

var kome = "gerry"
var lastName = " Ruiz";

var deuda = -4890;
var ahorro = 30345;


var miFunc = function(a, b) { return  a + b ; }
alert(`el es ${miFunc(kome, lastName)} este señor es bien trabajador y ha podido ahorrar ${ahorro}
 pero tambien gasta y debe $${- deuda} asi que realmente de patrimonio le queda $${miFunc(ahorro, deuda)}`);


// TIPOS DE SUBSCRIPCION

 const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

const sub = "Basic";

if (sub === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}
else if (sub === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if (sub === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if (sub === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
else  {
    console.log("Digita una opcion válida");
}


// const tiposDesubscripciones = {
//     free: 'Solo puedes tomar los cursos gratis',
//     basic: 'Puedes tomar casi todos los cursos de platzi durante un año',
//     expert: 'Puedes tomar casi todos los cursos de platzi durante un año',
//     expertduo: 'Tu y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
// };

// function conseguirTipoSuscripcion(suscripcion) {
//     if (tiposDesubscripciones[suscripcion]) {
//         console.log (tiposDesubscripciones[suscripcion])
//     }
//     console.warn('Ese tipo de suscripción no existe')
// }




// Ciclos


// for

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
 


// while


let i = 0;
while ( i < 5 ) { i++;
    console.log("El valor de i es: " + i);
}

let x = 10;
while ( x >= 2) { x--;
    console.log("El valor de i es: " + x);
}



// cuanto es 2 + 2


quizz ();

function quizz () {

var respuesta = prompt('¿Cuanto es 2 + 2?');

if (respuesta == 4) {
    alert("¡eso mi champ, está correctisimo!");
}
else if (respuesta > 4) {
    alert("mas abajo");
    quizz ();
}
else if (respuesta < 4) {
    alert("mas arriba");
    quizz ();
}
};

