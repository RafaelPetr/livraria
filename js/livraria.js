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
    }
];

MostrarTodos = () => {
    console.log("Mostrar todos os livros e informações");
    for (let i = 0; i < categoriaLivros.length; i++) {
        console.log(categoriaLivros[i].livros);
    }
}

ContarCategoriasLivros = () => {
    console.log("Contar o número de categorias e o número de livros de cada categoria");

    let numeroDeCategorias = categoriaLivros.length;
    console.log(`Número de categorias é ${numeroDeCategorias}`);

    for (let i = 0; i < categoriaLivros.length; i++) {
        numeroDeLivros = categoriaLivros[i].livros.length;
        console.log(`Número de livros da categoria ${categoriaLivros[i].categoria} é ${numeroDeLivros}`);
    }
}

ContarAutores = () => {
    console.log("Contar o número de autores");
    let numeroDeAutores = 0;

    for (let i = 0; i < categoriaLivros.length; i++) {
        for (let j = 0; j < categoriaLivros[i].livros.length; j++) {
            numeroDeAutores += categoriaLivros[i].livros[j].autores.length
        }
    }

    console.log(`Número de autores é ${numeroDeAutores}`);
}

LivrosDoAutor = (nomeAutor) => {
    console.log("Mostrar livros com o nome do autor: " + nomeAutor);
    let livrosAutor = [];

    for (let i = 0; i < categoriaLivros.length; i++) {
        for (let j = 0; j < categoriaLivros[i].livros.length; j++) {
            for (let k = 0; k < categoriaLivros[i].livros[j].autores.length; k++) {
                if (categoriaLivros[i].livros[j].autores[k] == nomeAutor) {
                    livrosAutor.push(categoriaLivros[i].livros[j]);
                }
            }
        }
    }
    console.log(livrosAutor);
}