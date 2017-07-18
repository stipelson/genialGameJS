var rotation = -90;
var rotationNumber = 0;
var fichaEscogida = null;

// amarillo = 0, verde = 1, rojo = 2, morado = 3, naranja = 4, azul = 5

function rotarfichas() {
    rotation += 60;
    rotationNumber += 1;

    if(rotation == 270){
        rotation = -90;
        rotationNumber = 0; 
    }

    var elements = document.getElementsByClassName('fichadoble');

    for (var index = 0; index < elements.length; index++) {
        var element = elements[index];
        element.style.webkitTransform = "rotate("+ rotation +"deg)";
        element.style.MozTransform = "rotate("+ rotation +"deg)";
        element.style.msTransform = "rotate("+ rotation +"deg)";
        element.style.OTransform = "rotate("+ rotation +"deg)";
        element.style.transform = "rotate("+ rotation +"deg)";
        element.style.webkitTransform = "rotate("+ rotation +"deg)";
    }
    setRotacion();
}

function setRotacion() {
    document.getElementById('sRotacion').textContent = rotationNumber;
}

function seleccionarF(block) {
    if(iniciado){
        //console.log("ficha: "+block.id);
        var arrIdBlock2 = null;
        
        var ficha = block.parentElement;
        //console.log("ficha Nº: "+ficha.id)

        var arrIdBlock = block.id.split("-");
        var arrIdFicha = ficha.id.split("-");
        //var arrFichaHijos = ficha.chilren;
        //var fichaN = arrIdFicha[1] - 1;
        
        //console.log(arrIdBlock);
        document.getElementById('sEscogidaF').textContent = arrIdFicha[1];
        document.getElementById('sEscogidaB').textContent = fichasJUno[arrIdBlock[1]][arrIdBlock[2]];
        document.getElementById('sEscogidaFC').textContent = fichasJUno[arrIdBlock[1]][0] + "-" + fichasJUno[arrIdBlock[1]][1];

        if( arrIdBlock[2] == 0){
            arrIdBlock2 = document.getElementById("blockj-"+arrIdBlock[1]+"-"+1).id.split("-");
        }else{
            arrIdBlock2 = document.getElementById("blockj-"+arrIdBlock[1]+"-"+0).id.split("-");
        }
        fichaEscogida = arrIdBlock;
        fichaEscogida.push(arrIdBlock2[1], arrIdBlock2[2]);
        //console.log(fichaEscogida);
    }
    else{
        alert('Debe iniciar el juego primero');
    }
}

function setFichaEscogida(){
    document.getElementById('sEscogidaF').textContent = "";
    document.getElementById('sEscogidaB').textContent = "";
    document.getElementById('sEscogidaFC').textContent = "";
    fichaEscogida = null;
}

function blockOcupado(fila, columna){
    var ocupada = false;
    for (var index = 0; index < arrMovimientos.length; index++) {
        if(arrMovimientos[index][1] == fila && arrMovimientos[index][2] == columna){
            ocupada = true;
            break;
        }
    }

    return ocupada;
}

function block2Desborde(fila, columna) {
    var desborde = false;

    if(rotationNumber == 0){
        if(fichaEscogida[2] == 0 && document.getElementById('block-'+ fila +'-'+ (parseInt(columna) + 1)) == null){
            desborde = true;
        }else if(fichaEscogida[2] == 1 && document.getElementById('block-'+ fila +'-'+ (parseInt(columna) - 1)) == null){
            desborde = true;
        }
    }
    if(rotationNumber == 1){
        if(fichaEscogida[2] == 0 && document.getElementById('block-'+ (parseInt(fila) + 1) +'-'+ (parseInt(columna) + 1)) == null){
            desborde = true;
        }else if(fichaEscogida[2] == 1 && document.getElementById('block-'+ (parseInt(fila) - 1) +'-'+ (parseInt(columna) - 1)) == null){
            desborde = true;
        }
    }
    if(rotationNumber == 2){
        if(fichaEscogida[2] == 0 && document.getElementById('block-'+ (parseInt(fila) + 1) +'-'+ (parseInt(columna))) == null){
            desborde = true;
        }else if(fichaEscogida[2] == 1 && document.getElementById('block-'+ (parseInt(fila) - 1) +'-'+ (parseInt(columna))) == null){
            desborde = true;
        }
    }
    if(rotationNumber == 3){
        if(fichaEscogida[2] == 1 && document.getElementById('block-'+ fila +'-'+ (parseInt(columna) + 1)) == null){
            desborde = true;
        }else if(fichaEscogida[2] == 0 && document.getElementById('block-'+ fila +'-'+ (parseInt(columna) - 1)) == null){
            desborde = true;
        }
    }
    if(rotationNumber == 4){
        if(fichaEscogida[2] == 1 && document.getElementById('block-'+ (parseInt(fila) + 1) +'-'+ (parseInt(columna) + 1)) == null){
            desborde = true;
        }else if(fichaEscogida[2] == 0 && document.getElementById('block-'+ (parseInt(fila) - 1) +'-'+ (parseInt(columna) - 1)) == null){
            desborde = true;
        }
    }
    if(rotationNumber == 5){
        if(fichaEscogida[2] == 1 && document.getElementById('block-'+ (parseInt(fila) + 1) +'-'+ (parseInt(columna))) == null){
            desborde = true;
        }else if(fichaEscogida[2] == 0 && document.getElementById('block-'+ (parseInt(fila) - 1) +'-'+ (parseInt(columna))) == null){
            desborde = true;
        }
    }
    return desborde;
}

