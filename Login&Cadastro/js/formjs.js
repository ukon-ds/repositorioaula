function VerificarCadastro(event){
    // Se o handler for chamado a partir de onclick sem event, event pode ser undefined
    if (event && typeof event.preventDefault === 'function') event.preventDefault();

    let email = document.getElementById("Email") ? document.getElementById("Email").value : "";
    let senha = document.getElementById("Password") ? document.getElementById("Password").value : "";
    let telefone = document.getElementById("exampleTEL") ? document.getElementById("exampleTEL").value : "";

    if (email == "" || senha == "" || telefone == "") {
        alert("Preencha todos os campos!!");
        return;
    }

    const resultadoEl = document.querySelector(".resultado");
    if (resultadoEl) {
        resultadoEl.innerHTML = `
            <p>Email: ${email}</p>
            <p>Senha: ${senha}</p>
            <p>Telefone: ${telefone}</p>
        `;
    } 
}

function LimparCampos(event){
    if (event && typeof event.preventDefault === 'function') event.preventDefault();
    const form = document.getElementById("form") || document.querySelector("form");
    if (form) form.reset();
    const resultadoEl = document.querySelector(".resultado");
    if (resultadoEl) resultadoEl.innerHTML = '';
}