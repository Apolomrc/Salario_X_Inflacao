import input from 'readline-sync';

var salariosMinimos = [
    { ano: 2010, salario: 510.00 },
    { ano: 2011, salario: 545.00 },
    { ano: 2012, salario: 622.00 },
    { ano: 2013, salario: 678.00 },
    { ano: 2014, salario: 724.00 },
    { ano: 2015, salario: 788.00 },
    { ano: 2016, salario: 880.00 },
    { ano: 2017, salario: 937.00 },
    { ano: 2018, salario: 954.00 },
    { ano: 2019, salario: 998.00 },
    { ano: 2020, salario: 1045.00 },
];

var inflacao = [
    { ano: 2010, ipca: 5.91 },
    { ano: 2011, ipca: 6.50 },
    { ano: 2012, ipca: 5.84 },
    { ano: 2013, ipca: 5.91 },
    { ano: 2014, ipca: 6.41 },
    { ano: 2015, ipca: 10.67 },
    { ano: 2016, ipca: 6.29 },
    { ano: 2017, ipca: 2.95 },
    { ano: 2018, ipca: 3.75 },
    { ano: 2019, ipca: 4.31 },
    { ano: 2020, ipca: 4.52 },
];

let opcao;

do {
    console.log("Escolha uma das alternativas: ");
    console.log("1 - Listar os salarios minimos de 2010 à 2020");
    console.log("2 - Listar o índice IPCA de 2010 a 2020");
    console.log("3 - Comparação entre o percentual de aumento salarial e a inflação (IPCA)");
    console.log("0 - Sair do programa");
    opcao = input.question("Digite a opção desejada: ");

    switch (opcao) {
        case "1": 
            console.log("Listando salários mínimos de 2010 à 2020...");
            for (let valor in salariosMinimos) {
                let salarios = salariosMinimos[valor];
                console.log(`Ano: ${String(salarios.ano).padStart(40, ".")}`);
                console.log(`Salario mínimo: ${"R$ ".padStart(28, ".")}${salarios.salario.toFixed(2).replace(".", ",")}\n`);
            };
            break; 

        case "2":
            console.log("Listando índice IPCA de 2010 à 2020: ");
            for (let valor in inflacao) {
                let inflacoes = inflacao[valor];
                console.log(`Ano: ${String(inflacoes.ano).padStart(25, ".")}`);
                console.log(`Inflação IPCA: ${String(inflacoes.ipca.toFixed(2)).padStart(15, ".")}%\n`);
            };
            break;

        case "3":
            console.log("Comparando o percentual de aumento salarial e o IPCA: ");

            for (let valor in salariosMinimos) {

            let salarios = salariosMinimos[valor];
            let salarioAtual = salarios.salario;
            let salarioAnterior = salariosMinimos[valor - 1]?.salario;
            let inflacoes = inflacao[valor];
        
                console.log(`Ano: ${String(salarios.ano).padStart(40, ".")}`);
                console.log(`Salario mínimo: ${"R$ ".padStart(28, ".")}${salarios.salario.toFixed(2).replace(".", ",")}`);

            let crescimento;

                if (valor == 0) {
                    crescimento = "-"

                } else {

                  let diferenca = (salarioAtual - salarioAnterior);
                  crescimento = (diferenca / salarioAnterior)*100;
                  crescimento = crescimento.toFixed(2);
                }

                console.log(`Crescimento Salarial: ${String(crescimento).replace(".", ",").padStart(23, ".")}%`);
                console.log(`Inflação IPCA: ${String(inflacoes.ipca).replace(".", ",").padStart(30, ".")}%\n`);

        };
            break;

        default:
            console.log("Opção inválida! Tente novamente.");
            break;
    };

} while (opcao == 0);

console.log("Programa encerrado.");