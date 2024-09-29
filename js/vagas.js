function listarVagas() {
    const vagas = JSON.parse(localStorage.getItem('vagas')) || [];
    return vagas;
}

function adicionarVaga(vaga) {
    const vagas = listarVagas();
    vagas.push(vaga);
    localStorage.setItem('vagas', JSON.stringify(vagas));
}

function removerVaga(index) {
    const vagas = listarVagas();
    vagas.splice(index, 1);
    localStorage.setItem('vagas', JSON.stringify(vagas));
}

document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const novaVaga = {
        placa: document.getElementById('placa').value,
        nome: document.getElementById('nome').value,
        apartamento: document.getElementById('apartamento').value,
        bloco: document.getElementById('bloco').value,
        modelo: document.getElementById('modelo').value,
        cor: document.getElementById('cor').value,
        vaga: document.getElementById('vaga').value
    };

    adicionarVaga(novaVaga); 
    alert('Cadastro realizado com sucesso!'); 

    this.reset();
});
