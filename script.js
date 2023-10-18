function calcularImovel() {
    let m2 = 3000;
    let preco = 0;
    let quartos = document.getElementById('quarto').value;
    let metragem = document.getElementById('m2').value;

    if (metragem <= 0 || quartos <= 0) {
        window.alert('Valores inválidos. Certifique-se de preencher metragem e quartos com valores positivos.');
    } else if (metragem < 100) {
        preco = metragem * (m2 * 1.2);
        window.alert(`O preço é R$${preco}`);
    } else if (metragem < 200) {
        preco = metragem * (m2 * 1.5);
        window.alert(`O preço é R$${preco}`);
    } else {
        preco = metragem * (m2 * 2);
        window.alert(`O preço é R$${preco}`);
    }
    return preco;
}
function calculaAp() {
     preco_ap = parseFloat(document.getElementById('preco_ap').value);
     m2_ap = parseFloat(document.getElementById('m2ap').value);
     quartos = parseInt(document.getElementById('quartoap').value);
     andar = parseInt(document.getElementById('andar').value);
    let preco = 0;

    if ( m2_ap <= 0 || quartos <= 0) {
        window.alert('Valores inválidos.');
    } else {
        switch (quartos) {
            case m2_ap < 100:
                preco = (m2_ap * preco_ap * 1.2) + (andar * 15000);
                break;
            case m2_ap < 200:
                preco = (m2_ap * preco_ap * 1.5) + (andar * 15000);
                break;
            default:
                preco = (m2_ap * preco_ap * 2) + (andar * 15000);
                break;
        }

        window.alert("o preço é R$" + preco);
    }
}