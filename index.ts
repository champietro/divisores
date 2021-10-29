/*

Implemente un método llamado cantidadDeDivisores que
reciba un número entero y devuelva la cantidad de divisores
• Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8,
16, por lo que la respuesta debería ser 5
• Re-utilice el método esMultiplo implementado para el ejercicio
anterior

*/
function cantidadDeDivisores(n1: number): number {
  let resultado: number = 0;

  for (let i: number = 1; i <= n1; i++) {}

  if (resto === 0) {
    boleana = true;
  } else {
    boleana = false;
  }
  return boleana;
}

//let n1: number = Number(prompt("Primer múltiplo"));
//let n2: number = Number(prompt("Segundo múltiplo"));
let resultado: boolean = esMultiplo(n1, n2);
if (resultado === true) {
  console.log("ES MULTIPLO");
} else {
  console.log("NO ES MULTIPLO");
}
