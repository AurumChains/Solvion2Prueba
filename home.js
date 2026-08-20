    /* ── Menú móvil ── */
    document.getElementById('nav-toggle').addEventListener('click', () => {
      document.getElementById('nav-links').classList.toggle('open');
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => document.getElementById('nav-links').classList.remove('open'));
    });

    /* ── Hero rotator ── */
    (function heroRotator() {
      const slides = document.querySelectorAll('.hero-slide');
      const dotsWrap = document.getElementById('hero-dots');
      if (!dotsWrap || slides.length < 2) return;
      let idx = 0;

      dotsWrap.innerHTML = Array.from(slides).map((_, i) => `<button class="bc-dot${i === 0 ? ' active' : ''}" aria-label="Mensaje ${i + 1}"></button>`).join('');
      const dots = dotsWrap.querySelectorAll('.bc-dot');

      function goTo(i) {
        slides[idx].classList.remove('active');
        dots[idx] && dots[idx].classList.remove('active');
        idx = i;
        slides[idx].classList.add('active');
        dots[idx] && dots[idx].classList.add('active');
      }

      dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); resetTimer(); }));

      let timer;
      function resetTimer() {
        clearInterval(timer);
        timer = setInterval(() => goTo((idx + 1) % slides.length), 4000);
      }
      if (slides.length > 1) resetTimer();
    })();

    /* ── FAQ acordeón ── */
    document.querySelectorAll('.faq-item').forEach(item => {
      item.querySelector('.faq-q').addEventListener('click', () => {
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      });
    });

    /* ── Calculadora de ahorro ── */
    (function calculator() {
      const slider  = document.getElementById('calc-slider');
      const amount  = document.getElementById('calc-amount');
      const message = document.getElementById('calc-message');
      const cta     = document.getElementById('calc-cta');
      if (!slider) return;

      function tierMessage(val) {
        if (val < 50000) return 'Ya con un consumo moderado, un sistema bien dimensionado marca una diferencia real en tu cuenta de luz.';
        if (val < 150000) return 'En este rango, un sistema Off-Grid o Híbrido diseñado a tu medida puede cambiar por completo tu forma de pagar la luz.';
        return 'Con un consumo así, el potencial de ahorro de un sistema a medida es aún mayor — vale la pena evaluarlo en detalle.';
      }

      function update() {
        const val = Number(slider.value);
        amount.textContent = '$' + val.toLocaleString('es-CL');
        message.textContent = tierMessage(val);
        const text = `Hola Solvion, mi cuenta de luz es de aprox $${val.toLocaleString('es-CL')} al mes y quiero cotizar un sistema a medida.`;
        cta.href = `https://wa.me/56971468528?text=${encodeURIComponent(text)}`;
      }

      slider.addEventListener('input', update);
      update();
    })();
