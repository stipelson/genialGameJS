// Metodos 

function setDatos(newDatos){
    this.data = newDatos;
}
function setPadre(newPadre){
    this.parent = newPadre;
}
function numeroDeHijos(){
    return this.hijos.length;
}
function tieneHijos(){
    return this.numeroDeHijos() > 0;
}
function setHijos(newHijos){

    newHijos.foreach(function(hijo){
        hijo.setPadre(this);
    });
    this.hijos = newHijos;
}
function addHijos(newHijos){

    newHijos.foreach(function(hijo){
        hijo.setPadre(this);
    });
    this.hijos = concat(newHijos);
}
function insertarArrayDatosAHijos(arrayDatos, propiedad){

    arrayDatos.foreach(function(datos, index){
        node = new Node(datos[propiedad], datos);
        node.setPadre(this);
        this.hijos.push(node);
        node = null;
    });
}
function addHijo(newHijo){
    newHijo.padre = this;
    this.hijos.push(newHijo);
}

// clase
function Nodo(id, datos){ 
   	this.datos = datos 
   	this.hijos = []
    this.padre = null
    this.id = id
    this.setDatos = setDatos;
    this.setPadre = setPadre;
    this.numeroDeHijos = numeroDeHijos;
    this.tieneHijos = tieneHijos;
    this.setHijos = setHijos;
    this.addHijos = addHijos;
    this.insertarArrayDatosAHijos = insertarArrayDatosAHijos;
    this.addHijo = addHijo;
}

