let valorN="";

function ler_candidato(numeroCandidado){

    if(numeroCandidado == 22){
        document.getElementById("nomeCandidato").innerHTML = " Bolsonario";
        document.getElementById("fotoC").innerHTML = `<img src="Image/Bolsonario.png" />`;
    }
    if(numeroCandidado == 13){
        document.getElementById("nomeCandidato").innerHTML = " Lula";
        document.getElementById("fotoC").innerHTML = `<img src="Image/Lula.png" />`;
    }
    if(numeroCandidado == 12){
        document.getElementById("nomeCandidato").innerHTML = " Ciro";
        document.getElementById("fotoC").innerHTML = `<img src="Image/Ciro.png" />`;
        
    } 
    if(numeroCandidado == 15){
        document.getElementById("nomeCandidato").innerHTML = " Simone";
        document.getElementById("fotoC").innerHTML = `<img src="Image/Simone.png" /> `;
    } 

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
    valorN='';
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
    alert("Confirmado voto no candidato " + candidado)
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
    document.getElementById("nomeCandidato").innerHTML = "";
    document.getElementById("fotoC").innerHTML = "";
    valorN='';
    
}


function resultado() {
    document.getElementById("resultado").innerHTML=""
    for(i=0;i<100;i++){
        if (sessionStorage.getItem(i) !== null) {
            //alert(i);
            document.getElementById("resultado").innerHTML += "Cantidado "+i+" tem "+sessionStorage.getItem(i)+" votos<br/>";
        }
    }
}
