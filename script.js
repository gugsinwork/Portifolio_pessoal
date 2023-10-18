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