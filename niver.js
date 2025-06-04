document.addEventListener('DOMContentLoaded', function () {
    const confetesContainer = document.querySelector('.confetes');
    
    function criarConfete() {
        const confete = document.createElement('div');
        confete.classList.add('confete');
        
        // Tamanho aleatório dos confetes
        confete.style.width = `${Math.random() * 15 + 5}px`;
        confete.style.height = confete.style.width;

        // Posição aleatória dos confetes
        confete.style.left = `${Math.random() * window.innerWidth}px`;

        // Cor aleatória dos confetes
        confete.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        // Adicionar o confete à tela
        confetesContainer.appendChild(confete);

        // Remover o confete depois de ele desaparecer
        setTimeout(() => {
            confete.remove();
        }, 4000); // Tempo de vida do confete (igual ao tempo da animação)
    }

    // Gerar confetes a cada 100ms
    setInterval(criarConfete, 100);
});