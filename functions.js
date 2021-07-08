let cantidadProcesos;

function crearCampos() {
    let procesos = document.getElementById("numProcesos").value;
    var textoAdvertencia = document.createElement("p");
    textoAdvertencia.innerHTML = "Por favor, introduzca los procesos segun el orden de llegada.";
    body.appendChild(textoAdvertencia)
    var cuerpoTabla = document.createElement("table");
        cuerpoTabla.style.marginLeft = "auto";
        cuerpoTabla.style.marginRight = "auto";
        cuerpoTabla.setAttribute("class","table")
        cuerpoTabla.style.border = "solid";
        cuerpoTabla.style.borderWidth = "1px";
        var bod = document.getElementById("body").appendChild(cuerpoTabla);
        
    for ( var i = 0; i <=  procesos; i++) { //CREACION DE LA TABLA SEGUN CLIENTE
        if (i == 0) { // CREAMOS LA CABECERA 
            cabecera = document.createElement("tr");
            let txt = document.createElement("th")
            txt.innerHML= "Proceso"
            txt.setAttribute("scope", "row");
            cabecera.appendChild(txt);
            
            let txt1 = document.createElement("th");
            txt1.innerHTML = "Llegada";
            cabecera.appendChild(txt1);
            let txt2 = document.createElement("th");
            txt2.innerHTML = "Tiempo "
            cabecera.appendChild(txt2);
            cuerpoTabla.appendChild(cabecera);
        } 
        else { //CREAMOS EL CUERPO DE LA TABLA
        var fila = document.createElement("tr");
        let process = document.createElement("th");
        process.innerHTML = "Proceso " + i;
        fila.appendChild(process)
        
        let celda = document.createElement("th");
        let inputs = document.createElement("input");
        celda.appendChild(inputs);
        inputs.setAttribute("id",i+"e");
        fila.appendChild(celda);

        let celda2 = document.createElement("th");
        let input2= document.createElement("input");
        celda2.appendChild(input2);
        input2.setAttribute("id", i+"t");
        fila.appendChild(celda2);

        cuerpoTabla.appendChild(fila)
        //console.log(input2.id);
        //console.log(inputs.id);
        }
    }
    cantidadProcesos = procesos;
    let botonGG = document.createElement("button");
    botonGG.setAttribute("onclick", "crearGraficas();");
    botonGG.innerHTML = "Generar FCFS";
    botonGG.setAttribute("onclick", "crearGraficas();")
    var bodi = document.getElementById("body");
    bodi.appendChild(botonGG);
}



function crearGraficas() {
    crearGraficaFCFS();
    crearGraficaSJF();
    //realizo esta funcion si consigo realizar algun otro algoritmo para que sea llamado tambien 
}


