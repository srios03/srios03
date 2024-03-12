function saludo(){
    console.log("Hola mundo cruel");
}
saludo();
function suma(a,b){
    console.log(a+b);
    return a+b;
}
suma (30, 20);

const personas=[{nombre:"Juan",edad:20,pais: "Colombia"},
{nombre:"Ana", edad:25, pais: "Chile"},
{nombre:"David", edad:32, pais: "Ecuador"}];

module.exports;{saludar:saludo; sumar:suma, personas;};

module.exports.personas = personas;
module.exports.saludar = saludo;
module.exports.sumar = suma;