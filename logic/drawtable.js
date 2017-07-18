//var matrizTablero= [];

function drawtable(){
    var divgame = document.getElementById('juego');
    arrMovimientos = [];
    divgame.innerHTML = "";
    var count = 5;
    var margin = 120;
    var rowcount = 0;

    //pintando la mitad de arriba del tablero
    for (rowcount = 0; rowcount < 6; rowcount ++) {
        
        var row = document.createElement('div');
        divgame.appendChild(row);
        row.className = 'row';
        count += 1;
        margin -= 20;
        row.style.marginLeft = margin+"px";
        row.style.marginRight = margin+"px";

        for (var j = 0; j < count; j++) {
            var block = document.createElement('div');
            block.className = 'block';
            block.id = 'block-'+rowcount+'-'+j;
            block.onmouseover = blockhover;
            block.onmouseout = blockout;
            block.onclick = clickBlock;
            row.appendChild(block);
            //console.log(count);
            //console.log(margin);
        }
        
    }
    //pintando la mitad de abajo del tablero
    var countFila = 0;

    for (rowcount; rowcount < 11; rowcount++) {
        var row = document.createElement('div');
        divgame.appendChild(row);
        row.className = 'row';
        count -= 1;
        var countj = 0;
        countFila ++;
        countj+=countFila;
        margin += 20;

        row.style.marginLeft = margin+"px";
        row.style.marginRight = margin+"px";

        for (var j = count; j > 0; j--) {
            var block = document.createElement('div');
            block.className = 'block';
            block.id = 'block-'+rowcount+'-'+countj;
            block.onmouseover = blockhover;
            block.onmouseout = blockout;
            block.onclick = clickBlock;
            countj++;
            row.appendChild(block);
            //console.log(count);
            //console.log(margin);
        }
        
        
    }

    document.getElementById('block-0-0').className = 'block-amarillo';
    document.getElementById('block-0-5').className = 'block-azul';
    document.getElementById('block-5-0').className = 'block-rojo';
    document.getElementById('block-5-10').className = 'block-morado';
    document.getElementById('block-10-5').className = 'block-verde';
    document.getElementById('block-10-10').className = 'block-naranja';

    arrMovimientos.push([0, 0, 0, "amarillo"]);
    arrMovimientos.push([0, 0, 5, "azul"]);
    arrMovimientos.push([0, 5, 0, "rojo"]);
    arrMovimientos.push([0, 5, 10, "morado"]);
    arrMovimientos.push([0, 10, 5, "verde"]);
    arrMovimientos.push([0, 10, 10, "naranja"]);

    //console.log(arrMovimientos);
}

function dibujarFicha(x, y, color) {
    document.getElementById('block-'+ x +'-'+ y).className = 'block-'+color;
    //console.log('block-'+ x +'-'+ y);
}

function cambiarFichaJ(color, x, y) {
    //$('#blockj'+ x +'-'+y).toggleClass('block-2-'+color);
    document.getElementById('blockj-'+ x +'-'+y).className = 'block-2-'+color;
    //console.log('blockJ'+ x +'-'+y);
}

