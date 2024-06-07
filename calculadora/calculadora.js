

function setResultado(value){
    document.getElementById('resultado').innerHTML = value;
}
function getResultado(){
    return(document.getElementById('resultado').innerHTML);
}


function add(key){
    var resultado = getResultado();
    if (resultado!='0' || isNaN(key)) setResultado(resultado + key);
    else setResultado(key);
}

function calc(){
     var resultado = eval(getResultado());
     setResultado(resultado);
}

function del(){
    setResultado(0);
}
const mensaje=function(resultado){

}
setTimeout(3000);
