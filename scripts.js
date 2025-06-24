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

// Selecione os elementos do carrossel
const carouselTrack = document.querySelector('.carousel-track');
const carouselImages = document.querySelectorAll('.carousel-image');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const dotsContainer = document.querySelector('.carousel-dots');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0; // Começa na primeira imagem (índice 0)
const totalSlides = carouselImages.length;

// Função para mostrar um slide específico
function showSlide(index) {
    // Garante que o índice esteja dentro dos limites
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Move o track do carrossel para mostrar a imagem correta
    // A cada imagem, o track se move -100% * currentIndex
    carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Atualiza a classe 'active' nas imagens
    carouselImages.forEach((img, i) => {
        if (i === currentIndex) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });

    // Atualiza a classe 'active' nos pontos (dots)
    dots.forEach((dot, i) => {
        if (i === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Função para avançar para o próximo slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Função para voltar para o slide anterior
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Adiciona eventos de clique aos botões de navegação
if (prevButton) {
    prevButton.addEventListener('click', prevSlide);
}
if (nextButton) {
    nextButton.addEventListener('click', nextSlide);
}

// Adiciona eventos de clique aos indicadores de ponto
if (dotsContainer) {
    dotsContainer.addEventListener('click', (event) => {
        // Verifica se o clique foi em um 'dot'
        if (event.target.classList.contains('dot')) {
            // Pega o índice do slide a partir do atributo data-slide
            const slideIndex = parseInt(event.target.dataset.slide);
            showSlide(slideIndex);
        }
    });
}

// Inicializa o carrossel mostrando o primeiro slide
showSlide(currentIndex);

// Opcional: Adicionar auto-play
let autoPlayInterval = setInterval(nextSlide, 3500);