function crearGraficaFCFS (){
    console.log(cantidadProcesos);
    let puntero=0
    var totaltime = 0;
    var texto = document.createElement("h2")
    var txt = document.getElementById("body").appendChild(texto);
    texto.innerHTML = "First Come, First Served (FCFS)"
    var cuerpoTabla = document.createElement("table");
        cuerpoTabla.setAttribute("class", "tablaEspecial");
        cuerpoTabla.style.marginLeft = "auto";
        cuerpoTabla.style.marginRight = "auto";
        cuerpoTabla.style.textAlign = "center";
        cuerpoTabla.style.justifyContent = "center";
        cuerpoTabla.style.border = "solid";
        cuerpoTabla.style.borderWidth = "1px";
        var bod = document.getElementById("body").appendChild(cuerpoTabla);
    for (let x = 0; x <= cantidadProcesos ; x++) {
        
        if (x == 0) { // CREAMOS LA CABECERA 
            cabecera = document.createElement("tr");
            
            let txt = document.createElement("th")
            txt.innerHTML= "Procesos"
            txt.setAttribute("scope", "row");
            cabecera.appendChild(txt);
            
            let txt1 = document.createElement("th");
            txt1.innerHTML = "Llegada";
            cabecera.appendChild(txt1);

            let add = document.createElement("th")
            add.innerHTML = "Tiempo";
            cabecera.appendChild(add);

            let init = document.createElement("th");
            init.innerHTML = "Inicio";
            cabecera.appendChild(init);

            let txt2 = document.createElement("th");
            txt2.innerHTML = "Fin"
            cabecera.appendChild(txt2);
            
            let txt3 = document.createElement("th");
            txt3.innerHTML = "T"
            cabecera.appendChild(txt3)

            let txt5 = document.createElement("th");
            txt5.innerHTML = "E"
            cabecera.appendChild(txt5);

            let txt4 = document.createElement("th");
            txt4.innerHTML = "P"
            cabecera.appendChild(txt4);

            cuerpoTabla.appendChild(cabecera);
        } 
        // usamos los id de la primera tabla para asiganr los valores. Xt seria el valor de tiempo, Xe seria el valor de llegada
        else { //CREAMOS EL CUERPO DE LA TABLA 
            
            
            var fila = document.createElement("tr");

            let process = document.createElement("td");
            process.innerHTML = "Proceso " + x;                     // FILA NOMBRAR LOS PROCESOS
            fila.appendChild(process)

            let llegadas = document.createElement("td");
            llegada = document.getElementById(x+"e").value;         // METER LA LLEGADA DEL PROCESO
            llegadas.innerHTML = llegada
            llegadas.setAttribute("id", "llegadaProceso"+x)
            fila.appendChild(llegadas);

            let tiempos = document.createElement("td");
            tiempo =  document.getElementById(x+"t").value;
            tiempos.innerHTML = tiempo;                               //METER EL TIEMPO QUE TARDA
            fila.appendChild(tiempos);
            tiempos.setAttribute("id", "id", "tiempoProceso"+x)
            

            let inicios = document.createElement("td");
            inicios.innerHTML = puntero                                //CREO PUNTERO QUE RECORRE LOS TIEMPOS, LO INICIO EN 0
            fila.appendChild(inicios);
            inicios.setAttribute("id", "comienzoProceso"+x);
            

            let fin = document.createElement("td");
            puntero = puntero + parseInt(document.getElementById(x+"t").value)     // FIN DEL PROCESO= DONDE SE ENCUENTRA PUNTERO + TIEMPO QUE TARDA
            fin.innerHTML = puntero;
            fila.appendChild(fin)
            fin.setAttribute("id", "finProceso" +x);
            

            let tiempoRespuesta= document.createElement("td");
            respuesta = puntero-llegada;
            tiempoRespuesta.innerHTML = respuesta;                  // TIEMPO RESPUESTA = DONDE SE ENCUENTRA PUNTERO - LLEGADA DEL PROCESO
            fila.appendChild(tiempoRespuesta)

            let espera = document.createElement("td");
            valor = respuesta-tiempo;                               // TIEMPO ESPERA = TIEMPO RESPUESTA - TIEMPO PROCESO
            espera.innerHTML=valor;
            fila.appendChild(espera)
            
            let penalizacion = document.createElement("td");
            valor1 = valor/tiempo;                  
            penalizacion.innerHTML = valor1;                        // PENALIZACION = TIEMPO ESPERA / TIEMPO DEL PROCESO
            fila.appendChild(penalizacion)

            cuerpoTabla.appendChild(fila)
            totaltime = totaltime+parseInt(tiempo);
            
            
        }
    }
    //CREAMOS LA GRAFICA PARA REPRESENTAR LOS DATOS OFRECIDOS 
    var cuerpoTabla2 = document.createElement("table");
    cuerpoTabla2.setAttribute("id", "tablaEspecial2");
    cuerpoTabla2.style.marginRight = "auto";
    cuerpoTabla2.style.marginLeft = "auto";
    for (g=0; g <= cantidadProcesos; g++){
        if (g!=cantidadProcesos) {
            let filasInformacion = document.createElement("tr");
            for (k=0; k <= totaltime+1; k++){
                if (k==0) {
                    //PRIMERA COLUMNA TEXTOS INFORMATIVOS
                    let celdatxt = document.createElement("th");
                    celdatxt.innerHTML = "Proceso " + (g+1);
                    filasInformacion.appendChild(celdatxt);
                } else{
                    //RESTO DE COLUMNAS RELLENOS DE COLOR
                    let celdaColor = document.createElement("td");
                    filasInformacion.appendChild(celdaColor);
                    celdaColor.setAttribute("id", "Proceso"+(g+1)+"Celda"+k);
                }
            }
            cuerpoTabla2.appendChild(filasInformacion)
        } else{
            let filaFinal = document.createElement("tr");  
            for (z=0; z<=totaltime+1;z++) {
                if (z==0) {
                    let tex = document.createElement("th");
                    tex.innerHTML = "Tiempos";
                    filaFinal.appendChild(tex);
                } else{
                    //COLUMNAS DONDE APARECE EL TIEMPO
                    let aditionNumbers = document.createElement("td");
                    aditionNumbers.innerHTML = z-1;
                    filaFinal.appendChild(aditionNumbers);
                }
            }
            cuerpoTabla2.appendChild(filaFinal);
        }
    }
    var bod = document.getElementById("body").appendChild(cuerpoTabla2);

    for (p=1; p <= cantidadProcesos; p++) {
        var verdeComienzo = parseInt(document.getElementById("comienzoProceso"+p).innerHTML);
        var verdeFinal = parseInt(document.getElementById("finProceso"+p).innerHTML);
        var rojollegada = parseInt(document.getElementById("llegadaProceso"+p).innerHTML);

        for (u = 1; u <= totaltime+1; u++){
            if (u >= verdeComienzo && u <= verdeFinal) {
                pintarCelda = document.getElementById("Proceso"+p+"Celda"+u);
                pintarCelda.style.backgroundColor = "green";
            }
            if (u >= rojollegada+1 && u <verdeComienzo+1) {
                pintarCelda = document.getElementById("Proceso"+p+"Celda"+u);
                pintarCelda.style.backgroundColor = "red";
            }
        }
    }

}

