function turnoCOM() {
    console.log('********** ejecutando turno de COM');
    // ejecutando sleed para tener un tiempo de espera en el juego de la maquina
    sleep(50).then(() => {
      realizarMovimientoCOM();
      console.log('****** terminado el turno de COM')
      turno = 1;
      pintarTurno();
    });
}

function realizarMovimientoCOM(){
  var realizado = false;
  var tempRotation = rotationNumber; 

  for (var rotacion = 0; rotacion < 6; rotacion++) {
    //console.log('Intentos con rotacion: ' + rotacion);
    rotationNumber = rotacion;
    for(var ficha = 0; ficha < fichasJDos.length; ficha++){
      //console.log('ficha: ' + ficha);

      for (var block = 0; block < fichasJDos[ficha].length; block++) {
        //console.log('bloque: ' + block);
        
        fichaEscogida = ["blockj", ficha, block, ficha];
        if( block == 0){
            fichaEscogida.push(1);
        }else{
            fichaEscogida.push(0);
        }

        if(probarMovimiento()){
          realizado = true;
          break;
        }

      }

      if (realizado) {
        break;
      }
    }
    if (realizado) {
        break;
      }
  }

  if (!realizado){
          realizado = true;
          alert('COM ya no tiene mas movimientos que puntuen');
  }

  rotationNumber = tempRotation;
  //console.log(fichaEscogida);
}

function probarMovimiento() {
  var bacios = document.querySelectorAll(".block,.block-s");
  var puntua = false;

  for (var blockId = 0; blockId < bacios.length; blockId++) {
    var block = bacios[blockId];
    var arrBlockId =  block.id.split("-");
    var blockFila = arrBlockId[1];
    var blockColumna = arrBlockId[2];

    if (fichaEscogida != null) {
      if(!blockOcupado(blockFila, blockColumna)){
        if(!block2Ocupado(blockFila, blockColumna)){
          if(!block2Desborde(blockFila, blockColumna)){
            var puntos = calcularPuntosMov(blockFila, blockColumna, 1);
            if (puntos[0][1] > 0 || puntos[1][1] > 0) {
              //console.log('posible con puntuación');
              //console.log(arrBlockId);
              //console.log(puntos);
              //console.log(puntosJugadores);
              realizarMovimiento(blockFila, blockColumna, 1);
              // pintar y guardar puntos del bloque 1
              pintarPuntos(puntos[0][0],puntos[0][1], 2);
              // console.log(fichasJUno[fichaEscogida[1]]);
              // pintar y guardar puntos del bloque 1
              pintarPuntos(puntos[1][0],puntos[1][1], 2);

              obtenerNuevaFicha(fichaEscogida[1], 1);
              // ya movio el jugador com le toca a jugador
              setFichaEscogida();
              turno = 1;
              pintarTurno();
              var puntua = true;
              break;
            }
          }
        }
      }
    }
    if (puntua == true) {
      break;
    }
  }

  return puntua;
}

// funcion para el sleep
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}