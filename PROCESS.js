// ------------------- Ejercicio 1 ------------------

function MyFunction1() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
  
    for (let i = 1; i <= 50; i++) {
      const row = document.createElement("tr");
  
      const numberCell = document.createElement("td");
      numberCell.textContent = i;
      row.appendChild(numberCell);
  
      const squareCell = document.createElement("td");
      squareCell.textContent = i * i;
      row.appendChild(squareCell);
  
      tableBody.appendChild(row);
    }
}
  

// ------------------- Ejercicio 2 ------------------

function MyFunction2(){
    let d= document.getElementById("P2")
    let t= "<h3>Números impares de 1 a 100: </h3>"
    d.insertAdjacentHTML("beforeBegin", t)

    for (let i = 1; i <= 100; i++) {
        let ii= i + " - "
        if (i % 2 !== 0) {
          let d= document.getElementById("P2")
          d.insertAdjacentHTML("BeforeBegin", ii)
        }
      }

    let D= document.getElementById("t2")
    let text = "<h3><br>Números pares del 102 al 200: </h3>"
    D.insertAdjacentHTML("beforeBegin", text)  
    for (let i = 102; i <= 200; i++) {
        let te= i + " - "
        let D= document.getElementById("t2")
        if (i % 2 === 0) {
            D.insertAdjacentHTML("beforeBegin", te)
        }
    }
}

// ------------------- Ejercicio 3 ------------------

function MyFunction3(){
    let num = parseInt(document.getElementById("Po").value);
    let array = [];
    for (let i = num; i >= 2; i--) {
        if (i % 2 === 0) {
            array.push(i);
        }
    document.getElementById("P3").innerHTML = "Usted ingreso el número: " + num + ", los números 'PARES DESCENDIENTES' partiendo desde: " + num + ", son: ";
    document.getElementById("p3").innerHTML = array.join(" - ");
    }
}

// ------------------- Ejercicio 4 ------------------

/*function MyFunction4(){
    let n = parseInt(document.getElementById("Pa").value);
    let numeros = [];
    let numsx = [];
    let sumaPonderada = 0;
    let sumaPesos = 0;
    for (let i = 0; i < n; i++) {
        let numero = parseFloat(prompt("Ingrese el número " + (i+1) + ":"));
        let numx = parseFloat(prompt("Ingrese el 'porcentaje' para el número " + (i+1) + ":"));
        
        numeros.push(numero);
        numsx.push(numx);
        
        sumaPonderada += numero * numx;
        sumaPesos += numx;
      }
      
      let promedioPonderado = sumaPonderada / sumaPesos;
      
      document.getElementById("P4").innerHTML = "Los números ingresados son: " + numeros;
      document.getElementById("p4").innerHTML = "Los pesos ingresados son: " + numsx;
      document.getElementById("t4").innerHTML = "El promedio ponderado es: " + promedioPonderado;
}*/

function MyFunction4() {
  let n = parseInt(document.getElementById("Pa").value);
  let numeros = [];
  let numsx = [];
  let sumaPonderada = 0;
  let sumaPesos = 0;
  
  let numerosInputs = document.getElementById("numeros-inputs");
  let pesosInputs = document.getElementById("pesos-inputs");
  
  // Limpiar los inputs anteriores
  numerosInputs.innerHTML = "";
  pesosInputs.innerHTML = "";
  
  for (let i = 0; i < n; i++) {
    let numeroInput = document.createElement("input");
    numeroInput.type = "number";
    numeroInput.className = "form-control fw-light fst-italic";
    numeroInput.placeholder = "Número " + (i + 1);
    numerosInputs.appendChild(numeroInput);
    
    let pesoInput = document.createElement("input");
    pesoInput.type = "number";
    pesoInput.className = "form-control fw-light fst-italic";
    pesoInput.placeholder = "Peso para el número " + (i + 1);
    pesosInputs.appendChild(pesoInput);
  }
  
  let calcularButton = document.createElement("button");
  calcularButton.textContent = "Calcular";
  calcularButton.className = "btn btn-outline-info fw-light fst-italic";
  calcularButton.onclick = function() {
    // Limpiar los resultados anteriores
    document.getElementById("P4").innerHTML = "";
    document.getElementById("p4").innerHTML = "";
    document.getElementById("t4").innerHTML = "";
    
    numeros = [];
    numsx = [];
    sumaPonderada = 0;
    sumaPesos = 0;
    
    let numeroInputs = numerosInputs.getElementsByTagName("input");
    let pesoInputs = pesosInputs.getElementsByTagName("input");
    
    for (let i = 0; i < numeroInputs.length; i++) {
      let numero = parseFloat(numeroInputs[i].value);
      let numx = parseFloat(pesoInputs[i].value);
      
      numeros.push(numero);
      numsx.push(numx);
      
      sumaPonderada += numero * numx;
      sumaPesos += numx;
    }
    
    let promedioPonderado = sumaPonderada / sumaPesos;
    
    document.getElementById("P4").innerHTML = "Los números ingresados son: " + numeros;
    document.getElementById("p4").innerHTML = "Los pesos ingresados son: " + numsx;
    document.getElementById("t4").innerHTML = "El promedio ponderado es: " + promedioPonderado;
  };
  
  document.getElementById("inputs-container").appendChild(calcularButton);
}


