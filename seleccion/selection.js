(() => {
  // prettier-ignore
  const data = [2,54,45,54,567,67,897,9,908,5,342,2,46,576,978,8,98,4,234,2,897,908,23,8,798,809,1,2,45,6879,98,45,4];
  console.log(`Original: ${data}`);
  selection(data);
  console.log(`Ordenado: ${data}`);
})();

/**
 * El método de ordenamiento por selección consiste en encontrar el menor de todos los elementos del arreglo
 * e intercambiarlo con el que está en la primera posición. Luego el segundo más pequeño, y así sucesivamente
 * hasta ordenar todo el arreglo.
 */
function selection(numbersArray) {
  for (let i = 0; i < numbersArray.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j <= numbersArray.length - 1; j++) {
      if (numbersArray[j] < numbersArray[idx]) {
        idx = j;
      }
    }

    if (idx != i) {
      let aux = numbersArray[idx];
      numbersArray[idx] = numbersArray[i];
      numbersArray[i] = aux;
    }
  }
}
