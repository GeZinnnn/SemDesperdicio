function verReceita1() {
    window.location.href = "./receitas/hamburguer.html"
}

function verReceita2() {
    window.location.href = "./receitas/bife.html"
}

function verReceita3() {
    window.location.href = "./receitas/ovo.html"
}

//login
function entrar(){
    alert("Login realizado com sucesso!");
}

const jsonReceitas = `
[
    {
        "nome": "Hamburguer",
        "descricao": "Delicioso hamburguer caseiro feito com carne moída."
    },
    {
        "nome": "Bife grelhado",
        "descricao": "Bife suculento grelhado no ponto certo."
    },
    {
        "nome": "Ovo frito",
        "descricao": "Ovo com gema mole e bordas crocantes."
    }
]
`;

const receitas = JSON.parse(jsonReceitas);

function mostrarReceitas() {
    const area = document.getElementById("area-receitas-json");
    
    area.innerHTML = "";

    receitas.forEach(receita => {
        const bloco = document.createElement("div");
        bloco.style.marginBottom = "15px";
        bloco.style.color = "#333";
        bloco.style.padding = "10px";
        bloco.style.backgroundColor = "white";

        const titulo = document.createElement("h3");
        titulo.textContent = receita.nome;

        const desc = document.createElement("p");
        desc.textContent = receita.descricao;

        bloco.appendChild(titulo);
        bloco.appendChild(desc);
        area.appendChild(bloco);
    });
}