function blockhover(){
    //console.log(this);
    var arrId = this.id.split("-");
    var fila = arrId[1];
    var columna = arrId[2]; 

    if(this.className == 'block'){
        this.className = "block-s";
        
        // cambiando el otro bloque dependiendo la rotacion y la ficha seleccionada
        if(rotationNumber == 0 && fichaEscogida != null){
            // horizontal, fila = fila en ambos bloques
            if (fichaEscogida[2] == 0) {
                var block2 = document.getElementById("block-"+ fila + "-" + ( parseInt(columna) + 1));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block-s'
                }
            }else{
                var block2 = document.getElementById("block-"+ fila + "-" + ( parseInt(columna) - 1));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block-s'
                }
            }
        }else if(rotationNumber == 1 && fichaEscogida != null){
            // diagonal superior izquierda
            if (fichaEscogida[2] == 0) {
                var block2 = document.getElementById("block-"+ ( parseInt(fila) + 1) + "-" + ( parseInt(columna) + 1));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block-s'
                }
            }else{
                var block2 = document.getElementById("block-"+ ( parseInt(fila) - 1) + "-" + ( parseInt(columna) - 1));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block-s'
                }
            }
        }else if(rotationNumber == 2 && fichaEscogida != null){
            if (fichaEscogida[2] == 0) {
                var block2 = document.getElementById("block-"+ ( parseInt(fila) + 1) + "-" + ( parseInt(columna)));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block-s'
                }
            }else{
                var block2 = document.getElementById("block-"+ ( parseInt(fila) - 1) + "-" + ( parseInt(columna)));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block-s'
                }
            }
        }else if(rotationNumber == 3 && fichaEscogida != null){ 
            if (fichaEscogida[2] == 0) {
                var block2 = document.getElementById("block-"+ fila + "-" + ( parseInt(columna) - 1));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block-s'
                }
            }else{
                var block2 = document.getElementById("block-"+ fila + "-" + ( parseInt(columna) + 1));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block-s'
                }
            } 
        }else if(rotationNumber == 4 && fichaEscogida != null){
            if (fichaEscogida[2] == 0) {
                var block2 = document.getElementById("block-"+ ( parseInt(fila) - 1) + "-" + ( parseInt(columna) - 1));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block-s'
                }
            }else{
                var block2 = document.getElementById("block-"+ ( parseInt(fila) + 1) + "-" + ( parseInt(columna) + 1));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block-s'
                }
            }
        }else if(rotationNumber == 5 && fichaEscogida != null){
            if (fichaEscogida[2] == 0) {
                var block2 = document.getElementById("block-"+ ( parseInt(fila) - 1) + "-" + ( parseInt(columna)));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block-s'
                }
            }else{
                var block2 = document.getElementById("block-"+ ( parseInt(fila) + 1) + "-" + ( parseInt(columna)));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block-s'
                }
            }
        
        }

    }

}
function blockout(){
    //console.log(this);
    var arrId = this.id.split("-");
    var fila = arrId[1];
    var columna = arrId[2]; 

    if(this.className == 'block-s'){
        this.className = "block";

        if(rotationNumber == 0 && fichaEscogida != null){
            // horizontal, fila = fila en ambos bloques
            if (fichaEscogida[2] == 0) {
                var block2 = document.getElementById("block-"+ fila + "-" + ( parseInt(columna) + 1));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block'
                }
            }else{
                var block2 = document.getElementById("block-"+ fila + "-" + ( parseInt(columna) - 1));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block'
                }
            }
        }else if(rotationNumber == 1 && fichaEscogida != null){
            // diagonal superior izquierda
            if (fichaEscogida[2] == 0) {
                var block2 = document.getElementById("block-"+ ( parseInt(fila) + 1) + "-" + ( parseInt(columna) + 1));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block'
                }
            }else{
                var block2 = document.getElementById("block-"+ ( parseInt(fila) - 1) + "-" + ( parseInt(columna) - 1));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block'
                }
            }
        }else if(rotationNumber == 2 && fichaEscogida != null){
            if (fichaEscogida[2] == 0) {
                var block2 = document.getElementById("block-"+ ( parseInt(fila) + 1) + "-" + ( parseInt(columna)));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block'
                }
            }else{
                var block2 = document.getElementById("block-"+ ( parseInt(fila) - 1) + "-" + ( parseInt(columna)));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block'
                }
            }
        }else if(rotationNumber == 3 && fichaEscogida != null){ 
            if (fichaEscogida[2] == 0) {
                var block2 = document.getElementById("block-"+ fila + "-" + ( parseInt(columna) - 1));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block'
                }
            }else{
                var block2 = document.getElementById("block-"+ fila + "-" + ( parseInt(columna) + 1));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block'
                }
            } 
        }else if(rotationNumber == 4 && fichaEscogida != null){
            if (fichaEscogida[2] == 0) {
                var block2 = document.getElementById("block-"+ ( parseInt(fila) - 1) + "-" + ( parseInt(columna) - 1));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block'
                }
            }else{
                var block2 = document.getElementById("block-"+ ( parseInt(fila) + 1) + "-" + ( parseInt(columna) + 1));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block'
                }
            }
        }else if(rotationNumber == 5 && fichaEscogida != null){
            if (fichaEscogida[2] == 0) {
                var block2 = document.getElementById("block-"+ ( parseInt(fila) - 1) + "-" + ( parseInt(columna)));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block'
                }
            }else{
                var block2 = document.getElementById("block-"+ ( parseInt(fila) + 1) + "-" + ( parseInt(columna)));
                if (block2 != null && !block2Ocupado(fila, columna)) {
                    block2.className = 'block'
                }
            }
        
        }
    }
}

