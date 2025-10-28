//problema 1
function EsPar(num){
    let numero=parseInt(num);
    if(numero%2==0){
        return true;
    }else{
        return false;
    }
}
console.log(EsPar(prompt("ingrese un numero para saber si es par"))?"es par":"no es par");
//la funcion verifica si un numero es par o no y devuelve un booleano
//problema 2
function areaRectangulo(base, altura){
    let b=parseFloat(base);
    let a=parseFloat(altura);
    return b*a;
}
let base=prompt("ingrese la base");
let altura=prompt("ingrese la altura");
console.log("el area es "+areaRectangulo(base, altura));
//la funcion calcula la area de un rectangulo

//problema 3
function esPrimo(num){
    let numero=parseInt(num);
    if(numero==1){
        return false;
    }else{
        for(let i=2;i<numero;i++){
            if(numero%i==0){
                return false;
            }
        }
        return true;
    }
    
}
console.log(esPrimo(prompt("ingrese un numero para saber si es primo"))?"es primo":"no es primo");
//la funcion verifica si un numero es primo o no y devuelve un booleano y segun a eso devuelve un mensaje

//problema 4
function esMultiplo(a, b){
    if(a%b==0){
        return true;
    }else{
        return false;
    }
}
console.log(esMultiplo(prompt("ingrese un numero que quieres saber si es multiplo de otro"),prompt("ingrese el numero que quieres saber si es multiplo de"))?"es multiplo":"no es multiplo");
//la funcion verifica si dos numeros son multiplos o no y devuelve un booleano y segun a eso devuelve un mensaje


//problema 5
function mayorDeTres(a, b, c){
    return (a>b)?a:(b>c)?b:c;
}
console.log(mayorDeTres(prompt("ingrese primer numero de 3"),prompt("ingrese segundo numero de 3"),prompt("ingrese el tercer numero"))+"es mayor de tres numeros");
//la funcion devuelve el mayor de tres numeros


//problema 6
const promediode3 =function(n1, n2, n3){
    return (n1+n2+n3)/3;
}
console.log(promediode3(prompt("ingrese los numeros que quieres calcular la promedio"),prompt("ingrese los numeros que quieres calcular la promedio"),prompt("ingrese los numeros que quieres calcular la promedio"))+"es el promedio de tres numeros");
//la funcion devuelve la promedio de tres numeros

//problema 7
const Maysculas =function(texto){
    let mayus=texto.toUpperCase();
    return mayus;
}
console.log(Maysculas(prompt("ingrese un texto que quieres convertir a mayusculas")));
//la funcion devuelve el texto en mayusculas

//problema 8
const calcularDescuento=function(precio, porcentaje){
    return precio*(100-porcentaje)/100;
}
console.log(calcularDescuento(prompt("ingrese el precio"),prompt("ingrese el porcentaje"))+"es el descuento");
//la funcion devuelve el descuento de un producto segun el precio y el porcentaje de descuento

//problema 9
const saludar=nombre=>'hola, ${nombre}';
console.log(saludar(prompt("ingrese el nombre que quieres saludar")));
//la funcion flecha devuelve un saludo segun el nombre ingresado

//problema 10
const EsPositivo=num=>num>0;
console.log(EsPositivo(prompt("ingrese un numero"))?"es positivo":"no es positivo");
//la funcion flecha devuelve un mensaje segun si el numero es positivo o no
                       
//problema 11
const aMayus=texto=>texto.toUpperCase();
const aumentar=texto=>'${texto}!';
const transformar=texto=>aumentar(aMayus(texto));
console.log(transformar(prompt("ingrese un texto que quieres convertir a mayusculas y con exclamacion")));
//la funcion flecha que usa otras dos funciones devuelve el texto en mayusculas y con exclamacion

//problema 12
function procesarTexto(texto){
    function limpiarEspacios(texto){
        for(let i=0;i<texto.lenght;i++){
            if(texto.subString(i,i+1).equals(" ")){
                texto=texto.subString(0,i)+texto.subString(i+1,texto.lenght);
            }
        }
        return texto;
    }
    function contarPalabras(texto){
        return texto.lenght;
    }
    return contarPalabras(limpiarEspacios(texto));
}
console.log(procesarTexto(prompt("ingrese un texto que quieres procesar")));
//la funcion devuelve el numero de palabras del texto ingresado sin espacios

function operacionesMatematicas(){
    const sumar=(a,b) => a+b;
    const restar=(n1,n2) => n1-n2;
    const multiplicar=(a,b) => a*b;
    const dividir=(a,b) => a/b;
}
console.log("escoger una operacion");
let operacion=prompt("ingrese la operacion que quieres realizar");
switch(operacion){
    case "sumar":
        console.log(operacionesMatematicas.sumar(prompt("ingrese el primer numero"),prompt("ingrese el segundo numero"))+"es el resultado de la suma");
        break;
    case "restar":
        console.log(operacionesMatematicas.restar(prompt("ingrese el primer numero"),prompt("ingrese el segundo numero"))+"es el resultado de la resta");
        break;
    case "multiplicar":
        console.log(operacionesMatematicas.multiplicar(prompt("ingrese el primer numero"),prompt("ingrese el segundo numero"))+"es el resultado de la multiplicacion");
        break;
    case "dividir":
        console.log(operacionesMatematicas.dividir(prompt("ingrese el primer numero"),prompt("ingrese el segundo numero"))+"es el resultado de la division");
        break;
}
//la funcion devuelve el resultado de la operacion ingresada y los numeros, las operaciones son funciones flechas dentro de la funcion operacionesMatematicas

//problema 13
function contador(){
    let contador=0;
    function imcrementar(){
        contador++;
        return contador;
    }
    function resetear(){
        contador=0;
        return contador;
    }
}


function acumulador(){
    let acumulador=0;
    return function(n){
        acumulador+=n;
        return acumulador;
    }
}

function saludando(name="amigo"){
    return 'hola, ${name}';
}

function media(...numeros){
    let total=0;
    for(let i=0;i<numeros.length;i++){
        total+=numeros[i];
    }
    return total/numeros.length;
}

function mostrarDatos(nombre, edad, ...hobbies){
    console.log(`Hola, ${nombre}! Tu edad es ${edad} y tus hobbies son ${hobbies.join(", ")}`);
}
mostrarDatos("Juan", 25, "programar", "jugar");

function ejecutarOperacion(operacion, a, b){
    switch(operacion){
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            return a/b;
    }
}

function filtrarArreglo(arreglo, callback){
    let nuevoArreglo=[];
    for(let i=0;i<arreglo.length;i++){
        if(callback(arreglo[i])){
            nuevoArreglo.push(arreglo[i]);
        }
    }
}

function descargarArchivo(url, callback){
    console.log("descargando...");
    callback();
    console.log("descarga completa");
}

function potenciaRecursiva(base, exponente){
    if(exponente===0){
        return 1;
    }else{
        return base*potenciaRecursiva(base, exponente-1);
    }
}

function secuenciaAritmetica(inicio, paso){
    let numero=inicio;
    return function(){
        numero+=paso;
        return numero;
    }
}