// ------------------- Ejercicio 5 ------------------

function MyFunction5(){
    H = parseInt(document.getElementById("Pi").value);
    let miarray = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
    let val = false
    let array = []

    function i (dato,index, pos) {
        if (dato == H){
            val = true
            array.push("El numero ", H, " se repite en la posicion ", index, "<br>");  
        }else{
            val = val
        }
    }
    miarray.forEach(i);
    if (val == false){
        document.getElementById("P5").innerHTML = ("no esta en el arreglo. <br>");
    }
    else{
        document.getElementById("P5").innerHTML = array.join(" ")
    }
    document.getElementById("p5").innerHTML = "Los numeros son: ";
    document.getElementById("p-5").innerHTML = miarray.join(" - ");
}

// ------------------- Ejercicio 6 ------------------

function MyFunction6(){
    Ki = parseInt(document.getElementById("Pk").value);
    Ka = parseInt(document.getElementById("PL").value);
    Ko = parseInt(document.getElementById("PO").value);

    let miarray = Array.from({length: Ki}, () => Math.floor(Math.random() * (Ko - Ka) + Ka));

    document.getElementById("P6").innerHTML = "El arreglo es: ";
    document.getElementById("P-6").innerHTML = miarray.join(" - ");
}

// ------------------- Ejercicio 7 ------------------

function MyFunction7(){
    let array = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
    document.getElementById("ja").innerHTML = "Los datos del arreglo son: ";
    document.getElementById("je").innerHTML = array.sort().join(" - ");
    let Counter = 1
    let Counteralmac = []
    let almaciguales = []
    let Ver = []
     for (let i = 0; i < array.length; i++) {
        if (array[i+1] == array[i] ) {
            Counter++;
        }
        else{
            almaciguales.push(array[i]);
            Counteralmac.push(Counter);
            Counter = 1;
        }
    }
    for (let j = 0; j < almaciguales.length; j++) {
        if (Counteralmac[j] > 1) {
            Ver.push("El número: "+almaciguales[j]+", se repite: "+Counteralmac[j]+" veces.")
         
        }
    }
    console.log(Ver)
    console.log(almaciguales);
    console.log(Counteralmac);
    document.getElementById("ji").innerHTML = "A continuacion los datos que se encuentran repetidos con su cantidad de repeticiones correspondientes son: ";
    document.getElementById("jo").innerHTML = Ver.join("<br>");
}

// ------------------- Ejercicio 8 ------------------

function MyFunction8(){
    let num = parseInt(document.getElementById("UU").value)
    bin=[]
    while(num>=1){
        if((num % 2)==0){
            bin.push(0);
            num=num/2;
            console.log(num)
        }else{
            bin.push(1); 
            num=Math.floor(num/2);
            console.log(num)
        }
    }
    console.log(bin)
    document.getElementById("UA").value = (bin.reverse().join(''));
}

// ------------------- Ejercicio 9 ------------------