function block2Ocupado(fila, columna){
    var ocupada = false;

    if(rotationNumber == 0){
        if(fichaEscogida[2] == 0 && blockOcupado(fila, parseInt(columna) + 1 )){   
            ocupada = true;
        }else if(fichaEscogida[2] == 1 && blockOcupado(fila, parseInt(columna) - 1 )){
            ocupada = true;
        }
    }else if(rotationNumber == 1){
        if(fichaEscogida[2] == 0 && blockOcupado(parseInt(fila) + 1, parseInt(columna) + 1 )){   
            ocupada = true;
        }else if(fichaEscogida[2] == 1 && blockOcupado(parseInt(fila) - 1, parseInt(columna) - 1 )){
           ocupada = true;
        }
    }
    else if(rotationNumber == 2){
        if(fichaEscogida[2] == 0 && blockOcupado(parseInt(fila) + 1, parseInt(columna) )){   
            ocupada = true;
        }else if(fichaEscogida[2] == 1 && blockOcupado(parseInt(fila) - 1, parseInt(columna) )){
           ocupada = true;
        }
    }
    else if(rotationNumber == 3){
        if(fichaEscogida[2] == 1 && blockOcupado(fila, parseInt(columna) + 1 )){   
            ocupada = true;
        }else if(fichaEscogida[2] == 0 && blockOcupado(fila, parseInt(columna) - 1 )){
            ocupada = true;
        }
    }
    else if(rotationNumber == 4){
        if(fichaEscogida[2] == 1 && blockOcupado(parseInt(fila) + 1, parseInt(columna) + 1 )){   
            ocupada = true;
        }else if(fichaEscogida[2] == 0 && blockOcupado(parseInt(fila) - 1, parseInt(columna) - 1 )){
           ocupada = true;
        }
    }
    else if(rotationNumber == 5){
        if(fichaEscogida[2] == 1 && blockOcupado(parseInt(fila) + 1, parseInt(columna) )){   
            ocupada = true;
        }else if(fichaEscogida[2] == 0 && blockOcupado(parseInt(fila) - 1, parseInt(columna) )){
           ocupada = true;
        }
    }
    //console.log(parseInt(columna)+1);
    return ocupada;
}

