document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.carrossel-track');
  const slides = document.querySelectorAll('.carrossel-slide');
  const proximoBotao = document.querySelector('.next');
  const botaoAnterior = document.querySelector('.prev');

  const ultimoIndiceSlide = slides.length - 2;
  let slideAtual = 1;

  function mostrarSlide(animado = true) {
    if (slides.length === 0) return;

    const larguraSlide = slides[0].offsetWidth;
    if (!animado) {
      container.style.transition = 'none';
    } else {
      container.style.transition = 'transform 0.5s ease-in-out';
    }
    container.style.transform = `translateX(-${slideAtual * larguraSlide}px)`;

    if (animado) {
      container.addEventListener('transitionend', lidarComTransicaoFinal, {
        once: true,
      });
    }
  }

  function lidarComTransicaoFinal() {
    if (slideAtual === ultimoIndiceSlide + 1) {
      slideAtual = 1;
      mostrarSlide(false);
    } else if (slideAtual === 0) {
      slideAtual = ultimoIndiceSlide;
      mostrarSlide(false);
    }
  }

  proximoBotao.addEventListener('click', () => {
    slideAtual++;
    mostrarSlide();
  });

  botaoAnterior.addEventListener('click', () => {
    slideAtual--;
    mostrarSlide();
  });

  window.addEventListener('resize', mostrarSlide);
  mostrarSlide(false);
});