function MyFunction9(){
    let binary = document.getElementById("UE").value;
    let decimal = 0;
    let base = 1;
    for (let i = binary.length - 1; i >= 0; i--) {
        if (binary[i] === '1') {
            decimal += base;
        }
        base *= 2;
    }
    document.getElementById("UO").value = decimal
}

// ------------------- Ejercicio 10 ------------------

function MyFunction10(){
    let arr1 = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
    let arr2 = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
    const resulmultarray = []

    if (arr1.length !== arr2.length) {
      return null;
    }

    document.getElementById("SI").innerHTML = arr1.join(" - ");
    document.getElementById("SO").innerHTML = arr2.join(" - ");

    for (let i = 0; i < arr1.length; i++) {
      resulmultarray.push(arr1[i] * arr2[i]);
    }
   
    document.getElementById("SS").innerHTML = "Los resultados de la multiplicación son: ";
    document.getElementById("SA").innerHTML = resulmultarray.join(" - ");
}

// ------------------- Ejercicio 11 ------------------

function MyFunction11(){
    let arr3 = Array.from({length: 6}, () => Math.floor(Math.random() * 10));
    let arr4 = Array.from({length: 6}, () => Math.floor(Math.random() * 10));
    let resulmultarray = []
    let total = 0

    document.getElementById("KI").innerHTML = arr3.join(" - ");
    document.getElementById("KO").innerHTML = arr4.join(" - ");

    for (let i = 0; i < arr3.length; i++) {
      resulmultarray.push(arr3[i] * arr4[i]);
    }

    for (let k = 0; k < resulmultarray.length; k++) { 
        total += resulmultarray[k]  
    }
   
    document.getElementById("KS").innerHTML = "El producto punto de los arreglos es: ";
    document.getElementById("KE").innerHTML = total;
}

// ------------------- Ejercicio 12 ------------------

function MyFunction12(){
    let poblacionA = 25000000;
    let poblacionB = 18900000;
    const tasaA = 0.02; 
    const tasaB = 0.03; 
    let año = 2022;

    while (poblacionB < poblacionA) {
    poblacionA = poblacionA * (1 + tasaA);
    poblacionB = poblacionB * (1 + tasaB);
    año++;
    }

    document.getElementById("QW").innerHTML = (`En el año ${año} la población de B superará a la de A.`);
}

// ------------------- Ejercicio 13 ------------------

function MyFunction13(){
    let num = document.getElementById("XX").value;
    let i = 1;
    let suma = 0;
    let secuencia = "";
      
    while (suma < num) {
        let cuadrado = i * i;
        suma += cuadrado;
        secuencia += cuadrado + " ";
        i++;
    }
      
    document.getElementById("XV").innerHTML = "Secuencia: " + secuencia;
    // document.getElementById("XS").innerHTML = "Suma: " + suma;
}

// ------------------- Ejercicio 14 ------------------

function MyFunction14(){
    let a = 0;
    let b = 0;
    let resulta = "";
    let resultb = "";

    while (a < 7) {
        console.log(a, b); // RESULTADO CONSOLA.
        resulta += a + " - ";
        resultb += b + " - ";
        a++;
        b += 2;
    }
    document.getElementById("DD").innerHTML = "El segmento 'A': " + resulta;
    document.getElementById("FF").innerHTML = "El segmento 'B': " + resultb;
}

// ------------------- Ejercicio 15 ------------------

function MyFunction15(){
    let miarray = [];
    let i = 0;
    while (i < 100) {
    miarray.push(Math.floor(Math.random() * 100) + 1);
    i++;
    }

    let j = 0;
    let encontrado = false;
    while (j < miarray.length && !encontrado) {
        let num = miarray[j];
        let k = 2;
        let esPrimo = true;
        while (k < num && esPrimo) {
            if (num % k == 0) {
            esPrimo = false;
            }
            k++;
        }
    if (esPrimo) {
        document.getElementById("GG").innerHTML = "los datos del arreglo son: </br>" + miarray.join(" - ")
        console.log("El número primo encontrado es " + num + " en la posición " + j);
        document.getElementById("GI").innerHTML = "El número primo encontrado es " + num + " en la posición " + j
        encontrado = true;
    }
    j++;
    }

}

// ------------------- Ejercicio 16 ------------------