function pintarPuntos(color, puntos, jugador) {
    //console.log(color + " - puntos: " + puntos + " jugador: " + jugador);

    for (var index = 0; index < puntosJugadores.length; index++) {
        if (puntosJugadores[index][0] == color) {
            puntosJugadores[index][jugador] += parseInt(puntos);
            document.getElementById("color-"+index+"-"+jugador).textContent = puntosJugadores[index][jugador];
            break;
        }
    }

    //console.log(puntosJugadores);
}

function pintarTurno() {
    var spanturno = document.getElementById('sTurno');
    if(turno == 1){
        spanturno.textContent = 'Jugador';
    }else{
        spanturno.textContent = 'COM';
    }

}

function calcularPuntosMov(fila, columna, jugador) {
    var puntos = [];
    var puntosB1B2 = [];

    //console.log(arrMovimientos);
    if(jugador == 0){
        if(rotationNumber == 0){
        // horizontal, fila = fila en ambos bloques
        puntosB1B2 = calcularPuntajeR0(fila, columna, fichasJUno[fichaEscogida[1]][0], fichasJUno[fichaEscogida[1]][1]);
        }else if(rotationNumber == 1){
            // diagonal superior izquierda
            puntosB1B2 = calcularPuntajeR1(fila, columna, fichasJUno[fichaEscogida[1]][0], fichasJUno[fichaEscogida[1]][1]);    
        }else if(rotationNumber == 2){
            puntosB1B2 = calcularPuntajeR2(fila, columna, fichasJUno[fichaEscogida[1]][0], fichasJUno[fichaEscogida[1]][1]);
        }else if(rotationNumber == 3){  
            puntosB1B2 = calcularPuntajeR3(fila, columna, fichasJUno[fichaEscogida[1]][0], fichasJUno[fichaEscogida[1]][1]);
        }else if(rotationNumber == 4){
            puntosB1B2 = calcularPuntajeR4(fila, columna, fichasJUno[fichaEscogida[1]][0], fichasJUno[fichaEscogida[1]][1]);
        }else if(rotationNumber == 5){
            puntosB1B2 = calcularPuntajeR5(fila, columna, fichasJUno[fichaEscogida[1]][0], fichasJUno[fichaEscogida[1]][1]);
        }

        puntos[0] = [fichasJUno[fichaEscogida[1]][0], puntosB1B2[0]];
        puntos[1] = [fichasJUno[fichaEscogida[1]][1], puntosB1B2[1]];
    }else{
        if(rotationNumber == 0){
        // horizontal, fila = fila en ambos bloques
        puntosB1B2 = calcularPuntajeR0(fila, columna, fichasJDos[fichaEscogida[1]][0], fichasJDos[fichaEscogida[1]][1]);
        }else if(rotationNumber == 1){
            // diagonal superior izquierda
            puntosB1B2 = calcularPuntajeR1(fila, columna, fichasJDos[fichaEscogida[1]][0], fichasJDos[fichaEscogida[1]][1]);    
        }else if(rotationNumber == 2){
            puntosB1B2 = calcularPuntajeR2(fila, columna, fichasJDos[fichaEscogida[1]][0], fichasJDos[fichaEscogida[1]][1]);
        }else if(rotationNumber == 3){  
            puntosB1B2 = calcularPuntajeR3(fila, columna, fichasJDos[fichaEscogida[1]][0], fichasJDos[fichaEscogida[1]][1]);
        }else if(rotationNumber == 4){
            puntosB1B2 = calcularPuntajeR4(fila, columna, fichasJDos[fichaEscogida[1]][0], fichasJDos[fichaEscogida[1]][1]);
        }else if(rotationNumber == 5){
            puntosB1B2 = calcularPuntajeR5(fila, columna, fichasJDos[fichaEscogida[1]][0], fichasJDos[fichaEscogida[1]][1]);
        }

        puntos[0] = [fichasJDos[fichaEscogida[1]][0], puntosB1B2[0]];
        puntos[1] = [fichasJDos[fichaEscogida[1]][1], puntosB1B2[1]];
    }

    return puntos;
}

