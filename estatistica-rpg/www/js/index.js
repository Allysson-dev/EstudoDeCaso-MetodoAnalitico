document.getElementById('roll-button').addEventListener('click', function() {
    const diceSelect = document.getElementById('dice-select');
    const diceValue = parseInt(diceSelect.value); // Convertendo o valor para número inteiro
    const resultDiv = document.getElementById('result');

    // Animação do dado
    const diceImg = document.getElementById('dice-img');
    diceImg.classList.add('roll');

    setTimeout(() => {
        let result;
        if (diceValue === 2) {
            // Se for D2, o resultado pode ser apenas 1 ou 2
            result = Math.floor(Math.random() * 2) + 1;
        } else {
            // Para os outros dados, o resultado é de 1 até o valor selecionado
            result = Math.floor(Math.random() * diceValue) + 1;
        }

        // Atualizar o resultado após a animação
        resultDiv.innerText = `Resultado: ${result}`;
        resultDiv.classList.add('show');
        diceImg.classList.remove('roll');
    }, 2000); // Tempo de duração da animação
});