function MyFunction16(){
    let num1 = document.getElementById("PU").value;
    let num2 = document.getElementById("LO").value;
    let mcd;

    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    while (num2) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
      
    mcd = num1;

    document.getElementById("JJ").innerHTML = ("El MCD de los números: " + document.getElementById("PU").value + " y " + document.getElementById("LO").value + " es: " + `${mcd}`);
}

// ------------------- Ejercicio 17 ------------------

function MyFunction17(){
    let n = document.getElementById("LN").value;
    let a = 0;
    let b = 1;
    let z = "";
    let i = 0;

    while (i < n) {
        console.log(a);
        let c = a + b;
        z += a + " - ";
        a = b;
        b = c;
        i++;
    }
    document.getElementById("GA").innerHTML = "El resultado segun el dato ingresado es: " + z;
}

// ------------------- Ejercicio 18 ------------------

function MyFunction18() {
    let numero = parseInt(document.getElementById("ÑA").value);

    if (numero < 0) {
        console.log("Ingresaste un número negativo. La suma se detuvo.");
        document.getElementById("ÑP").innerHTML = "Ingresaste un número negativo. El proceso se detuvo.";
        return;
    }

    let suma = 0;
    let digitos = [];

    // Obtener los dígitos del número
    while (numero > 0) {
        let digito = numero % 10;
        digitos.push(digito);
        suma += digito;
        numero = Math.floor(numero / 10);
    }

    console.log("Los dígitos del número son:", digitos);
    document.getElementById("ÑO").innerHTML = "Los dígitos del número son: " + digitos;
    console.log("La suma de los dígitos es:", suma);
    document.getElementById("ÑL").innerHTML = "La suma de los digitos ingresados es: " + suma;
}

// ------------------- Ejercicio 19 ------------------

function MyFunction19(){
    // Crear un arreglo de 20 campos con números aleatorios
    let arr = [];
    let i = 0;
    while (i < 20) {
        arr[i] = Math.floor(Math.random() * 100); // Números aleatorios entre 0 y 99
        i++;
    }
    document.getElementById("QK").innerHTML = "Los datos del arreglo 'original' son: ";

    // Imprimir el arreglo original
    document.getElementById("QP").innerHTML = arr.join(" - ");
    console.log("Arreglo original:");
    console.log(arr);

    // Ordenar el arreglo mediante el método burbuja
    let n = arr.length;
    let j = 0;
    let aux = 0;
    while (j < n) {
        let k = 0;
        while (k < n - j - 1) {
            if (arr[k] > arr[k+1]) {
                aux = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = aux;
            }
            k++;
        }
        j++;
    }

    // Imprimir el arreglo ordenado
    document.getElementById("QR").innerHTML = "Arreglo ordenado: ";
    console.log("Arreglo ordenado:");
    document.getElementById("QS").innerHTML = arr.join(" - ");
    console.log(arr);

}

// ------------------- Ejercicio 20 ------------------

function MyFunction20(){
    let frase = document.getElementById("CC").value;
    let letra = document.getElementById("CU").value;

    let posicion = -1;
    let i = 0;

    while (i < frase.length) {
        if (frase[i] === letra) {
            posicion = i;
            console.log("La letra: " + document.getElementById("CU").value + " se encuentra en la posición: " + `${posicion}` + " de la frase: " + document.getElementById("CC").value);
            document.getElementById("CG").innerHTML = ("La letra: " + document.getElementById("CU").value + " se encuentra en la posición: " + `${posicion}` + " de la frase: " + document.getElementById("CC").value);
            break;
        }
        i++;
    }

    if (posicion === -1) {
        console.log("La letra: " + document.getElementById("CU").value + " no se encuentra en la frase: " + document.getElementById("CC").value);
        document.getElementById("CJ").innerHTML = ("La letra: " + document.getElementById("CU").value + " no se encuentra en la frase: " + document.getElementById("CC").value);
    }

}

// ------------------- Ejercicio 21 ------------------