function calcularPuntajeR0(fila, columna, color0, color1) {
    // funcion para calcular el puntaje cuando la rotacion es 0
    //console.log(fila + " - " + columna + " - " + color0 + " - " + color1);
    var puntos = [];
    var puntosB1 = 0;
    var puntosB2 = 0;
    //calculo para el bloque uno que seria el color0 y el bloque 2 el color1
    if (fichaEscogida[2] == 0) {
        //**********para laterales
        puntosB1 += calcularPuntajeLI(fila, parseInt(columna), color0);
        puntosB2 += calcularPuntajeLD(fila, parseInt(columna) + 1, color1);

        //*********para superiores, dos para cada uno, por cada color
        puntosB1 += calcularPuntajeSI(parseInt(fila), parseInt(columna), color0);
        puntosB2 += calcularPuntajeSI(parseInt(fila), parseInt(columna) + 1, color1);

        puntosB1 += calcularPuntajeSD(parseInt(fila), parseInt(columna), color0);
        puntosB2 += calcularPuntajeSD(parseInt(fila), parseInt(columna) + 1, color1);

        //********* Para inferiores, dos por cada , por cada color
        puntosB1 += calcularPuntajeII(parseInt(fila), parseInt(columna), color0);
        puntosB2 += calcularPuntajeII(parseInt(fila), parseInt(columna) + 1, color1);

        puntosB1 += calcularPuntajeID(parseInt(fila), parseInt(columna), color0);
        puntosB2 += calcularPuntajeID(parseInt(fila), parseInt(columna) + 1, color1);
    }else{
        //*********para laterales
        puntosB1 += calcularPuntajeLI(fila, parseInt(columna) - 1, color0);
        puntosB2 += calcularPuntajeLD(fila, parseInt(columna), color1);

        //*********para superiores, dos para cada uno, por cada color
        puntosB1 += calcularPuntajeSI(parseInt(fila), parseInt(columna) - 1, color0);
        puntosB2 += calcularPuntajeSI(parseInt(fila), parseInt(columna), color1);

        puntosB1 += calcularPuntajeSD(parseInt(fila), parseInt(columna) - 1, color0);
        puntosB2 += calcularPuntajeSD(parseInt(fila), parseInt(columna), color1);

        //********* Para inferiores, dos por cada , por cada color
        puntosB1 += calcularPuntajeII(parseInt(fila), parseInt(columna) - 1, color0);
        puntosB2 += calcularPuntajeII(parseInt(fila), parseInt(columna), color1);

        puntosB1 += calcularPuntajeID(parseInt(fila), parseInt(columna) - 1, color0);
        puntosB2 += calcularPuntajeID(parseInt(fila), parseInt(columna), color1);
    }
    puntos[0] = puntosB1;
    puntos[1] = puntosB2;
    //console.log('puntos en calcularpuntajeR0 ');
    //console.log(puntos);
    return puntos;
}

function calcularPuntajeR1(fila, columna, color0, color1) {
    // funcion para calcular el puntaje cuando la rotacion es 0
    //console.log(fila + " - " + columna + " - " + color0 + " - " + color1);
    var puntos = [];
    var puntosB1 = 0;
    var puntosB2 = 0;
    //calculo para el bloque uno que seria el color0 y el bloque 2 el color1
    if (fichaEscogida[2] == 0) {
        //**********para laterales
        puntosB1 += calcularPuntajeLI(fila, parseInt(columna), color0);
        puntosB1 += calcularPuntajeLD(fila, parseInt(columna), color0);

        puntosB2 += calcularPuntajeLI(parseInt(fila) + 1, parseInt(columna) + 1, color1);
        puntosB2 += calcularPuntajeLD(parseInt(fila) + 1, parseInt(columna) + 1, color1);

        //*********para superiores, dos para cada uno, por cada color
        puntosB1 += calcularPuntajeSI(parseInt(fila), parseInt(columna), color0);

        puntosB1 += calcularPuntajeSD(parseInt(fila), parseInt(columna), color0);
        puntosB2 += calcularPuntajeSD(parseInt(fila) + 1, parseInt(columna) + 1, color1);

        //********* Para inferiores, dos por cada , por cada color
        puntosB1 += calcularPuntajeII(parseInt(fila), parseInt(columna), color0);
        puntosB2 += calcularPuntajeII(parseInt(fila) + 1, parseInt(columna) + 1, color1);

        puntosB2 += calcularPuntajeID(parseInt(fila) + 1, parseInt(columna) + 1, color1);

    }else{
        //*********para laterales
        puntosB1 += calcularPuntajeLI(parseInt(fila) - 1, parseInt(columna) - 1, color0);
        puntosB1 += calcularPuntajeLD(parseInt(fila) - 1, parseInt(columna) - 1, color0);
        //console.log(parseInt(fila) - 1 + "-" + parseInt(columna) - 1 + "-" + color0);
        puntosB2 += calcularPuntajeLI(parseInt(fila), parseInt(columna), color1);
        puntosB2 += calcularPuntajeLD(parseInt(fila), parseInt(columna), color1);

        //*********para superiores, dos para cada uno, por cada color
        puntosB1 += calcularPuntajeSI(parseInt(fila) - 1, parseInt(columna) - 1, color0);

        puntosB1 += calcularPuntajeSD(parseInt(fila) - 1, parseInt(columna) -1, color0);
        puntosB2 += calcularPuntajeSD(parseInt(fila), parseInt(columna), color1);

        //********* Para inferiores, dos por cada , por cada color
        puntosB1 += calcularPuntajeII(parseInt(fila) - 1, parseInt(columna) - 1, color0);
        puntosB2 += calcularPuntajeII(parseInt(fila), parseInt(columna), color1);

        puntosB2 += calcularPuntajeID(parseInt(fila), parseInt(columna), color1);

        //console.log(parseInt(fila) - 1 + "-" + parseInt(columna) - 1 + "-" + color0);

    }
    puntos[0] = puntosB1;
    puntos[1] = puntosB2;
    //console.log('puntos en calcularpuntajeR0 ');
    //console.log(puntos);
    return puntos;
}

