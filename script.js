document.addEventListener('DOMContentLoaded', () => {
    const avanca = document.querySelectorAll('.btn-proximo');
    const passos = document.querySelectorAll('.passo');

    // Função para mostrar um passo e esconder os outros
    function mostrarPasso(idDoPasso) {
        passos.forEach(passo => {
            if (passo.id === idDoPasso) {
                passo.classList.add('ativo');
            } else {
                passo.classList.remove('ativo');
            }
        });
    }

    // Adiciona o evento de clique para todos os botões de "próximo"
    avanca.forEach(button => {
        button.addEventListener('click', function(){
            const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
            mostrarPasso(proximoPasso);
        });
    });

    // Garante que apenas o primeiro passo esteja ativo ao carregar a página
    mostrarPasso('passo-0');
});