
function fazerLogin(event){
    event.preventDefault()
    let usuario=document.getElementById("usuario").value;
    let senha=document.getElementById("senha").value;
    if (usuario === "admin" && senha === "123"){
    window.location.href ="formulariojs.html";
    }
    else{
        alert("Usario ou senha invalidos")
    }
}