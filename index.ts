/*

Implemente un método llamado cantidadDeDivisores que
reciba un número entero y devuelva la cantidad de divisores
• Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8,
16, por lo que la respuesta debería ser 5
• Re-utilice el método esMultiplo implementado para el ejercicio
anterior

*/

let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  // let b: number = Number(base.value);
  //  let e: number = Number(exponente.value);
  let b = prompt("Base");
  let e = prompt("Potencia");

  function calcularPotencia(b, e) {
    let resultado: number = b;

    for (let i = 1; i < e; i++) {
      resultado = resultado * b;
    }
    //if (e = 0) {
    if (e === 0) {
      resultado = 1;
    }
    console.log(resultado);
  }

  while (e < 0) {
    b = prompt("Base");
    e = prompt("Potencia");
  }
  calcularPotencia(b, e);
});
