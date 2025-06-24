document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navContainer = document.getElementById('nav-container');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (hamburgerBtn && navContainer) {
        hamburgerBtn.addEventListener('click', function() {
            hamburgerBtn.classList.toggle('active');
            navContainer.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Fecha o menu quando um link for clicado
                hamburgerBtn.classList.remove('active');
                navContainer.classList.remove('active');
            });
        });
    }
});

// Fecha o menu mobile ao clicar em um link do menu
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        navContainer.classList.remove('active');
        hamburgerBtn.classList.remove('active');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de pergunta do FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Itera sobre cada botão de pergunta para adicionar um evento de clique
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Encontra o item FAQ pai (o container de pergunta e resposta)
            const faqItem = question.closest('.faq-item');

            // Alterna a classe 'active' no item FAQ pai
            // Esta classe 'active' será usada no CSS para mostrar/esconder a resposta e girar a seta
            faqItem.classList.toggle('active');

            // Opcional: Fecha outros itens FAQ abertos
            faqQuestions.forEach(otherQuestion => {
                const otherFaqItem = otherQuestion.closest('.faq-item');
                if (otherFaqItem !== faqItem && otherFaqItem.classList.contains('active')) {
                    otherFaqItem.classList.remove('active');
                }
            });
        });
    });
});

// No seu arquivo scripts.js, dentro de document.addEventListener('DOMContentLoaded', () => { ... });

// 1. Seleciona o elemento da seta
const backToTopButton = document.getElementById('backToTopBtn');

// 2. Adiciona um "ouvinte de evento" de clique ao botão
if (backToTopButton) { // Verifique se o botão existe antes de adicionar o listener
    backToTopButton.addEventListener('click', () => {
        // Rola a página suavemente para o topo
        window.scrollTo({
            top: 0,           // Posição vertical: topo da página
            behavior: 'smooth' // Rola de forma suave
        });
    });
}

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Define um limite de rolagem para quando a seta deve aparecer
    // Ex: se o usuário rolou mais de 300px para baixo, a seta aparece.
    const scrollThreshold = 300; // Ajuste este valor

    if (backToTopButton) { // Verifique se o botão existe
        if (scrollPosition > scrollThreshold) {
            // Se a posição de rolagem for maior que o limite, adiciona a classe 'show'
            backToTopButton.classList.add('show');
        } else {
            // Caso contrário, remove a classe 'show'
            backToTopButton.classList.remove('show');
        }
    }
});