function realizarMovimiento(fila, columna, jugador) {
    var fichaDos = fichasJUno[fichaEscogida[1]][fichaEscogida[4]];
    if(jugador == 0){
        arrMovimientos.push([1, fila, columna, fichasJUno[fichaEscogida[1]][fichaEscogida[2]]]);
        dibujarFicha(fila, columna, fichasJUno[fichaEscogida[1]][fichaEscogida[2]]);
        fichaDos = fichasJUno[fichaEscogida[1]][fichaEscogida[4]];
    }else{
        arrMovimientos.push([2, fila, columna, fichasJDos[fichaEscogida[1]][fichaEscogida[2]]]);
        dibujarFicha(fila, columna, fichasJDos[fichaEscogida[1]][fichaEscogida[2]]);
        fichaDos = fichasJDos[fichaEscogida[1]][fichaEscogida[4]];
    }
    
    

    //console.log(fichaEscogida);

    if(rotationNumber == 0){
        if (fichaEscogida[2] == 0) {
            arrMovimientos.push([1, fila, parseInt(columna) + 1, fichaDos]);
            dibujarFicha(fila, parseInt(columna) + 1, fichaDos);
        }else{
            arrMovimientos.push([1, fila, parseInt(columna) - 1, fichaDos]);
            dibujarFicha(fila, parseInt(columna) - 1, fichaDos);
        }
    }else if(rotationNumber == 1){
        if (fichaEscogida[2] == 0) {
            arrMovimientos.push([1, parseInt(fila) + 1, parseInt(columna) + 1, fichaDos]);
            dibujarFicha(parseInt(fila) + 1, parseInt(columna) + 1, fichaDos);
        }else{
            arrMovimientos.push([1, parseInt(fila) - 1, parseInt(columna) - 1, fichaDos]);
            dibujarFicha(parseInt(fila) - 1, parseInt(columna) - 1, fichaDos);
        }
    }
    else if(rotationNumber == 2){
        if (fichaEscogida[2] == 0) {
            arrMovimientos.push([1, parseInt(fila) + 1, parseInt(columna), fichaDos]);
            dibujarFicha(parseInt(fila) + 1, parseInt(columna), fichaDos);
        }else{
            arrMovimientos.push([1, parseInt(fila) - 1, parseInt(columna), fichaDos]);
            dibujarFicha(parseInt(fila) - 1, parseInt(columna), fichaDos);
        }
    }else if(rotationNumber == 3){
        if (fichaEscogida[2] == 1) {
            arrMovimientos.push([1, fila, parseInt(columna) + 1, fichaDos]);
            dibujarFicha(fila, parseInt(columna) + 1, fichaDos);
        }else{
            arrMovimientos.push([1, fila, parseInt(columna) - 1, fichaDos]);
            dibujarFicha(fila, parseInt(columna) - 1, fichaDos);
        }
    }else if(rotationNumber == 4){
        if (fichaEscogida[2] == 1) {
            arrMovimientos.push([1, parseInt(fila) + 1, parseInt(columna) + 1, fichaDos]);
            dibujarFicha(parseInt(fila) + 1, parseInt(columna) + 1, fichaDos);
        }else{
            arrMovimientos.push([1, parseInt(fila) - 1, parseInt(columna) - 1, fichaDos]);
            dibujarFicha(parseInt(fila) - 1, parseInt(columna) - 1, fichaDos);
        }
    }else if(rotationNumber == 5){
        if (fichaEscogida[2] == 1) {
            arrMovimientos.push([1, parseInt(fila) + 1, parseInt(columna), fichaDos]);
            dibujarFicha(parseInt(fila) + 1, parseInt(columna), fichaDos);
        }else{
            arrMovimientos.push([1, parseInt(fila) - 1, parseInt(columna), fichaDos]);
            dibujarFicha(parseInt(fila) - 1, parseInt(columna), fichaDos);
        }
    }
    
    //console.log(arrMovimientos);
}

function clickBlock() {
    //alert('holi');
    //dicujarFicha(x, y, color);
    //console.log(this.id);
    var arrBlockId =  this.id.split("-");
    var blockFila = arrBlockId[1];
    var blockColumna = arrBlockId[2];

    //console.log(blockFila+"-"+blockColumna )
    if(iniciado){
        if (turno == 1) {
            if (fichaEscogida != null) {
                if(!blockOcupado(blockFila, blockColumna)){
                    if(!block2Ocupado(blockFila, blockColumna)){
                        if(!block2Desborde(blockFila, blockColumna)){
                            realizarMovimiento(blockFila, blockColumna, 0);
                            var puntos = calcularPuntosMov(blockFila, blockColumna, 0);
                            //console.log(arrBlockId);
                            console.log(fichaEscogida);
                                // pintar y guardar puntos del bloque 1
                            pintarPuntos(puntos[0][0],puntos[0][1], 1);
                                // console.log(fichasJUno[fichaEscogida[1]]);
                                // pintar y guardar puntos del bloque 1
                            pintarPuntos(puntos[1][0],puntos[1][1], 1);

                            obtenerNuevaFicha(fichaEscogida[1], 0);
                            setFichaEscogida();
                            // ya movio el jugador le toca a COM
                            turno = 2;
                            pintarTurno();
                            // movimiento de COM
                            turnoCOM();
                        }else{
                            alert('No se puede realizar este movimento; "Se sale del tablero".');
                        }   
                    }else{
                        alert('No se puede realizar este movimento; "casillas ocupadas".');
                    }   
                }else{
                    alert('No se puede realizar este movimento; "casillas ocupadas".');
                }
            }else{
                alert('Seleccione una ficha.');
            }
        }else{
            alert('No es su turno');
        }
    }else{
        alert('Debe iniciar un juego nuevo primero.');
    }
}