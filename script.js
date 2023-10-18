function calcularImovel(metragem, quartos){

    let m2 = 3000;
        let preco = 0;
        quartos = document.getElementById('quarto').value
        metragem = document.getElementById('m2').value
        switch (metragem, quartos) {
            case 1:
                default:
                    window.alert(`o preço é R$${preco}`)
                    break;
            case 2:
    
                preco = metragem * (m2*1.2)
                window.alert(`o preço é R$${preco}`)
    
            case 3:
    
                preco = metragem * (m2*1.5)
                window.alert(`o preço é R$${preco}`)
                break;
            case quartos > 3:
    
                preco = metragem * (m2*2)
                window.alert(`o preço é R$${preco}`)
                break;
        }
        return preco
    }