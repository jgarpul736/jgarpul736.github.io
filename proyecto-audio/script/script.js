const reproductor = document.getElementById('reproductor-audio');
    const fuente = document.getElementById('fuente-audio');
    const tituloEl = document.querySelector('.titulo-pista');

    document.querySelectorAll('.pista').forEach(boton => {
      boton.addEventListener('click', () => {
        const src = boton.dataset.src;
        const titulo = boton.dataset.title;

        fuente.src = src;
        reproductor.load();
        reproductor.play().catch(() => {});

        tituloEl.textContent = titulo;

        document.querySelectorAll('.pista').forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');
      });
    });