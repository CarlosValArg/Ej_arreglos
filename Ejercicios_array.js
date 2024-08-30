/** Ejercicio
 * 
 * Desarrolla una función que, imprima todos los numeros del 0 al 100 y compare 
 * que numeros son divisibles entre 4 o 9
 * 
 * Consideraciones
 * Asignarle un nombre significativo a la función declarada
 * Si el numero es divisible entre 4, imprimir un mensaje alusivo a costado del numero
 * Mismo caso para todos los numeros divisibles entre 9
 */
function fourNineDivisible(){
    for(let x=0; x <=100; x++){
        if(x%4 == 0 && x%9 == 0){
            console.log(x + " cumple ambas condiciones");
        }else{
            if(x%4 == 0){
                console.log(x + " Se puede dividir solo entre 4");
        }else if(x%9 == 0){
            console.log(x + " Se puede dividir solo entre 9");
        }else{
            console.log(x + " No cumple ninguna condición")
        }
        }
    }
}
fourNineDivisible();
/** Ejercicio
 * 
 * Declara una variable y asignale como valor un arreglo vacio
 * Elabora una iteracion que ayude a llenar el arreglo con los numeros del 1 al 10
 * Al final, e debera obtener un arreglo con los numeros ordenados de manera descendente
(10 - 1)
 * 
 * Consideraciones
 * Asigna un nombre significativo a la variable
 * Utiliza el metodo para arreglos adecuado para cumplir con el objetivo del ejercicio
*/
let tenToOne= [];
for(let oneToTen=10;oneToTen >= 1; oneToTen--){
    tenToOne.push(oneToTen);
}
console.log(tenToOne)
/**Crea un bucle que sume los numeros del 1 al 100
resultado final 5050*/
function consecuentialAdittion(){
let addition=0
let y=1
do{
    addition += y;
    y++
} while (y <=100);
console.log(addition);
}
consecuentialAdittion()

