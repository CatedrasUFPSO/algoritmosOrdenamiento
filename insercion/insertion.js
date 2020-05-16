(() => {
  // prettier-ignore
  const data = [2,54,45,54,567,67,897,9,908,5,342,2,46,576,978,8,98,4,234,2,897,908,23,8,798,809,1,2,45,6879,98,45,4];
  console.log(`Original: ${data}`);
  insertion(data);
  console.log(`Ordenado: ${data}`);
})();

/**
 * Este es uno de los métodos más sencillos. Consta de tomar uno por uno los elementos de un arreglo
 * y recorrerlo hacia su posición con respecto a los anteriormente ordenados. Así empieza con el segundo
 * elemento y lo ordena con respecto al primero. Luego sigue con el tercero y lo coloca en su posición
 * ordenada con respecto a los dos anteriores, así sucesivamente hasta recorrer todas las posiciones del arreglo.
 */
function insertion(numbersArray) {
  for (let i = 1; i < numbersArray.length; i++) {
    let temp = numbersArray[i];
    let j = i - 1;
    while (numbersArray[j] > temp && j >= 0) {
      numbersArray[j + 1] = numbersArray[j];
      j--;
    }

    numbersArray[j + 1] = temp;
  }
}
