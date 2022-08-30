let valorN="";

function ler_candidato(numeroCandidado){

    if(numeroCandidado == 22){
        document.getElementById("nomeCandidato").innerHTML = "Nome : Bolsonario";
        document.getElementById("cargo").innerHTML = "Cargo : PRESIDENTE";
        document.getElementById("fotoC").innerHTML = `<img src="Image/Bolsonario.png" />`;
    }
    if(numeroCandidado == 13){
        document.getElementById("nomeCandidato").innerHTML = "Nome : Lula";
        document.getElementById("cargo").innerHTML = "Cargo : PRESIDENTE";
        document.getElementById("fotoC").innerHTML = `<img src="Image/Lula.png" />`;
    }
    if(numeroCandidado == 12){
        document.getElementById("nomeCandidato").innerHTML = "Nome :  Ciro";
        document.getElementById("cargo").innerHTML = "Cargo : PRESIDENTE";
        document.getElementById("fotoC").innerHTML = `<img src="Image/Ciro.png" />`;
        
    } 
    if(numeroCandidado == 15){
        document.getElementById("nomeCandidato").innerHTML = "Nome : Simone";
        document.getElementById("cargo").innerHTML = "Cargo : PRESIDENTE";
        document.getElementById("fotoC").innerHTML = `<img src="Image/Simone.png" /> `;
    } 
    if(numeroCandidado == 44){
        document.getElementById("nomeCandidato").innerHTML = "Nome : Soraya";
        document.getElementById("cargo").innerHTML = "Cargo : PRESIDENTE";
        document.getElementById("fotoC").innerHTML = `<img src="Image/Soraya.png" /> `;
    }
    if(numeroCandidado == 90){
        document.getElementById("nomeCandidato").innerHTML = "Nome : Marcal";
        document.getElementById("cargo").innerHTML = "Cargo : PRESIDENTE";
        document.getElementById("fotoC").innerHTML = `<img src="Image/Marcal.png" /> `;
    }
}

function confirma() {
    var valor1 = parseInt(document.getElementById("campo1").value);
    var valor2 = parseInt(document.getElementById("campo2").value);
    var candidado = (valor1 * 10) + valor2;
   
    if (sessionStorage.getItem(candidado) !== null) {
        votos = parseInt(sessionStorage.getItem(candidado)) + 1;
        sessionStorage.setItem(candidado, votos);
    } else {
        sessionStorage.setItem(candidado, 1);
        
    }
    alert("Confirmado voto no candidato " + candidado);
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
    document.getElementById("nomeCandidato").innerHTML = "";
    document.getElementById("cargo").innerHTML = "";
    document.getElementById("fotoC").innerHTML = "";
    valorN='';
    
}

function clicou(valor) {
    var valor1 = document.getElementById("campo1").value;
    var valor2 = document.getElementById("campo2").value;
        
    if (valor1 == "") {
        document.getElementById("campo1").value = valor;
        valorN= valorN + valor;
       
    } else if (valor2 == "") {
        document.getElementById("campo2").value = valor;
        valorN= valorN + valor;
        
    }
   ler_candidato(valorN);
}

function branco() {
    alert("clicou em BRANCO")
    //document.getElementById("resultado").innerHTML="Bolsonario"
}

function corrige() {
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
    document.getElementById("nomeCandidato").innerHTML = "";
    document.getElementById("fotoC").innerHTML = "";
    document.getElementById("cargo").innerHTML = "";
    valorN='';
}

function confirma1() {
    var valor1 = parseInt(document.getElementById("campo1").value);
    var valor2 = parseInt(document.getElementById("campo2").value);
    var candidado = (valor1 * 10) + valor2;
    if (sessionStorage.getItem(candidado) !== null) {
        votos = parseInt(sessionStorage.getItem(candidado)) + 1;
        sessionStorage.setItem(candidado, votos);
    } else {
        sessionStorage.setItem(candidado, 1);
        
    }
    alert("Confirmado voto no candidato " + candidado)
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
    document.getElementById("nomeCandidato").innerHTML = "";
    document.getElementById("fotoC").innerHTML = "";
    valorN='';
    
}

function resultado() {
    document.getElementById("resultado1").innerHTML=""
    for(i=0;i<100;i++){
        if (sessionStorage.getItem(i) !== null) {
            //alert(i);
            document.getElementById("resultado1").innerHTML += "Candidado "+i+" tem: "+sessionStorage.getItem(i)+" votos<br/>";
        }
    }
}
