function EsPar(num){
    let numero=parseInt(num);
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}
function areaRectangulo(base, altura){
    let b=parseFloat(base);
    let a=parseFloat(altura);
    return b*a;
}
function esMultiplo(a, b){
    if(a%b==0){
        return true;
    }else{
        return false;
    }
}
function mayorDeTres(a, b, c){
    return (a>b)?a:(b>c)?b:c;
}
const promediode3 =function(n1, n2, n3){
    return (n1+n2+n3)/3;
}
const Maysculas =function(texto){
    let mayus=texto.toUpperCase();
    return mayus;
}
const calcularDescuento=function(precio, porcentaje){
    return precio*(100-porcentaje)/100;
}
const saludar=nombre=>'hola, ${nombre}';

const EsPositivo=num=>num>0;



const aMayus=texto=>texto.toUpperCase();
const aumentar=texto=>'${texto}!';
const transformar=texto=>aumentar(aMayus(texto));
console.log(transformar("hola"));

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

function operacionesMatematicas(){
    const sumar=(a,b) => a+b;
    const restar=(a,b) => a-b;
    const multiplicar=(a,b) => a*b;
    const dividir=(a,b) => a/b;
}