function calcularPuntajeR2(fila, columna, color0, color1) {
    // funcion para calcular el puntaje cuando la rotacion es 0
    //console.log(fila + " - " + columna + " - " + color0 + " - " + color1);
    var puntos = [];
    var puntosB1 = 0;
    var puntosB2 = 0;
    //calculo para el bloque uno que seria el color0 y el bloque 2 el color1
    if (fichaEscogida[2] == 0) {
        //**********para laterales
        puntosB1 += calcularPuntajeLI(fila, parseInt(columna), color0);
        puntosB1 += calcularPuntajeLD(fila, parseInt(columna), color0);

        puntosB2 += calcularPuntajeLI(parseInt(fila) + 1, parseInt(columna), color1);
        puntosB2 += calcularPuntajeLD(parseInt(fila) + 1, parseInt(columna), color1);

        //*********para superiores, dos para cada uno, por cada color
        puntosB1 += calcularPuntajeSI(parseInt(fila), parseInt(columna), color0);
        puntosB2 += calcularPuntajeSI(parseInt(fila) + 1, parseInt(columna), color1);
    
        puntosB1 += calcularPuntajeSD(parseInt(fila), parseInt(columna), color0);

        //********* Para inferiores, dos por cada , por cada color
        puntosB2 += calcularPuntajeII(parseInt(fila) + 1, parseInt(columna), color1);

        puntosB1 += calcularPuntajeID(parseInt(fila), parseInt(columna), color0);
        puntosB2 += calcularPuntajeID(parseInt(fila) + 1, parseInt(columna), color1);

    }else{
        //*********para laterales
        puntosB1 += calcularPuntajeLI(parseInt(fila) - 1, parseInt(columna), color0);
        puntosB1 += calcularPuntajeLD(parseInt(fila) - 1, parseInt(columna), color0);
        //console.log(parseInt(fila) - 1 + "-" + parseInt(columna) - 1 + "-" + color0);
        puntosB2 += calcularPuntajeLI(parseInt(fila), parseInt(columna), color1);
        puntosB2 += calcularPuntajeLD(parseInt(fila), parseInt(columna), color1);

        //*********para superiores, dos para cada uno, por cada color
        puntosB1 += calcularPuntajeSI(parseInt(fila) - 1, parseInt(columna), color0);
        puntosB2 += calcularPuntajeSI(parseInt(fila), parseInt(columna), color1);

        puntosB1 += calcularPuntajeSD(parseInt(fila) - 1, parseInt(columna), color0);

        //********* Para inferiores, dos por cada , por cada color
        puntosB2 += calcularPuntajeII(parseInt(fila), parseInt(columna), color1);

        puntosB1 += calcularPuntajeID(parseInt(fila) - 1, parseInt(columna), color0);
        puntosB2 += calcularPuntajeID(parseInt(fila), parseInt(columna), color1);

        //console.log(parseInt(fila) - 1 + "-" + parseInt(columna) - 1 + "-" + color0);

    }
    puntos[0] = puntosB1;
    puntos[1] = puntosB2;
    //console.log('puntos en calcularpuntajeR0 ');
    //console.log(puntos);
    return puntos;
}