function MyFunction21(){
    // Función para generar una matriz de tamaño nxn con números aleatorios entre min y max (ambos incluidos)
    function generarMatriz(n, min, max) {
        const matriz = [];
        for (let i = 0; i < n; i++) {
        matriz[i] = [];
        for (let j = 0; j < n; j++) {
            matriz[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        }
        return matriz;
    }
    
    // Función para buscar elementos pares en la diagonal principal de una matriz
    function buscarParesDiagonalPrincipal(matriz) {
        const n = matriz.length;
        const pares = [];
        for (let i = 0; i < n; i++) {
        if (matriz[i][i] % 2 === 0) {
            pares.push(matriz[i][i]);
        }
        }
        return pares;
    }
    
    // Función para encontrar el número más grande de una matriz
    function encontrarNumeroMasGrande(matriz) {
        let max = matriz[0][0];
        const n = matriz.length;
        for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matriz[i][j] > max) {
            max = matriz[i][j];
            }
        }
        }
        return max;
    }
    
    // Función para encontrar el número más pequeño de una matriz
    function encontrarNumeroMasPequeno(matriz) {
        let min = matriz[0][0];
        const n = matriz.length;
        for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matriz[i][j] < min) {
            min = matriz[i][j];
            }
        }
        }
        return min;
    }
    
    // Función para ordenar de forma ascendente una fila o columna de una matriz
    function ordenarFilaOColumna(matriz, indice, esFila) {
        const n = matriz.length;
        const filaColumna = [];
        for (let i = 0; i < n; i++) {
        filaColumna.push(esFila ? matriz[indice][i] : matriz[i][indice]);
        }
        filaColumna.sort((a, b) => a - b);
        for (let i = 0; i < n; i++) {
        if (esFila) {
            matriz[indice][i] = filaColumna[i];
        } else {
            matriz[i][indice] = filaColumna[i];
        }
        }
    }

    function obtenerTablaHTML(matriz) {
        let tablaHTML = '<table class = "table table-bordered bs-table-color: text-white text-center">';
        for (let i = 0; i < matriz.length; i++) {
            tablaHTML += "<tr>";
            for (let j = 0; j < matriz[i].length; j++) {
            tablaHTML += "<td>" + matriz[i][j] + "</td>";
            }
            tablaHTML += "</tr>";
        }
        tablaHTML += "</table>";
        return tablaHTML;
        }

    
    // Ejemplo de uso
    const matriz = generarMatriz(6, 1, 100);
    console.log("Matriz generada:");
    console.table(matriz);
    
    const paresDiagonal = buscarParesDiagonalPrincipal(matriz);
    console.log("Elementos pares en la diagonal principal:", paresDiagonal);
    
    const maximo = encontrarNumeroMasGrande(matriz);
    console.log("Número más grande de la matriz:", maximo);
    
    const minimo = encontrarNumeroMasPequeno(matriz);
    console.log("Número más pequeño de la matriz:", minimo);

    const matrizContainer = document.getElementById("matriz-container");
    matrizContainer.innerHTML = "Matriz generada: <br><br> " + obtenerTablaHTML(matriz);
    document.getElementById("ZZ").textContent = "Elementos pares en la diagonal principal: ";
    document.getElementById("ZX").textContent = paresDiagonal.join(" - ");
    document.getElementById("ZD").textContent = "Número más grande de la matriz: ";
    document.getElementById("ZA").textContent = maximo;
    document.getElementById("ZU").textContent = "Número más pequeño de la matriz: ";
    document.getElementById("ZY").textContent = minimo;

    /*// Obtener el elemento del formulario
    const input = document.createElement("input");
    input.type = "number";
    input.classList.add("form-control");
    input.placeholder = "Ingrese el número de fila o columna";
    document.body.appendChild(input);

    // Obtener el botón del formulario
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("btn", "btn-primary");
    button.textContent = "Ordenar";
    document.body.appendChild(button);

    // Añadir el evento click al botón
    button.addEventListener("click", function () {
    const opcion = parseInt(input.value);
    if (!isNaN(opcion) && opcion >= 0 && opcion < 6) {
        ordenarFilaOColumna(matriz, opcion, true); // Ordenar fila (esFila = true)
        console.log("Matriz ordenada por fila:");
        console.table(matriz);
    } else {
        console.log("Opción inválida. Ingrese un número de fila válido.");
    }
    });*/
}
  

// ------------------- Ejercicio 22 ------------------


