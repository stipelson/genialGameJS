var fichas = [
    ['rojo','rojo', 5],
    ['azul','azul', 5],
    ['verde','verde', 5],
    ['amarillo','amarillo', 5],
    ['naranja','naranja', 5],
    ['morado','morado', 5],
    ['rojo','azul', 6],
    ['rojo','verde', 6],
    ['rojo','amarillo', 6],
    ['rojo','naranja', 6],
    ['rojo','morado', 6],
    ['azul','verde', 6],
    ['azul','amarillo', 6],
    ['azul','naranja', 6],
    ['azul','morado', 6],
    ['verde','amarillo', 6],
    ['verde','naranja', 6],
    ['verde','morado', 6],
    ['amarillo','naranja', 6],
    ['amarillo','morado', 6],
    ['naranja','morado', 6],
];

var puntosJugadores = [
    ['amarillo', 0, 0],
    ['verde', 0, 0],
    ['rojo', 0, 0],
    ['morado', 0, 0],
    ['naranja', 0, 0],
    ['azul', 0, 0]
];


var fichasJUno = [];
var fichasJDos = [];
var iniciado = false;
var fichasSacadas = [];
var turno = 1;
var arrMovimientos = [];

function setPuntos() {
    puntosJugadores = [
        ['amarillo', 0, 0],
        ['verde', 0, 0],
        ['rojo', 0, 0],
        ['morado', 0, 0],
        ['naranja', 0, 0],
        ['azul', 0, 0]
    ];

    for (var index = 0; index < 6; index++) {
        document.getElementById('color-'+index+"-1").textContent = "0";
        document.getElementById('color-'+index+"-2").textContent = "0";
    }
}

function iniciarFichas() {
    for (var index = 0; index < 5; index++) {
        var random1 = Math.floor((Math.random() * 120) + 1);
        var random2 = Math.floor((Math.random() * 120) + 1);
        fichasSacadas.push(random1);
        fichasSacadas.push(random2);
        addTablaSacadas(random1);
        addTablaSacadas(random2);

        //console.log(random1 + "-" + random2);

        var element = 0;
        var bool1 = true;
        var count = 0;

        while (bool1 &&  count < fichas.length) {
            element += fichas[count][2];

            if(element >= random1){
                fichasJUno.push([fichas[count][0], fichas[count][1]]);
                bool1 = false;
            }

            count++;
        }

        element = 0;
        bool1 = true;
        count = 0;

        while (bool1 &&  count < fichas.length) {
            element += fichas[count][2];

            if(element >= random2){
                fichasJDos.push([fichas[count][0], fichas[count][1]]);
                bool1 = false;
            }

            count++;
        }

    }

    for (var index = 0; index < 5; index++) {
        var colorUno = fichasJUno[index][0];
        var colorDos = fichasJUno[index][1];
        
        cambiarFichaJ(colorUno, index, 0);
        cambiarFichaJ(colorDos, index, 1);
    }
}

function obtenerNuevaFicha(fichaN, jugador) {
    var obtenida = false;
    var element = 0;
    var count = 0;
    var bool1 = true;
    var random = 0;
    // validando que no se repita de las que ya se sacaron
    while (!obtenida) {
        random = Math.floor((Math.random() * 120) + 1);
        if(!validarSacada(random)){
            obtenida = true;
            //console.log(random);
        }
    }

    // onteniendola del array de fichas y insertandola en el array de fichas del jugador
    while (bool1 &&  count < fichas.length) {
        element += fichas[count][2];

        if(element >= random){
            
            if(jugador == 0){
                fichasJUno[fichaN] = [fichas[count][0], fichas[count][1]];
            }else{
                fichasJDos[fichaN] = [fichas[count][0], fichas[count][1]];
            }
            bool1 = false;
        }
        count++;
    }

    // coloreandola en la interfaz
    if(jugador == 0){
        var colorUno = fichasJUno[fichaN][0];
        var colorDos = fichasJUno[fichaN][1];
            
        cambiarFichaJ(colorUno, fichaN, 0);
        cambiarFichaJ(colorDos, fichaN, 1);
    }
    addTablaSacadas(random);
}

function addTablaSacadas(numero) {

    var row = document.createElement('tr');
    var col = document.createElement('td');
    col.textContent = numero;

    row.appendChild(col);
    document.getElementById('tabla-sacadas').appendChild(row);
}

function setTablaSacadas() {
    document.getElementById('tabla-sacadas').innerHTML = "";
}

function validarSacada(numero) {
    var repetida = false;

    for (var index = 0; index < fichasSacadas.length; index++) {
        if (fichasSacadas[index] == numero) {
            repetida = true;
            break;
        }
    }
    return repetida;
}

function enabledRotation() {
    document.getElementById("buttonRotate").disabled=false;
}

function juegoNuevo(params) {
    drawtable()
    fichasJUno = [];
    fichasSacadas = [];
    fichasJDos = [];
    setTablaSacadas();
    setPuntos();
    iniciarFichas();
    enabledRotation();
    iniciado = true;
    turno = 1;
    pintarTurno();
}

//console.log(fichasJUno);
//console.log(fichasJDos);
//console.log(element);