function calcularPuntajeR3(fila, columna, color0, color1) {
    // funcion para calcular el puntaje cuando la rotacion es 0
    //console.log(fila + " - " + columna + " - " + color0 + " - " + color1);
    var puntos = [];
    var puntosB1 = 0;
    var puntosB2 = 0;
    //calculo para el bloque uno que seria el color0 y el bloque 2 el color1
    if (fichaEscogida[2] == 0) {
        //**********para laterales
        puntosB1 += calcularPuntajeLD(fila, parseInt(columna), color0);
        puntosB2 += calcularPuntajeLI(fila, parseInt(columna) - 1, color1);

        //*********para superiores, dos para cada uno, por cada color
        puntosB1 += calcularPuntajeSI(parseInt(fila), parseInt(columna), color0);
        puntosB2 += calcularPuntajeSI(parseInt(fila), parseInt(columna) - 1, color1);

        puntosB1 += calcularPuntajeSD(parseInt(fila), parseInt(columna), color0);
        puntosB2 += calcularPuntajeSD(parseInt(fila), parseInt(columna) - 1, color1);

        //********* Para inferiores, dos por cada , por cada color
        puntosB1 += calcularPuntajeII(parseInt(fila), parseInt(columna), color0);
        puntosB2 += calcularPuntajeII(parseInt(fila), parseInt(columna) - 1, color1);

        puntosB1 += calcularPuntajeID(parseInt(fila), parseInt(columna), color0);
        puntosB2 += calcularPuntajeID(parseInt(fila), parseInt(columna) - 1, color1);
    }else{
        //*********para laterales
        puntosB1 += calcularPuntajeLD(fila, parseInt(columna) + 1, color0);
        puntosB2 += calcularPuntajeLI(fila, parseInt(columna), color1);

        //*********para superiores, dos para cada uno, por cada color
        puntosB1 += calcularPuntajeSI(parseInt(fila), parseInt(columna) + 1, color0);
        puntosB2 += calcularPuntajeSI(parseInt(fila), parseInt(columna), color1);

        puntosB1 += calcularPuntajeSD(parseInt(fila), parseInt(columna) + 1, color0);
        puntosB2 += calcularPuntajeSD(parseInt(fila), parseInt(columna), color1);

        //********* Para inferiores, dos por cada , por cada color
        puntosB1 += calcularPuntajeII(parseInt(fila), parseInt(columna) + 1, color0);
        puntosB2 += calcularPuntajeII(parseInt(fila), parseInt(columna), color1);

        puntosB1 += calcularPuntajeID(parseInt(fila), parseInt(columna) + 1, color0);
        puntosB2 += calcularPuntajeID(parseInt(fila), parseInt(columna), color1);
    }
    puntos[0] = puntosB1;
    puntos[1] = puntosB2;
    //console.log('puntos en calcularpuntajeR0 ');
    //console.log(puntos);
    return puntos;
}

function calcularPuntajeR4(fila, columna, color0, color1) {
    // funcion para calcular el puntaje cuando la rotacion es 0
    //console.log(fila + " - " + columna + " - " + color0 + " - " + color1);
    var puntos = [];
    var puntosB1 = 0;
    var puntosB2 = 0;
    //calculo para el bloque uno que seria el color0 y el bloque 2 el color1
    if (fichaEscogida[2] == 0) {
        //**********para laterales
        puntosB1 += calcularPuntajeLI(fila, parseInt(columna), color0);
        puntosB1 += calcularPuntajeLD(fila, parseInt(columna), color0);

        puntosB2 += calcularPuntajeLI(parseInt(fila) - 1, parseInt(columna) - 1, color1);
        puntosB2 += calcularPuntajeLD(parseInt(fila) - 1, parseInt(columna) - 1, color1);

        //*********para superiores, dos para cada uno, por cada color
        puntosB2 += calcularPuntajeSI(parseInt(fila) - 1, parseInt(columna) - 1, color0);

        puntosB1 += calcularPuntajeSD(parseInt(fila), parseInt(columna), color0);
        puntosB2 += calcularPuntajeSD(parseInt(fila) - 1, parseInt(columna) - 1, color1);

        //********* Para inferiores, dos por cada , por cada color
        puntosB1 += calcularPuntajeII(parseInt(fila), parseInt(columna), color0);
        puntosB2 += calcularPuntajeII(parseInt(fila) - 1, parseInt(columna) - 1, color1);

        puntosB1 += calcularPuntajeID(parseInt(fila), parseInt(columna), color0);

    }else{
        //*********para laterales
        puntosB1 += calcularPuntajeLI(parseInt(fila) + 1, parseInt(columna) + 1, color0);
        puntosB1 += calcularPuntajeLD(parseInt(fila) + 1, parseInt(columna) + 1, color0);
        //console.log(parseInt(fila) - 1 + "-" + parseInt(columna) - 1 + "-" + color0);
        puntosB2 += calcularPuntajeLI(parseInt(fila), parseInt(columna), color1);
        puntosB2 += calcularPuntajeLD(parseInt(fila), parseInt(columna), color1);

        //*********para superiores, dos para cada uno, por cada color
        puntosB2 += calcularPuntajeSI(parseInt(fila), parseInt(columna), color1);

        puntosB1 += calcularPuntajeSD(parseInt(fila) + 1, parseInt(columna) + 1, color0);
        puntosB2 += calcularPuntajeSD(parseInt(fila), parseInt(columna), color1);

        //********* Para inferiores, dos por cada , por cada color
        puntosB1 += calcularPuntajeII(parseInt(fila) + 1, parseInt(columna) + 1, color0);
        puntosB2 += calcularPuntajeII(parseInt(fila), parseInt(columna), color1);

        puntosB1 += calcularPuntajeID(parseInt(fila) + 1, parseInt(columna) + 1, color0);

        //console.log(parseInt(fila) - 1 + "-" + parseInt(columna) - 1 + "-" + color0);

    }
    puntos[0] = puntosB1;
    puntos[1] = puntosB2;
    //console.log('puntos en calcularpuntajeR0 ');
    //console.log(puntos);
    return puntos;
}