function getMatrixFromTable(tableId) {
    const table = document.getElementById(tableId);
    const matrix = [];
  
    for (let i = 0; i < 3; i++) {
      const row = [];
      const rowInputs = table.rows[i].querySelectorAll('input');
  
      for (let j = 0; j < 3; j++) {
        const num = parseInt(rowInputs[j].value);
  
        if (!isNaN(num)) {
          row.push(num);
        }
      }
  
      matrix.push(row);
    }
  
    return matrix;
  }
  
  function MyFunction22() {
    const matrix1 = getMatrixFromTable('matrixTable1');
    const matrix2 = getMatrixFromTable('matrixTable2');
  
    let areEqual = true;
  
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (matrix1[i][j] !== matrix2[i][j]) {
          areEqual = false;
          break;
        }
      }
      
      if (!areEqual) {
        break;
      }
    }

    if (areEqual) {
    document.getElementById('result').textContent = 'Las matrices son iguales.';
    } else {
    document.getElementById('result').textContent = 'Las matrices no son iguales.';
    }
}        
  

// ------------------- Ejercicio 23 ------------------

function MyFunction23(){
    // Obtener los inputs de la tabla
    let inputs = document.querySelectorAll("table input");

    // Convertir inputs a matriz 4x4
    let matrix = [];
    for (let i = 0; i < 4; i++) {
    matrix[i] = [];
    for (let j = 0; j < 4; j++) {
        matrix[i][j] = Number(inputs[i*4+j].value);
    }
    }

    // Comprobar si la matriz es mágica
    let magicNumber = null;
    let isMagic = true;
    // Calcular suma de la primera fila para usar como referencia
    let referenceSum = matrix[0].reduce((acc, curr) => acc + curr, 0);
    // Comprobar filas
    for (let i = 0; i < 4; i++) {
    let rowSum = matrix[i].reduce((acc, curr) => acc + curr, 0);
    if (rowSum !== referenceSum) {
        isMagic = false;
        break;
    }
    }
    // Comprobar columnas
    for (let i = 0; i < 4; i++) {
    let colSum = 0;
    for (let j = 0; j < 4; j++) {
        colSum += matrix[j][i];
    }
    if (colSum !== referenceSum) {
        isMagic = false;
        break;
    }
    }
    // Comprobar diagonales
    let diag1Sum = matrix[0][0] + matrix[1][1] + matrix[2][2] + matrix[3][3];
    let diag2Sum = matrix[0][3] + matrix[1][2] + matrix[2][1] + matrix[3][0];
    if (diag1Sum !== referenceSum || diag2Sum !== referenceSum) {
    isMagic = false;
    }
    if (isMagic) {
    magicNumber = referenceSum;
    console.log("La matriz es mágica con número mágico " + magicNumber + ".");
    document.getElementById("EE").innerHTML = "La matriz es mágica con número mágico " + magicNumber + ".";
    } else {
    console.log("La matriz no es mágica.");
    document.getElementById("EM").innerHTML = "La matriz no es mágica.";
    }
    
}

// ------------------- Ejercicio 24 ------------------

