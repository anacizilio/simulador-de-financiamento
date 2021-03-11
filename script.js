function simular() {

    // Recebendo os valores da tela e convertendo para numérico
    var valor = document.getElementById("valor").valueAsNumber;
    var prazoAnos = document.getElementById("prazoAnos").valueAsNumber;
    var jurosAno = document.getElementById("jurosAno").valueAsNumber;

    // Variáveis para o cálculo
    var prazoMes = prazoAnos * 12;
    var jurosMes = ((1 + jurosAno) ** (1/12)) - 1;
    var jurosAcumulado = 0;
    var jurosPrestacao = new Array(prazoMes);
    var sac = valor / prazoMes;

    // Cálculo juros acumulados
    for (var i = 0; i < prazoMes; i++) {
        jurosPrestacao[i] = (valor - (i * sac)) * jurosMes;
        jurosAcumulado += jurosPrestacao[i];
    }

     // passando os valores calculados para a tela
    document.querySelector('#prazoMes').value = prazoMes;
    document.querySelector('#jurosMes').value = jurosMes;
    document.querySelector('#jurosAcumulado').value = jurosAcumulado;

    // Montando tabela
    let tabela = document.querySelector('#tabela');
    let tabelaPrestacao = document.createElement("th");
        tabelaPrestacao.textContent = 'Prestação';
        tabela.appendChild(tabelaPrestacao);

    let tabela2 = document.querySelector('#tabela');
    let tabelaAmortizacao = document.createElement("th");
        tabelaAmortizacao.textContent = 'Amortização';
        tabela2.appendChild(tabelaAmortizacao);

    let tabela3 = document.querySelector('#tabela');
    let tabelaJuros = document.createElement("th");
        tabelaJuros.textContent = 'Juros';
        tabela3.appendChild(tabelaJuros);
    
    let tabela4 = document.querySelector('#tabela');
    let tabelaTotal = document.createElement("th");
        tabelaTotal.textContent = 'Total';
        tabela4.appendChild(tabelaTotal);

    sacString = sac.toFixed(2);

    for (var i = 0; i < 5; i++){
        let linhaTabela = document.createElement("tr");
        linhaTabela.innerHTML = `<td>${(i+1)}</td>` +
                                `<td>${sacString}</td>` +
                                `<td>${jurosPrestacao[i].toFixed(2)}</td>` +
                                `<td>${(sac + jurosPrestacao[i]).toFixed(2)}</td>`;
        tabela.appendChild(linhaTabela);
    }
}