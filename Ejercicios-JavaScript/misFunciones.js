/**
 * Convierte unidades entre metros, pulgadas, pies y yardas
 * @method convertirUnidades
 * @param {string} id - Id del elemento input del html
 * @param {number} valor - Contiene el valor del input que ingreso el usuario
 */
convertirUnidades = (id,valor) => {
    let met, pul, pie, yar;

    if(isNaN(valor)){
        alert("El valor ingresado es incorrecto");
        met = "";
        pul = "";
        pie = "";
        yar = "";
    }else if(id==="metro"){
        met = valor;
        pul = valor*39.3701;
        pie = valor*3.28084;
        yar = valor*1.09361;
    }else if(id==="pulgada"){
        //tarea
    }
    else if(id==="pie"){
        //tarea
    }else if(id==="yarda"){
        //tarea
    }
    document.lasUnidades.unid_metro.value = met;
    document.lasUnidades.unid_pulgada.value = pul;
    document.lasUnidades.unid_pie.value = pie;
    document.lasUnidades.unid_yarda.value = yar;
}

/**
 * Convierte grados a radianes o radianes a grados
 * @method convertirGR
 * @param {string} id - Id del elemento input del html
 */
//mejorar esta funcion
convertirGR = (id) => {
    let gr, rad;

    if(id=="grados"){
        gr = document.getElementById("grados").value;
        if(isNaN(gr)){
            gr = "";
        }
        document.getElementById("radianes").value = (gr*Math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        if(isNaN(rad)){
            rad = "";
        }
        document.getElementById("grados").value = (rad*180)/Math.PI
    }

}

/**
 * Muestra u oculta un div en la parte inferior
 * @method mostrar_ocultar
 * @param {string} id - Id del elemento input radio del html
 */
let mostrar_ocultar = (id) => {
    if(id==="mostrarDiv"){
        document.getElementsByName("unDiv")[0].style.display = 'block';
    }else{
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }
}

/**
 * Suma 2 inputs introducidos por el usuario
 * @method sumar
 */
let sumar = () => {
    //Agregar verificación de Letras para no obtener resultado NaN
    let res, s1, s2;
    s1 = +document.operacionesMat.sum_num1.value;
    s2 = +document.operacionesMat.sum_num2.value;
    res =  s1 + s2;
    document.operacionesMat.sum_total.value = res;
}

/**
 * Si el campo contiene una letra, blanquea el campo
 * @method verLetra
 * @param {string} id - Id del elemento input del html
 * @param {number/string} value - Contiene el valor del input que ingreso el usuario
 */
let verLetra = (id, value) => {
    if(isNaN(value)){
        document.getElementById(id).value = "";
    }
}