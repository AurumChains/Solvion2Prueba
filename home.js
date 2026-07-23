/* ── Datos del catálogo ── */
    const products = [
      {
        id: 1, cat: 'panel', catLabel: 'Panel Solar',
        name: 'OSDA 585W Bifacial', model: 'Módulo TOPCon',
        img: 'img/panel_osda_585w.png',
        highlight: { val: '585W', lbl: 'Potencia máxima' },
        badge: 'Eficiencia 22.65%',
        specs: [
          { v: '585 W',            k: 'Potencia máxima (Pmax)' },
          { v: '22.65%',           k: 'Eficiencia del módulo' },
          { v: '2278×1134×30 mm',  k: 'Dimensiones' },
          { v: '27.4 kg',          k: 'Peso' },
          { v: 'IP68',             k: 'Protección caja de conexiones' },
        ],
        features: [
          'Tecnología TOPCon para mayor recolección de corriente',
          'Rendimiento optimizado en condiciones de baja irradiación',
          'Resistencia a viento de 2400 Pa y nieve de 5400 Pa',
          'Certificación anti-PID para máxima durabilidad',
          'Caja de conexiones impermeable y resistente a entornos extremos',
        ]
      },
      {
        id: 2, cat: 'inversor', catLabel: 'Inversor Solar',
        name: 'Felicity Solar 12kW', model: 'IVEM12048-II',
        img: 'img/inversor_felicity_12kw.jpg',
        highlight: { val: '12000W', lbl: 'Potencia de salida' },
        badge: '2 Strings',
        specs: [
          { v: '12000 W',  k: 'Potencia nominal de salida' },
          { v: '2 Strings', k: 'Configuración' },
          { v: '48 V CC',  k: 'Voltaje entrada CC nominal' },
          { v: '230 V CA', k: 'Voltaje CA nominal' },
          { v: '50/60 Hz', k: 'Frecuencia (auto-detección)' },
        ],
        features: [
          'Temperatura de funcionamiento: -10°C a 50°C',
          'Detección automática de frecuencia 50/60 Hz',
          'Voltaje de entrada CC nominal de 48V',
          'Diseñado para instalaciones de alta potencia residencial y comercial',
        ]
      },
      {
        id: 3, cat: 'inversor', catLabel: 'Inversor Solar',
        name: 'Felicity Solar 8kW', model: 'IVEM8048-II',
        img: 'img/inversor_felicity_8kw.png',
        highlight: { val: '8000W', lbl: 'Potencia de salida' },
        badge: '2 Strings',
        specs: [
          { v: '8000 W',   k: 'Potencia nominal de salida' },
          { v: '2 Strings', k: 'Configuración' },
          { v: '48 V CC',  k: 'Voltaje entrada CC nominal' },
          { v: '230 V CA', k: 'Voltaje CA nominal' },
          { v: '50/60 Hz', k: 'Frecuencia (auto-detección)' },
        ],
        features: [
          'Temperatura de funcionamiento: -10°C a 50°C',
          'Detección automática de frecuencia 50/60 Hz',
          'Ideal para hogares y pequeñas empresas',
          'Compatible con baterías de litio de 48V',
        ]
      },
      {
        id: 4, cat: 'inversor', catLabel: 'Inversor Híbrido',
        name: 'Solis S6 Híbrido 8kW', model: 'Serie S6',
        img: 'img/inversor_solis_s6.png',
        highlight: { val: '8kW', lbl: 'Potencia híbrida' },
        badge: 'Gestión inteligente',
        specs: [
          { v: '8 kW',       k: 'Potencia de salida' },
          { v: '48 V',       k: 'Compatibilidad baterías' },
          { v: 'App móvil',  k: 'Monitorización remota' },
          { v: 'Integrado',  k: 'Cargador' },
          { v: 'Compatible', k: 'Generador externo' },
        ],
        features: [
          'Tecnología híbrida: gestiona solar, baterías y red automáticamente',
          'Cargador integrado: recarga desde energía solar o desde la red',
          'Monitorización remota por app móvil o plataforma web',
          'Compatible con generador para respaldo extendido en cortes de energía',
          'Diseño compacto y robusto de fácil instalación y mantenimiento',
        ]
      },
      {
        id: 5, cat: 'bateria', catLabel: 'Batería de Litio',
        name: 'Felicity Solar 14.3 kWh', model: 'FLA48280-EU',
        img: 'img/bateria_felicity_14kwh.png',
        highlight: { val: '14.3 kWh', lbl: 'Energía nominal' },
        badge: '280 Ah · LiFePO₄',
        specs: [
          { v: '51.2 V',    k: 'Voltaje nominal' },
          { v: '280 Ah',    k: 'Capacidad' },
          { v: '14.3 kWh',  k: 'Energía nominal' },
          { v: '≥95%',      k: 'Profundidad de descarga' },
          { v: '≥6.000',    k: 'Ciclos de vida' },
        ],
        features: [
          'Tecnología LiFePO₄ (fosfato de hierro y litio)',
          'BMS inteligente integrado con interruptor y fusibles',
          'Escalable hasta 15 unidades en paralelo (~215 kWh)',
          'Conectividad WiFi y Bluetooth para monitoreo remoto',
          'Rango de voltaje de operación: 44.8 – 57.6 V',
          'Corriente máxima de carga/descarga: hasta 150 A',
          'Montaje en suelo y anclaje a pared · IP21 · ~160 kg',
        ]
      },
      {
        id: 6, cat: 'bateria', catLabel: 'Batería de Litio',
        name: 'Felicity Solar 23.5 kWh', model: 'FLA48460-EU',
        img: 'img/bateria_felicity_23kwh.png',
        highlight: { val: '23.5 kWh', lbl: 'Energía nominal' },
        badge: 'Alta capacidad · LiFePO₄',
        specs: [
          { v: '51.2 V',       k: 'Voltaje nominal' },
          { v: '23.5 kWh',     k: 'Energía nominal' },
          { v: '44.8–57.6 V',  k: 'Rango de operación' },
          { v: '≥95%',         k: 'Profundidad de descarga' },
          { v: '≥6.000',       k: 'Ciclos de vida' },
        ],
        features: [
          'Tecnología LiFePO₄ de alta energía',
          'BMS inteligente con interruptor y fusibles integrados',
          'Escalable hasta 15 unidades en paralelo (~352.5 kWh)',
          'WiFi y Bluetooth para monitoreo remoto',
          'Comunicación RS485 / CAN',
          'Montaje en suelo y anclaje a pared · IP21',
          'Dimensiones: 825×498×1163 mm · ~256 kg',
        ]
      },
      {
        id: 7, cat: 'bateria', catLabel: 'Batería de Litio',
        name: 'Felicity Solar 8.75 kWh', model: 'FLA48171-EU',
        img: 'img/bateria_felicity_8kwh.png',
        highlight: { val: '8.75 kWh', lbl: 'Energía útil' },
        badge: '~171 Ah · Mural',
        specs: [
          { v: '51.2 V',   k: 'Voltaje nominal' },
          { v: '~171 Ah',  k: 'Capacidad aproximada' },
          { v: '8.75 kWh', k: 'Energía útil' },
          { v: '≥95%',     k: 'Profundidad de descarga' },
          { v: '≥6.000',   k: 'Ciclos de vida' },
        ],
        features: [
          'Tecnología LiFePO₄ (fosfato de hierro y litio)',
          'Smart BMS con interruptor y fusible integrado',
          'Sistema de extinción de aerosol integrado (seguridad activa)',
          'WiFi y/o Bluetooth para supervisión remota',
          'Comunicación RS485 / CAN para integración con inversores',
          'Instalación en pared · IP21',
        ]
      }
    ];

    /* ── Filtrado ── */
    let currentCat = 'todos';

    function filter(btn, cat) {
      currentCat = cat;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render();
    }

    /* ── Render cards ── */
    function render() {
      const grid  = document.getElementById('grid');
      const empty = document.getElementById('empty');
      const list  = currentCat === 'todos'
        ? products
        : products.filter(p => p.cat === currentCat);

      if (!list.length) {
        grid.innerHTML = '';
        empty.style.display = 'block';
        return;
      }
      empty.style.display = 'none';
      grid.innerHTML = list.map(p => `
        <div class="card" onclick="openModal(${p.id})" role="button" tabindex="0"
             aria-label="Ver especificaciones de ${p.name}"
             onkeydown="if(event.key==='Enter')openModal(${p.id})">
          <div class="card-img-wrap">
            <img src="${p.img}" alt="${p.name}" class="card-img" loading="lazy">
          </div>
          <div class="card-cat"><span class="cat-dot"></span>${p.catLabel}</div>
          <h3>${p.name}</h3>
          <div class="card-model">${p.model}</div>
          <div class="card-highlight">
            <div class="val">${p.highlight.val}</div>
            <div class="lbl">${p.highlight.lbl}</div>
          </div>
          <span class="card-badge">${p.badge}</span>
          <div class="card-arrow"><i class="ti ti-arrow-right"></i></div>
        </div>
      `).join('');
    }

    /* ── Abrir modal ── */
    function openModal(id) {
      const p = products.find(x => x.id === id);
      const specsGrid = p.specs.map(s => `
        <div class="spec-card">
          <div class="sv">${s.v}</div>
          <div class="sk">${s.k}</div>
        </div>
      `).join('');
      const featList = p.features.map(f => `
        <li><i class="ti ti-check" aria-hidden="true"></i>${f}</li>
      `).join('');

      document.getElementById('modal').innerHTML = `
        <button class="modal-close" onclick="closeModal()" aria-label="Cerrar">
          <i class="ti ti-x"></i>
        </button>
        <div class="modal-img-wrap">
          <img src="${p.img}" alt="${p.name}" class="modal-img">
        </div>
        <div class="modal-cat">${p.catLabel}</div>
        <h2>${p.name}</h2>
        <div class="modal-model">Modelo: ${p.model}</div>
        <div class="specs-grid">${specsGrid}</div>
        <div class="features-title">Características</div>
        <ul class="spec-list">${featList}</ul>
        <div class="modal-footer">
          <button class="btn-primary" onclick="closeModal()">
            <i class="ti ti-shopping-cart" style="margin-right:6px"></i>Solicitar cotización
          </button>
          <button class="btn-secondary" onclick="closeModal()">Volver al catálogo</button>
        </div>
      `;
      document.getElementById('overlay').classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    /* ── Cerrar modal ── */
    function closeModal() {
      document.getElementById('overlay').classList.remove('open');
      document.body.style.overflow = '';
    }

    function handleOverlayClick(e) {
      if (e.target === document.getElementById('overlay')) closeModal();
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });

    /* ── Battery Carousel ── */
    const batteries = products.filter(p => p.cat === 'bateria');
    let bcIdx = 0;
    let bcTimer = null;

    function renderCarousel() {
      const track = document.getElementById('bc-track');
      const dots  = document.getElementById('bc-dots');

      track.innerHTML = batteries.map((p, i) => `
        <div class="bc-slide${i === 0 ? ' active' : ''}" id="bc-slide-${i}">
          <div class="bc-img-wrap">
            <img src="${p.img}" alt="${p.name}" class="bc-img" loading="lazy">
          </div>
          <div class="bc-info">
            <div class="bc-cat">${p.catLabel}</div>
            <h3>${p.name}</h3>
            <div class="bc-model">${p.model}</div>
            <div class="bc-kw">${p.highlight.val}</div>
            <div class="bc-kw-lbl">${p.highlight.lbl}</div>
            <ul class="bc-speclist">
              ${p.specs.slice(0, 3).map(s => `
                <li><i class="ti ti-circle-check-filled"></i><strong>${s.v}</strong>&nbsp;—&nbsp;${s.k}</li>
              `).join('')}
            </ul>
            <button class="bc-cta" onclick="openModal(${p.id})">
              <i class="ti ti-file-description"></i>Ver especificaciones
            </button>
          </div>
        </div>
      `).join('');

      dots.innerHTML = batteries.map((_, i) => `
        <button class="bc-dot${i === 0 ? ' active' : ''}" onclick="bcGoTo(${i})" aria-label="Batería ${i + 1}"></button>
      `).join('');

      document.getElementById('bc-prev').onclick = () => bcMove(-1);
      document.getElementById('bc-next').onclick = () => bcMove(1);

      const stage = document.querySelector('.bc-stage');
      stage.addEventListener('mouseenter', () => clearInterval(bcTimer));
      stage.addEventListener('mouseleave', bcAuto);
      bcAuto();
    }

    function bcMove(dir) {
      bcGoTo((bcIdx + dir + batteries.length) % batteries.length);
    }

    function bcGoTo(idx) {
      document.getElementById(`bc-slide-${bcIdx}`).classList.remove('active');
      document.querySelectorAll('.bc-dot')[bcIdx].classList.remove('active');
      bcIdx = idx;
      document.getElementById(`bc-slide-${bcIdx}`).classList.add('active');
      document.querySelectorAll('.bc-dot')[bcIdx].classList.add('active');
      clearInterval(bcTimer);
      bcAuto();
    }

    function bcAuto() {
      bcTimer = setInterval(() => bcMove(1), 4500);
    }

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
      let idx = 0;

      dotsWrap.innerHTML = slides.length > 1
        ? Array.from(slides).map((_, i) => `<button class="bc-dot${i === 0 ? ' active' : ''}" aria-label="Mensaje ${i + 1}"></button>`).join('')
        : '';
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

    /* ── Testimonios ── */
    (function testimonials() {
      const cards = document.querySelectorAll('.testi-card');
      const dotsWrap = document.getElementById('testi-dots');
      if (!cards.length) return;
      let idx = 0;

      dotsWrap.innerHTML = Array.from(cards).map((_, i) => `<button class="bc-dot${i === 0 ? ' active' : ''}" aria-label="Testimonio ${i + 1}"></button>`).join('');
      const dots = dotsWrap.querySelectorAll('.bc-dot');

      function goTo(i) {
        cards[idx].classList.remove('active');
        dots[idx].classList.remove('active');
        idx = (i + cards.length) % cards.length;
        cards[idx].classList.add('active');
        dots[idx].classList.add('active');
      }

      document.getElementById('testi-prev').addEventListener('click', () => goTo(idx - 1));
      document.getElementById('testi-next').addEventListener('click', () => goTo(idx + 1));
      dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
    })();

    /* ── FAQ acordeón ── */
    document.querySelectorAll('.faq-item').forEach(item => {
      item.querySelector('.faq-q').addEventListener('click', () => {
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      });
    });

    /* ── Formulario de contacto → WhatsApp ── */
    document.getElementById('contact-form').addEventListener('submit', e => {
      e.preventDefault();
      const f = e.target;
      const lines = [
        'Hola Solvion, quiero cotizar un sistema solar.',
        `Nombre: ${f.nombre.value}`,
        `Teléfono: ${f.telefono.value}`,
        f.email.value && `Correo: ${f.email.value}`,
        f.ubicacion.value && `Comuna: ${f.ubicacion.value}`,
        `Sistema de interés: ${f.sistema.value}`,
        `Plazo: ${f.plazo.value}`,
        f.mensaje.value && `Mensaje: ${f.mensaje.value}`,
      ].filter(Boolean).join('\n');

      window.open(`https://wa.me/56957758075?text=${encodeURIComponent(lines)}`, '_blank');
    });

    /* ── Init ── */
    renderCarousel();
    render();
