const categoriaLivros = [
    {
        categoria: "Tecnologia",
        livros: [
            {
                titulo: "Algoritmos de Destruição em Massa",
                autores: ["Cathy O’Neil"]
            },
            {
                titulo: "Big Tech: A ascensão dos dados e a morte da política",
                autores: ["Evgeny Morozov"]
            },
            {
                titulo: "Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy",
                autores: ["Cathy O’Neil"]
            },
        ]
    },
    {
        categoria: "Ciências Humanas e Sociais",
        livros: [
            {
                titulo: "Sapiens: Uma breve história da humanidade",
                autores: ["Yuval Noah Harari"]
            },
            {
                titulo: "Homo Deus: Uma breve história do amanhã",
                autores: ["Yuval Noah Harari"]
            },
            {
                titulo: "O conto da aia",
                autores: ["Margaret Atwood"]
            }
        ]   
    },
];

ResetarSecoes = () => {
    document.getElementById("tabela").style.display = "none";
    document.getElementById("numero").style.display = "none";
}

MostrarTodos = () => {
    ResetarSecoes();
    document.getElementById("tabela").style.display = "block";

    let antigoTbody = document.getElementById("tbody");
    let novoTbody = document.createElement("tbody");

    for (let i = 0; i < categoriaLivros.length; i++) {
        for (let j = 0; j < categoriaLivros[i].livros.length; j++) {
            let tr = document.createElement("tr");

            let titulo = document.createElement("td");
            titulo.innerText = categoriaLivros[i].livros[j].titulo;

            let autores = document.createElement("td");
            autores.innerText = categoriaLivros[i].livros[j].autores;

            tr.appendChild(titulo);
            tr.appendChild(autores);
            novoTbody.appendChild(tr);
        }
    }
    novoTbody.id = "tbody";
    antigoTbody.parentNode.replaceChild(novoTbody, antigoTbody);
}

ContarCategoriasLivros = () => {
    ResetarSecoes();
    novaSecao = document.createElement("section");

    let numeroDeCategorias = document.createElement("p");
    numeroDeCategorias.textContent = `Número de categorias é ${categoriaLivros.length}`;
    novaSecao.appendChild(numeroDeCategorias);

    for (let i = 0; i < categoriaLivros.length; i++) {
        let numeroDeLivros = document.createElement("p");
        numeroDeLivros.textContent = `Número de livros da categoria ${categoriaLivros[i].categoria} é ${categoriaLivros[i].livros.length}`;
        novaSecao.appendChild(numeroDeLivros);
    }
    novaSecao.id = "numero";
    novaSecao.style.display = "block";
    document.getElementById("numero").parentNode.replaceChild(novaSecao,document.getElementById("numero"));
}

ContarAutores = () => {
    ResetarSecoes();
    novaSecao = document.createElement("section");

    let numeroDeAutores = 0;

    for (let i = 0; i < categoriaLivros.length; i++) {
        for (let j = 0; j < categoriaLivros[i].livros.length; j++) {
            numeroDeAutores += categoriaLivros[i].livros[j].autores.length;
        }
    }

    let p = document.createElement("p");
    p.textContent = `Número de autores é ${numeroDeAutores}`;
    novaSecao.appendChild(p);

    novaSecao.id = "numero";
    novaSecao.style.display = "block";
    document.getElementById("numero").parentNode.replaceChild(novaSecao,document.getElementById("numero"));
}

LivrosDoAutor = (nomeAutor) => {
    ResetarSecoes();
    document.getElementById("tabela").style.display = "block";

    let antigoTbody = document.getElementById("tbody");
    let novoTbody = document.createElement("tbody");

    for (let i = 0; i < categoriaLivros.length; i++) {
        for (let j = 0; j < categoriaLivros[i].livros.length; j++) {
            for (let k = 0; k < categoriaLivros[i].livros[j].autores.length; k++) {
                if (categoriaLivros[i].livros[j].autores[k] == nomeAutor) {
                    let tr = document.createElement("tr");

                    let titulo = document.createElement("td");
                    titulo.innerText = categoriaLivros[i].livros[j].titulo;

                    let autores = document.createElement("td");
                    autores.innerText = categoriaLivros[i].livros[j].autores;

                    tr.appendChild(titulo);
                    tr.appendChild(autores);
                    novoTbody.appendChild(tr);
                }
            }
        }
        novoTbody.id = "tbody";
        antigoTbody.parentNode.replaceChild(novoTbody, antigoTbody);
    }
}