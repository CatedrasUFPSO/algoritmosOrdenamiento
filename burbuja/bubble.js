(() => {
  // prettier-ignore
  const data = [2,54,45,54,567,67,897,9,908,5,342,2,46,576,978,8,98,4,234,2,897,908,23,8,798,809,1,2,45,6879,98,45,4];
  console.log(`Original: ${data}`);
  bubble(data);
  console.log(`Ordenado: ${data}`);
})();

/**
 * El algoritmo bubblesort, también conocido como ordenamiento burbuja, funciona de la siguiente manera:
 * Se recorre el arreglo intercambiando los elementos adyacentes que estén desordenados. Se recorre el
 * arreglo tantas veces hasta que ya no haya cambios que realizar. Prácticamente lo que hace es tomar
 * el elemento mayor y lo va corriendo de posición en posición hasta ponerlo en su lugar.
 */
function bubble(numbersArray) {
  for (let i = 0; i < numbersArray.length; i++) {
    for (let j = 0; j < numbersArray.length - 1; j++) {
      if (numbersArray[j] > numbersArray[j + 1]) {
        let aux = numbersArray[j];
        numbersArray[j] = numbersArray[j + 1];
        numbersArray[j + 1] = aux;
      }
    }
  }
}
