let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

 function AsigarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
 }

 function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto) {
        AsigarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos=== 1)? "vez": "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //el usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            AsigarTextoElemento("p","El numero secreto es menor");
        } 
    else {
            AsigarTextoElemento("p","El numero secreto es mayor");
        }
        intentos++;
        limpiarcaja();
    }
    return;

 }

 function limpiarcaja(){
    document.querySelector("#valorUsuario").value = "";
 }

 function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo){
       AsigarTextoElemento("p", "Ya se sortearon todos los numeros posibles");


    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
 }

 function condicionesIniciales(){
    AsigarTextoElemento("h1", "Juego del numero secreto!");
    AsigarTextoElemento("p", `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
 }

 function reiniciarJuego(){
    //limpiar caja
 limpiarcaja();

 condicionesIniciales();
 document.querySelector("#reiniciar").setAttribute("disabled", "true");

 }
 condicionesIniciales();
 