function calcularPuntajeR5(fila, columna, color0, color1) {
    // funcion para calcular el puntaje cuando la rotacion es 0
    //console.log(fila + " - " + columna + " - " + color0 + " - " + color1);
    var puntos = [];
    var puntosB1 = 0;
    var puntosB2 = 0;
    //calculo para el bloque uno que seria el color0 y el bloque 2 el color1
    if (fichaEscogida[2] == 0) {
        //**********para laterales
        puntosB1 += calcularPuntajeLI(fila, parseInt(columna), color0);
        puntosB1 += calcularPuntajeLD(fila, parseInt(columna), color0);

        puntosB2 += calcularPuntajeLI(parseInt(fila) - 1, parseInt(columna), color1);
        puntosB2 += calcularPuntajeLD(parseInt(fila) - 1, parseInt(columna), color1);

        //*********para superiores, dos para cada uno, por cada color
        puntosB1 += calcularPuntajeSI(parseInt(fila), parseInt(columna), color0);
        puntosB2 += calcularPuntajeSI(parseInt(fila) - 1, parseInt(columna), color1);
    
        puntosB2 += calcularPuntajeSD(parseInt(fila) - 1, parseInt(columna), color1);

        //********* Para inferiores, dos por cada , por cada color
        puntosB1 += calcularPuntajeII(parseInt(fila), parseInt(columna), color0);

        puntosB1 += calcularPuntajeID(parseInt(fila), parseInt(columna), color0);
        puntosB2 += calcularPuntajeID(parseInt(fila) - 1, parseInt(columna), color1);

    }else{
        //*********para laterales
        puntosB1 += calcularPuntajeLI(parseInt(fila) + 1, parseInt(columna), color0);
        puntosB1 += calcularPuntajeLD(parseInt(fila) + 1, parseInt(columna), color0);
        //console.log(parseInt(fila) - 1 + "-" + parseInt(columna) - 1 + "-" + color0);
        puntosB2 += calcularPuntajeLI(parseInt(fila), parseInt(columna), color1);
        puntosB2 += calcularPuntajeLD(parseInt(fila), parseInt(columna), color1);

        //*********para superiores, dos para cada uno, por cada color
        puntosB1 += calcularPuntajeSI(parseInt(fila) + 1, parseInt(columna), color0);
        puntosB2 += calcularPuntajeSI(parseInt(fila), parseInt(columna), color1);

        puntosB2 += calcularPuntajeSD(parseInt(fila), parseInt(columna), color1);

        //********* Para inferiores, dos por cada , por cada color
        puntosB1 += calcularPuntajeII(parseInt(fila) + 1, parseInt(columna), color0);

        puntosB1 += calcularPuntajeID(parseInt(fila) + 1, parseInt(columna), color0);
        puntosB2 += calcularPuntajeID(parseInt(fila), parseInt(columna), color1);

        //console.log(parseInt(fila) - 1 + "-" + parseInt(columna) - 1 + "-" + color0);

    }
    puntos[0] = puntosB1;
    puntos[1] = puntosB2;
    //console.log('puntos en calcularpuntajeR0 ');
    //console.log(puntos);
    return puntos;
}