function MyFunction24() {
    function esMatrizIdentidad(matriz) {
      const filas = matriz.length;
      const columnas = matriz[0].length;
  
      // Verificar si la matriz es cuadrada
      if (filas !== columnas) {
        return false;
      }
  
      // Verificar elementos de la diagonal principal
      for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
          if (i === j && matriz[i][j] !== 1) {
            return false;
          }
          if (i !== j && matriz[i][j] !== 0) {
            return false;
          }
        }
      }
  
      // La matriz cumple todas las condiciones de una matriz identidad
      return true;
    }
  
    // Dos matrices
    const matriz1 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    const matriz2 = [[1, 0, 0], [0, 2, 0], [0, 0, 1]];

    console.log("Matriz 1:");
    console.table(matriz1);
    console.log("¿Es una matriz identidad?: " + esMatrizIdentidad(matriz1));
    console.log("Matriz 2:");
    console.table(matriz2);
    console.log("¿Es una matriz identidad?: " + esMatrizIdentidad(matriz2));
  
    const outputContainer = document.getElementById("output-container");
    outputContainer.innerHTML = "";
  
    mostrarMatrizEnTabla(matriz1, "Matriz 1:", outputContainer);
    mostrarMensajeIdentidad(matriz1, outputContainer);
  
    mostrarMatrizEnTabla(matriz2, "Matriz 2:", outputContainer);
    mostrarMensajeIdentidad(matriz2, outputContainer);
  
  function mostrarMatrizEnTabla(matriz, titulo, contenedor) {
    const tabla = document.createElement("table");
    tabla.className = "table table-bordered bs-table-color: text-white text-center";
  
    for (let i = 0; i < matriz.length; i++) {
      const fila = document.createElement("tr");
      for (let j = 0; j < matriz[i].length; j++) {
        const celda = document.createElement("td");
        celda.textContent = matriz[i][j];
        fila.appendChild(celda);
      }
      tabla.appendChild(fila);
    }
  
    const tituloElement = document.createElement("p");
    tituloElement.textContent = titulo;
  
    contenedor.appendChild(tituloElement);
    contenedor.appendChild(tabla);
  }
  
  function mostrarMensajeIdentidad(matriz, contenedor) {
    const esIdentidad = esMatrizIdentidad(matriz);
    const mensaje = document.createElement("p");
    mensaje.textContent = "¿Es una matriz identidad?: " + (esIdentidad ? "Sí" : "No");
  
    contenedor.appendChild(mensaje);
  }
}
  

// ------------------- Ejercicio 25 ------------------

/*function mostrarTabla() {
    // Obtener la sección donde se mostrará la tabla
    const tabla = document.querySelector("#tabla");
  
    // Crear la tabla
    const tablaHTML = document.createElement("table");
  
    // Agregar las filas y celdas a la tabla
    for (let i = 0; i < resultado.length; i++) {
      const fila = document.createElement("tr");
      for (let j = 0; j < resultado[i].length; j++) {
        const celda = document.createElement("td");
        const textoCelda = document.createTextNode(resultado[i][j]);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
      }
      tablaHTML.appendChild(fila);
    }
  
    // Agregar la tabla a la sección en el HTML
    tabla.appendChild(tablaHTML);
  }
  
  // Llamar la función para mostrar la tabla
  mostrarTabla();*/

function MyFunction25(){
    // Generar dos matrices 2x2 con números aleatorios
    const matriz1 = [];
    const matriz2 = [];
    for (let i = 0; i < 2; i++) {
        matriz1[i] = [];
        matriz2[i] = [];
        for (let j = 0; j < 2; j++) {
            matriz1[i][j] = Math.floor(Math.random() * 10);
            matriz2[i][j] = Math.floor(Math.random() * 10);
        }
    }

    // Multiplicar las dos matrices
    const resultado = [];
    for (let i = 0; i < 2; i++) {
        resultado[i] = [];
        for (let j = 0; j < 2; j++) {
            resultado[i][j] = 0;
            for (let k = 0; k < 2; k++) {
                resultado[i][j] += matriz1[i][k] * matriz2[k][j];
            }
        }
    } 

    // Agregar los valores de las matrices y el resultado a la tabla HTML
    console.log("Matriz 1:");
    console.table(matriz1);
    console.log("Matriz 2:");
    console.table(matriz2);
    console.log("Resultado:");
    console.table(resultado);
    tabla = document.getElementById("matrices");
    const tdMatriz1 = document.getElementById("matriz1");
    const tdMatriz2 = document.getElementById("matriz2");
    const tdResultado = document.getElementById("resultado");

    tdMatriz1.innerHTML = `<table class="table table-bordered bs-table-color: text-white"><tbody>${matriz1.map((row) => `<tr>${row.map((col) => `<td class="border-width: 0;">${col}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
    tdMatriz2.innerHTML = `<table class="table table-bordered bs-table-color: text-white"><tbody>${matriz2.map((row) => `<tr>${row.map((col) => `<td class="border-width: 0;">${col}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
    tdResultado.innerHTML = `<table class="table table-bordered bs-table-color: text-white"><tbody>${resultado.map((row) => `<tr>${row.map((col) => `<td class="border-width: 0;">${col}</td>`).join("")}</tr>`).join("")}</tbody></table>`;

}

// ---------------------------------------------------