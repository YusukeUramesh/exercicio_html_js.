const form = document.getElementById('campo-form');

document.getElementById('btn').disabled = valor1 < valor2

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const campoA = document.getElementById('valor1');
    const campoB = document.getElementById('valor2');
    const mensagemSucesso = 'Parabéns! B é maior que A!';
    const mensagemInvalido = 'B não é maior que A! tente outra vez!';

    formEValido = campoA.value < campoB.value;
    if (formEValido) {
        const cMSucesso = document.querySelector('.sucesso');
        cMSucesso.innerHTML = mensagemSucesso;
        cMSucesso.style.display = 'block'

        campoA.value = '';
        campoB.value = '';

    } else {
        const cMInvalido = document.querySelector('.invalido');
        cMInvalido.innerHTML = mensagemInvalido;
        cMInvalido.style.display = 'block'

    }

})

console.log(form);