// calcular puntaje partiendo desde la posicion f,C-1  hacia el lateral izquierdo
function calcularPuntajeLI(fila, columna, color){
    var p = 0;
    var encontrado = false;
    var colTemp = parseInt(columna) - 1;
    //console.log(arrMovimientos);
    do {
        for (var index = 0; index < arrMovimientos.length; index++) {
            if(arrMovimientos[index][1] == fila && arrMovimientos[index][2] == colTemp 
            && arrMovimientos[index][3] == color){
                p ++;
                encontrado = true;
                break;
            }else{
                encontrado = false;
            }
        }
        colTemp --;
    } while (encontrado);
    
    return p;
}

// calcular puntaje partiendo desde la posicion f,C+1  hacia el lateral derecho
function calcularPuntajeLD(fila, columna, color){
    var p = 0;
    var encontrado = false;
    var colTemp = columna + 1 ;
    //console.log(arrMovimientos);
    do {
        for (var index = 0; index < arrMovimientos.length; index++) {
            if(arrMovimientos[index][1] == fila && arrMovimientos[index][2] == colTemp 
            && arrMovimientos[index][3] == color){
                p ++;
                encontrado = true;
                break;
            }else{
                encontrado = false;
            }
        }
        colTemp ++;
    } while (encontrado);
    
    return p;
}

// calcular puntaje partiendo desde la posicion f-1,C-1  hacia superior-izquierdo
function calcularPuntajeSI(fila, columna, color){
    var p = 0;
    var encontrado = false;
    var colTemp = parseInt(columna) - 1;
    var filTemp = parseInt(fila) - 1;

    //console.log(arrMovimientos);
    do {
        for (var index = 0; index < arrMovimientos.length; index++) {
            if(arrMovimientos[index][1] == filTemp && arrMovimientos[index][2] == colTemp 
            && arrMovimientos[index][3] == color){
                p ++;
                encontrado = true;
                break;
            }else{
                encontrado = false;
            }
        }
        colTemp --;
        filTemp --;
    } while (encontrado);
    
    return p;
}

// calcular puntaje partiendo desde la posicion f-1,C  hacia superior-derecho
function calcularPuntajeSD(fila, columna, color){
    var p = 0;
    var encontrado = false;
    var colTemp = parseInt(columna);
    var filTemp = parseInt(fila) - 1;

    //console.log(arrMovimientos);
    do {
        for (var index = 0; index < arrMovimientos.length; index++) {
            if(arrMovimientos[index][1] == filTemp && arrMovimientos[index][2] == colTemp 
            && arrMovimientos[index][3] == color){
                p ++;
                encontrado = true;
                break;
            }else{
                encontrado = false;
            }
        }
        filTemp --;
    } while (encontrado);
    
    return p;
}

// calcular puntaje partiendo desde la posicion f+1,C  hacia inferior-izquierdo
function calcularPuntajeII(fila, columna, color){
    var p = 0;
    var encontrado = false;
    var colTemp = parseInt(columna);
    var filTemp = parseInt(fila) + 1;

    //console.log(arrMovimientos);
    do {
        for (var index = 0; index < arrMovimientos.length; index++) {
            if(arrMovimientos[index][1] == filTemp && arrMovimientos[index][2] == colTemp 
            && arrMovimientos[index][3] == color){
                p ++;
                encontrado = true;
                break;
            }else{
                encontrado = false;
            }
        }
        filTemp ++;
    } while (encontrado);
    
    return p;
}

// calcular puntaje partiendo desde la posicion f+1,C+1  hacia inferior-derecha
function calcularPuntajeID(fila, columna, color){
    var p = 0;
    var encontrado = false;
    var colTemp = parseInt(columna) + 1;
    var filTemp = parseInt(fila) + 1;

    //console.log(arrMovimientos);
    do {
        for (var index = 0; index < arrMovimientos.length; index++) {
            if(arrMovimientos[index][1] == filTemp && arrMovimientos[index][2] == colTemp 
            && arrMovimientos[index][3] == color){
                p ++;
                encontrado = true;
                break;
            }else{
                encontrado = false;
            }
        }
        colTemp ++;
        filTemp ++;
    } while (encontrado);
    
    return p;
}