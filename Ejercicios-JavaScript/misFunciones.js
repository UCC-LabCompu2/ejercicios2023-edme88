/**
 * Convierte unidades entre metros, pulgadas, pies y yardas
 * @method convertirUnidades
 * @param {string} id - Id del elemento input del html
 * @param {number} valor - Contiene el valor del input que ingreso el usuario
 */
convertirUnidades = (id,valor) => {
    let met, pul, pie, yar;

    if(valor.includes(",")){
        valor = valor.replace(",", ".");
    }

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
    document.lasUnidades.unid_metro.value = Math.round(met*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pul*100)/100;
    document.lasUnidades.unid_pie.value = Number(pie).toFixed(2);
    document.lasUnidades.unid_yarda.value = Number(yar).toFixed(2);
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
    document.getElementById("totalS").innerHTML = res;
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

/**
 * Genera la URL
 * @method generarUrl
 */
let generarUrl = () => {
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades")[0].value;

    const urlCompl = `segundaWeb.html#${dist}#${uni}`;
    window.open(urlCompl);
}

/**
 * Genera la URL
 * @method generarUrl
 */
let cargarValor = () => {
    let urlCompleta = window.location.href;
    console.log(urlCompleta);
    urlCompleta = urlCompleta.split("#");

    const distancia = urlCompleta[1];
    const unidad = urlCompleta[2];
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}


let guardarLS = () => {
    let dist = document.getElementById("distancia").value;
    let uni = document.getElementsByName("unidades")[0].value;

    console.log("Guarde "+dist);
    console.log("Guarde "+uni);
    localStorage.setItem("distanciaLS", dist);
    localStorage.setItem("unidadLS", uni);
    window.open("web2.html", "_self");
}

let cargarLS = () => {
    console.log("Se cargara el Local Storage")

        let distancia = localStorage.getItem("distanciaLS");
        let unidad = localStorage.getItem("unidadLS");
        console.log("Lei " + distancia);
        console.log("Lei " + unidad);
        document.getElementById("dist").innerHTML = `${distancia} ${unidad}`;
}

let dibujarCirculoCuadrado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let xMax = canvas.width;
    let yMax = canvas.height;
    ctx.fillStyle = "#333";
    //Dibujar rectangulo
    let margen = 15;
    ctx.fillRect(0+margen, yMax-120-margen, 130, 120);

    //Dibujar Circulo
    ctx.arc(xMax/2, yMax/2, 100, 0, 2 * Math.PI);
    ctx.stroke(); //Dibujo de los bordes del circulo
    ctx.fill(); //Pinto el circulo por dentro
}

let limpiarCanvas = () => {
    let canvas = document.getElementById("myCanvas");
    canvas.width = canvas.width;
}

var bandera;
let dibujar = (event) => {
 // Las funciones de flecha no tienen su propio this o event,
 // por lo que debes pasar el objeto event como parámetro a la función para poder acceder a él.
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function (){bandera=true};
    canvas.onmouseup = function (){bandera=false};

    if(bandera){
        ctx.fillRect(posX-10, posY-121, 5, 5);
        ctx.fill;
    }
}

let cargarListeners = () => {
    document.getElementById("myCanvas").addEventListener("mousemove", function(event) {
        /*
        * Al no existir declarada ninguna variable event lo que está haciendo el navegador es acceder a windows.event.
        * El uso de esta propiedad está desaconsejado.
        * La solución más directa es declarar la variable event en la función anónima
        * */
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");

        let posX = event.clientX;
        let posY = event.clientY;
        console.log(posX, posY);

        canvas.onmousedown = function () {
            bandera = true
        };
        canvas.onmouseup = function () {
            bandera = false
        };

        if (bandera) {
            ctx.fillRect(posX - 10, posY - 121, 5, 5);
            ctx.fill;
        }
    });
}

let cargarListenersEjemplo = () => {
    document.getElementById("myCanvas").addEventListener("mousemove", dibujar);
}

let dibujarCuadriculado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchoMax = canvas.width;
    const alturaMax = canvas.height;
    const paso = 20;
    let ejeX = -24; //Calcular este numero
    let ejeY = -14; //Calcular este numero

    //Líneas Verticales
    for(let i=paso;i<anchoMax;i+=paso){
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeStyle = "#797575";
        ctx.stroke();
        ctx.font="10px Arial";
        ctx.fillStyle = "#333";
        ctx.fillText(ejeX, i, alturaMax/2);
        ctx.closePath();
        ejeX++;
    }

    //Líneas Horizontales
    for(let i=paso;i<alturaMax;i+=paso){
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "#797575";
        ctx.stroke();
        ctx.font="10px Arial";
        ctx.fillStyle = "#333";
        ctx.fillText( ejeY, anchoMax/2, i);
        ctx.closePath();
        ejeY++;
    }

    //Eje X
    ctx.beginPath();
    ctx.moveTo(0, alturaMax/2);
    ctx.lineTo(anchoMax, alturaMax/2);
    ctx.strokeStyle = "#b20707";
    ctx.stroke();
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(anchoMax/2, 0);
    ctx.lineTo(anchoMax/2, alturaMax);
    ctx.strokeStyle = "#b20707";
    ctx.stroke();
    ctx.closePath();
}

var x = 0;
var dx = 2;
let animarAuto = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
    }
    x += dx;
    console.log("La coordenada X es: "+x);
    if(x>canvas.width){
        x = 0;
    }
}

let dibujarImagen = (posX, posY) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const anchoMax = canvas.width;
    const alturaMax = canvas.height;

    canvas.width = canvas.width;

    console.log(posX, posY);
    let img = new Image();
    img.src = "images/auto.png";

    if(posX<0 || posY<0 || posX>=anchoMax || posY>=alturaMax){
        openDialog();
    }else{
        img.onload = function (){
            ctx.drawImage(img, posX, posY);
        }
    }
}

let cerrarDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.close();
}

let openDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
}