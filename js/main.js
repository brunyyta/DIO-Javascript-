function botao(){
    document.getElementById("valeu").innerHTML = "<b>I appreciate your click</b>";
}

function redirecionar(){
    window.open("http://www.google.com");
    window.location.href = "http://www.google.com";
}

function mouseOver(element){
    element.innerHTML = "Obrigado por passar o mouse";
}

function voltar(element){
    element.innerHTML = "Voltou";
}

function load(){
    alert("Carregou!");
}

function change(element){
    console.log(element.value);
}