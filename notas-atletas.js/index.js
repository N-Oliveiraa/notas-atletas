// 1. Criando uma matriz de objetos contendo o nome do atleta e suas cinco notas
let atletas = [
    { nome: "Cesar Abascal", notas: [10, 9.34, 8.42, 10, 7.88] },
    { nome: "Fernando Puntel", notas: [8, 10, 10, 7, 9.33] },
    { nome: "Daiane Jelinsky", notas: [7, 10, 9.5, 9.5, 8] },
    { nome: "Bruno Castro", notas: [10, 10, 10, 9, 9.5] }
];


// 2. Utilizando o laço for para percorrer todos os atletas
for (let i = 0; i < atletas.length; i++) {
    let nomeAtleta = atletas[i].nome;
    let notas = [...atletas[i].notas];

    // 3. Utilizando o método .sort() para ordenar as notas
    notas = notas.sort((a, b) => a - b);


    // 4. Utilizando .slice() para eliminar a maior e menor nota
    let notasValidas = notas.slice(1, 4);


    // 5. Utilizando .forEach() para realizar a soma das notas
    let soma = 0;
    notasValidas.forEach(nota => {
        soma += nota;
    });


    // 6. Utilizando .length para calcular a média corretamente
    let media = soma / notasValidas.length;


    // 7. Utilizando console.log() para exibir os resultados
    console.log(`Atleta: ${nomeAtleta}`);
    console.log(`Notas Obtidas: ${atletas[i].notas.join(", ")}.`);
    console.log(`Média Válida: ${media.toFixed(2)}`);
    console.log(""); // Linha em branco para separar os resultados
}