
const MEDIA_EXTS = ['jpg', 'png', 'jpeg', 'webp'];


const THEORIES = {

  freud: {
    asset: '01',
    theme: 'sun',
    author: {
      name: 'Sigmund Freud',
      argumentSimple: 'La civilización es el resultado de la renuncia a los instintos.',
      argumentQuestion: "¿Qué diría Freud sobre la conducta de Mateo?",
      argumentPreview: "Los deseos, los límites del entorno y la manera en que las normas se interiorizan durante la infancia.",
      argument: "Para Freud, la conducta de Mateo no sería un simple capricho, sino el resultado de cómo ha manejado sus deseos y los límites que el mundo le ha impuesto desde pequeño. Según el psicoanálisis, las experiencias de la infancia y la forma en que aprendimos a frenar nuestros impulsos para encajar en la sociedad dejan una huella profunda en nuestra manera de actuar. Si Mateo cede ante la presión o actúa sin medir las consecuencias, esto reflejaría que las normas del entorno no han logrado equilibrar adecuadamente sus impulsos internos con el respeto hacia los demás. Como explican Enesco y Sierra (2002), en la teoría de Freud la sociedad y los padres deben poner límites a los impulsos destructivos o egoístas del niño, logrando que con el tiempo esas normas se queden dentro de él para regular su propia conducta. Por lo tanto, su comportamiento actual es una forma de lidiar con esos conflictos internos de su pasado."
    },
    short: 'Sigmund Freud',

    videoId: 'jQm4xVVmDsQ',

    videoRef: {
      url: 'https://youtu.be/jQm4xVVmDsQ',
      label: 'Freud y el caso Mateo'
    },

    esArticle: {
      title: 'VIGOTSKI, PIAGET Y FREUD: A PROPÓSITO DE LA SOCIALIZACIÓN',
      url: 'https://revistas.udistrital.edu.co/index.php/enunc/article/view/2440/3382',
      desc: ''
    },

    enArticle: {
      title: 'Kant and Freud on Moral Development: A Reappraisal',
      url: 'https://www.cambridge.org/core/services/aop-cambridge-core/content/view/4FB71C98BB2CCEBBFE7E97982FF5BA16/S0031819125101149a.pdf/kant_and_freud_on_moral_development_a_reappraisal.pdf',
      desc: ''
    },

    recommend: {
      title: 'Sigmund Freud: Theory & Contribution to Psychology',
      url: 'https://www.simplypsychology.org/sigmund-freud.html',
      reason:
        '¿Qué oculta realmente nuestra mente inconsciente? Descúbrelo paso a paso explorando los diagramas interactivos y teorías clave de Sigmund Freud en este recurso.'
    },

    fact:'Sabias que Freud planteaba que la conciencia moral (el Superyó) nace y se fortalece de manera muy intensa debido al miedo y la culpa, especialmente tras la superación del famoso complejo de Edipo en la infancia.',

    activityUrl:
      'https://es.educaplay.com/recursos-educativos/31404114-sigmund_freud_psicoanalisis_y_moral.html'
  },


  piaget: {
    asset: '02',
    theme: 'sky',
    author: {
      name: 'Jean Piaget',
      argumentSimple: 'El objetivo principal de la educación en las escuelas es crear hombres y mujeres que sean capaces de hacer cosas nuevas, no simplemente repetir lo que otras generaciones han hecho.',
      argumentQuestion: "¿Cómo explica Piaget este comportamiento?",
      argumentPreview: "La evolución del razonamiento moral, el aprendizaje de las reglas y la cooperación con los demás.",
      argument: "Para Piaget, la conducta de Mateo frente a las normas y la convivencia se explicaría como una etapa de su maduración mental donde el niño aprende a entender las reglas y la justicia a través de la interacción con los demás. Al principio, los niños ven las reglas como algo impuesto por los adultos que no se puede cambiar, pero al crecer y convivir con sus pares, descubren que las normas son acuerdos mutuos basados en el respeto y la cooperación. Por lo tanto, cualquier comportamiento en una situación ciudadana refleja el nivel de su razonamiento moral, el cual evoluciona desde la obediencia ciega a la autoridad hasta la comprensión de la equidad y la reciprocidad en la sociedad. Como explican Enesco y Sierra (2002), el desarrollo moral de los niños progresa a través de \"la creciente participación del niño en interacciones basadas en el respeto mutuo\", lo que les permite pasar de una moral heterónoma a una moral autónoma basada en la justicia."

    },
    short: 'Jean Piaget',

    videoId: 'tycIJSM6iUQ',

    videoRef: {
      url: 'https://youtu.be/tycIJSM6iUQ?feature=shared',
      label: 'Piaget y el caso Mateo'
    },

    esArticle: {
      title: 'EL CRITERIO MORAL EN EL NIÑO',
      url: 'https://www.filosofem.cat/IMG/pdf/piage_el_criterio_moral_en_el_nino.pdf',
      desc: ''
    },

    enArticle: {
      title: '12 - Piaget’s Theory of Moral Development',
      url: 'https://www.cambridge.org/core/books/abs/cambridge-companion-to-piaget/piagets-theory-of-moral-development/AA66CDA3291DAE11430B77BA8EAFCE8A',
      desc: ''
    },

    recommend: {
      title: 'Sociedad Jean Piaget para el Estudio del Conocimiento y el Desarrollo',
      url: 'https://piaget.org/',
      reason:
        'Descubre los experimentos y conceptos clave sobre cómo los niños entienden las normas sociales y la cooperación. ¡Visita el recurso oficial y amplía tu perspectiva!'
    },

    fact:
      'Puedes creer que Piaget descubrió este proceso observando de manera muy detallada a niños jugando a las canicas en las calles de Ginebra y a las niñas jugando a la rayuela. A través de este inusual método, se dio cuenta de que la forma en que los niños entienden las reglas de un juego sencillo refleja cómo comprenden las normas y la justicia en la vida real.',

    activityUrl:
      'https://es.educaplay.com/recursos-educativos/31405217-jean_piaget_desarrollo_cognitivo_y_moral.html'
  },


  kohlberg: {
    asset: '03',
    theme: 'grape',
    author: {
      name: 'Lawrence Kohlberg',
      argumentSimple: 'La virtud es el conocimiento, y el desarrollo moral es el crecimiento de este conocimiento sobre la justicia y los derechos humanos.',
      argumentQuestion: "¿El enfoque de Kohlberg diría algo más sobre Mateo?",
      argumentPreview: "Los niveles de razonamiento moral, la obediencia, el castigo y la comprensión de las normas sociales.",
      argument: "Para Kohlberg, el comportamiento de Mateo al esconder el teléfono refleja su nivel actual de razonamiento moral, el cual se centra en cómo valora las normas y las consecuencias de sus actos dentro de la convivencia. Un niño de diez años suele encontrarse en el nivel preconvencional o en la transición al convencional, donde las decisiones están muy guiadas por la aprobación de los demás o por el miedo a recibir un castigo directo de la autoridad. Al enfrentarse a esta situación, Mateo actúa priorizando intereses inmediatos sin lograr dimensionar plenamente el impacto de sus acciones. Como explican Enesco y Sierra (2002), el pensamiento preconvencional es \"una moralidad orientada a satisfacer los propios deseos y necesidades o constreñida a la obediencia y preocupada por el castigo\", donde el niño aún \"no comprende el significado y función de las normas para la vida social\". Esto se traduce en cómo interpreta las expectativas del entorno antes de consolidar un juicio moral autónomo basado en principios universales."
    },
    short: 'Lawrence Kohlberg',

    videoId: 'TKsx9bUi0AE',

    videoRef: {
      url: 'https://youtu.be/TKsx9bUi0AE',
      label: 'Kohlberg y el caso Mateo'
    },

    esArticle: {
      title: 'EL DESARROLLO MORAL: UNA INTRODUCCION A LA TEORIA DE KOHLBERG',
      url: 'https://www.redalyc.org/pdf/805/80519101.pdf',
      desc: ''
    },

    enArticle: {
      title: 'Exploring Childrens Morality: Theory, Data, and Practice in Early Childhood Education Yogyakarta',
      url: 'https://pdfs.semanticscholar.org/9e75/5dd1647f51593f9ec44a6a3a73f045c6fc74.pdf',
      desc: ''
    },

    recommend: {
      title: 'The Ethics of Intervention, Immortality and Happiness',
      url: 'https://ethics.org.au/',
      reason:
        'Analiza cómo evoluciona nuestra conciencia moral y por qué las reglas y la presión social moldean nuestras decisiones. ¡Haz clic para explorar The Ethics Centre!'
    },

    fact:
      'Kohlberg diseñó sus famosos "dilemas morales" hipotéticos (como el dilema de Heinz, donde un hombre debe decidir si roba un medicamento muy costoso para salvar a su esposa enferma) inspirándose directamente en los métodos que utilizaba Sócrates en la antigua Grecia.',

    activityUrl:
      'https://wordwall.net/es/resource/123208387?wwmethod=link'
  }
};


// =========================================================
// REFERENCIAS
// =========================================================

const REFERENCES = [
  {
    html: 'Zhang, W., Pan, Q., &amp; Guo, B. (2022). The significance of infant research for psychoanalysis. <i>Humanities and Social Sciences Communications, 9</i>, 194.',
    url: 'https://www.nature.com/articles/s41599-022-01219-z',
    theories: ['freud']
  },
  {
    html: 'Sánchez Hurtado, Y. (2001). Vygotsky, Piaget y Freud: a propósito de la socialización. <i>Enunciación</i>.',
    url: 'https://revistas.udistrital.edu.co/index.php/enunc/article/view/2440/3382',
    theories: ['freud', 'piaget']
  },
  {
    html: 'Enesco, I., &amp; Sierra, P. (2002). El desarrollo moral. En P. Herranz &amp; P. Sierra (Eds.), <i>Psicología Evolutiva I</i> (2, pp. 272–321). Madrid: UNED.',
    url: 'https://www.researchgate.net/publication/378804228_El_desarrollo_moral',
    theories: ['kohlberg']
  },
  {
    html: 'Cruz Puerto, M. S. (2020). Desarrollo moral: Tres comprensiones. <i>Revista Iberoamericana de Psicología, 13</i>(1), 95–103.',
    url: 'https://reviberopsicologia.ibero.edu.co/article/view/1619',
    theories: ['kohlberg']
  },
  {
    html: 'Cambridge Philosophical Papers. (2025). <i>Kant and Freud on Moral Development: A Reappraisal</i>. <i>Philosophy</i>. Cambridge University Press.',
    url: 'https://www.cambridge.org/',
    theories: ['freud', 'kohlberg']
  },
  {
    html: 'Piaget, J. (1932/1984). <i>El criterio moral en el niño</i>. Ediciones Martínez Roca.',
    url: 'https://www.google.com/search?q=Jean+Piaget+El+criterio+moral+en+el+ni%C3%B1o',
    theories: ['piaget']
  },
  {
    html: 'Carpendale, J. I. M. (2009). La teoría del desarrollo moral de Piaget. En U. Müller, J. I. M. Carpendale, &amp; L. Smith (Eds.), <i>The Cambridge Companion to Piaget</i> (pp. 270–286). Cambridge University Press.',
    url: 'https://www.cambridge.org/',
    theories: ['piaget']
  },
  {
    html: 'Almagiá, E. B. (1987). El desarrollo moral: Una introducción a la teoría de Kohlberg. <i>Revista Latinoamericana de Psicología, 19</i>(1), 7–18.',
    url: 'https://www.redalyc.org/',
    theories: ['kohlberg']
  },
  {
    html: 'Semantic Scholar Research. (2025). Exploring Children’s Morality: Theory, Data, and Practice in Early Childhood. <i>Pedagogical Studies Journal</i>, 1–15.',
    url: 'https://www.semanticscholar.org/',
    theories: ['kohlberg']
  }
];


// =========================================================
// TEORÍAS ACTIVAS EN ESTA VERSIÓN
// =========================================================
// La versión infantil muestra solo TRES temas. Para cambiar cuáles se
// muestran (o su orden) basta con editar esta lista con las claves de THEORIES:
//   'freud' · 'piaget' · 'kohlberg'
// // La numeración (1, 2, 3) se calcula sola según la posición en la lista.

const ACTIVE_THEORIES = ['freud', 'piaget', 'kohlberg'];

ACTIVE_THEORIES.forEach((key, index) => {
  THEORIES[key].key = key;
  THEORIES[key].number = String(index + 1).padStart(2, '0');
});

const NEW_TAB_HINT = '<span class="sr-only"> (se abre en una pestaña nueva)</span>';


// =========================================================
// UTILIDADES
// =========================================================

function escapeHTML(value) {
  return String(value).replace(
    /[&<>'"]/g,
    char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char])
  );
}

// <img> que prueba jpg → png → jpeg → webp y, si no existe ninguna,
// usa la imagen de respaldo.
function mediaImage(base, fallback, alt) {
  return `
    <img
      src="${base}.${MEDIA_EXTS[0]}"
      alt="${escapeHTML(alt)}"
      loading="lazy"
      data-media-base="${base}"
      data-media-step="0"
      data-media-fallback="${fallback}"
    />`;
}

document.addEventListener('error', event => {
  const img = event.target;
  if (!(img instanceof HTMLImageElement) || !img.dataset.mediaBase) return;

  const step = Number(img.dataset.mediaStep) + 1;
  if (step < MEDIA_EXTS.length) {
    img.dataset.mediaStep = String(step);
    img.src = `${img.dataset.mediaBase}.${MEDIA_EXTS[step]}`;
  } else if (step === MEDIA_EXTS.length) {
    img.dataset.mediaStep = String(step);
    img.src = img.dataset.mediaFallback;
  }
}, true);


// =========================================================
// ACCESIBILIDAD: TAMAÑO DE LETRA
// =========================================================

const TEXT_SIZES = ['normal', 'grande', 'muy-grande'];

function getSavedSize() {
  try {
    const saved = localStorage.getItem('textSize');
    return TEXT_SIZES.includes(saved) ? saved : 'normal';
  } catch (e) { return 'normal'; }
}

function applyTextSize(size) {
  document.documentElement.setAttribute('data-text-size', size);
  try { localStorage.setItem('textSize', size); } catch (e) { /* sin almacenamiento */ }

  const down = document.querySelector('[data-size="down"]');
  const up = document.querySelector('[data-size="up"]');
  const index = TEXT_SIZES.indexOf(size);
  if (down) down.disabled = index === 0;
  if (up) up.disabled = index === TEXT_SIZES.length - 1;
}

function setupTextSize() {
  applyTextSize(getSavedSize());

  document.querySelectorAll('[data-size]').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = TEXT_SIZES.indexOf(document.documentElement.getAttribute('data-text-size'));
      const next = btn.dataset.size === 'up' ? current + 1 : current - 1;
      if (next >= 0 && next < TEXT_SIZES.length) applyTextSize(TEXT_SIZES[next]);
    });
  });
}


// =========================================================
// PÁGINA PRINCIPAL
// =========================================================

function renderHomeCards() {
  const grid = document.querySelector('[data-theories-grid]');
  if (!grid) return;

  grid.innerHTML = ACTIVE_THEORIES.map((key, i) => {
    const t = THEORIES[key];
    const name = t.author.name;
    const argumentSimple = t.author.argumentSimple;

    return `
      <article class="theory-card author-card theme-${t.theme} reveal-up delay-${i + 1}">
        <div class="card-topline">
          <span class="badge" aria-hidden="true">${i + 1}</span>
        </div>

        <div class="card-toy card-photo">
          ${mediaImage(`fotos/${key}`, 'fotos/autor-placeholder.svg', `Foto de ${name}`)}
        </div>

        <div class="card-content">
          <h3>${escapeHTML(name)}</h3>
          <h1>${escapeHTML(argumentSimple)}</h1>
          <a class="primary-btn" href="teoria.html?id=${key}">
            <span>Ver teoría<span class="sr-only"> de ${escapeHTML(name)}</span></span>
            <span class="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </article>`;
  }).join('');
}

function renderReferences() {
  const list = document.querySelector('[data-references-list]');
  if (!list) return;

  const visible = REFERENCES.filter(ref => ref.theories.some(k => ACTIVE_THEORIES.includes(k)));

  list.innerHTML = visible.map(ref => `
    <li>
      ${ref.html}
      <a href="${ref.url}" target="_blank" rel="noopener">${escapeHTML(ref.url)}${NEW_TAB_HINT}</a>
    </li>`).join('');

  const count = document.querySelector('[data-references-count]');
  if (count) count.textContent = String(visible.length);
}

// El enlace «Referencias» del menú abre el desplegable automáticamente.
function setupReferencesDetails() {
  const details = document.getElementById('referencias');
  if (!details || details.tagName !== 'DETAILS') return;

  const openIfTargeted = () => { if (location.hash === '#referencias') details.open = true; };
  window.addEventListener('hashchange', openIfTargeted);
  openIfTargeted();

  document.querySelectorAll('a[href="#referencias"], a[href="index.html#referencias"]').forEach(a => {
    a.addEventListener('click', () => { details.open = true; });
  });
}


// =========================================================
// PÁGINA DE TEORÍA
// =========================================================

function articleCard(article, lang, asset) {
  const isSpanish = lang.toLowerCase().startsWith('es');
  const suffix = isSpanish ? 'ES' : 'EN';
  const fallback = isSpanish ? 'media/thumb-es.svg' : 'media/thumb-en.svg';
  const alt = isSpanish
    ? 'Miniatura de lectura científica en español'
    : 'Miniatura de lectura científica en inglés';

  return `
    <a class="article-card" href="${article.url}" target="_blank" rel="noopener">
      <div class="article-thumb">
        ${mediaImage(`media/${asset}${suffix}`, fallback, alt)}
        <span class="thumb-link-label" aria-hidden="true">Abrir ↗</span>
      </div>
      <div class="article-lang">Lectura en ${isSpanish ? 'español' : 'inglés'}</div>
      <strong${isSpanish ? '' : ' lang="en"'}>${escapeHTML(article.title)}</strong>
      <p>${escapeHTML(article.desc)}</p>
      ${NEW_TAB_HINT}
    </a>`;
}

function videoRefMarkup(theory) {
  const ref = theory.videoRef;
  if (!ref) return '';
  return `
    <p class="video-ref">
      Video de referencia:
      <a class="secondary-link" href="${ref.url}" target="_blank" rel="noopener">${escapeHTML(ref.label)} ↗${NEW_TAB_HINT}</a>
    </p>`;
}

// Requiere abrir la página desde un servidor (GitHub Pages, localhost…).
// Desde file:// YouTube no recibe el Referer y puede mostrar el «Error 153».
function youtubeVideoMarkup(theory) {
  const params = new URLSearchParams({
    rel: '0', playsinline: '1', cc_load_policy: '1', cc_lang_pref: 'es', hl: 'es'
  });
  const embedUrl = `https://www.youtube.com/embed/${encodeURIComponent(theory.videoId)}?${params.toString()}`;

  return `
    <div class="video-shell">
      <iframe
        class="video-frame youtube-video"
        src="${escapeHTML(embedUrl)}"
        title="Video de la teoría: ${escapeHTML(theory.short)}"
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowfullscreen
      ></iframe>
      ${videoRefMarkup(theory)}
    </div>`;
}

function activityMarkup(theory) {
  return `
    <p>Toca la imagen para ir al juego de esta teoría.</p>
    <a class="activity-link" href="${escapeHTML(theory.activityUrl)}" target="_blank" rel="noopener"
       aria-label="Ir al juego de la teoría ${Number(theory.number)} (se abre en una pestaña nueva)">
      ${mediaImage(`media/${theory.asset}RETO`, 'media/reto-placeholder.svg',
        `Imagen del juego interactivo de la teoría ${Number(theory.number)}`)}
      <span class="thumb-link-label" aria-hidden="true">Ir al juego ↗</span>
    </a>`;
}

function sectionNavMarkup() {
  const items = [
    ['sec-argumento', '💬', 'Argumento'],
    ['sec-video', '🎬', 'Video'],
    ['sec-articulo-1', '📚', 'Artículo 1'],
    ['sec-articulo-2', '📖', 'Artículo 2'],
    ['sec-actividad', '🎮', 'Juego'],
    ['sec-dato', '⭐', 'Dato curioso'],
    ['sec-web', '🌐', 'Sitio web']
  ];
  return `
    <nav class="section-nav reveal-up delay-1" aria-label="Secciones de esta página">
      <span class="section-nav-title">Ir a:</span>
      <ul>
        ${items.map(([id, icon, label]) =>
          `<li><a href="#${id}"><span aria-hidden="true">${icon}</span> ${label}</a></li>`).join('')}
      </ul>
    </nav>`;
}

function pagerMarkup(theory) {
  const pos = ACTIVE_THEORIES.indexOf(theory.key);
  const prev = pos > 0 ? THEORIES[ACTIVE_THEORIES[pos - 1]] : null;
  const next = pos < ACTIVE_THEORIES.length - 1 ? THEORIES[ACTIVE_THEORIES[pos + 1]] : null;

  const link = (t, dir) => t ? `
    <a class="pager-link pager-${dir}" href="teoria.html?id=${t.key}" rel="${dir === 'prev' ? 'prev' : 'next'}">
      <span class="pager-dir">${dir === 'prev' ? '← Teoría anterior' : 'Siguiente teoría →'}</span>
      <span class="pager-name">${Number(t.number)} · ${escapeHTML(t.short)}</span>
    </a>` : '<span></span>';

  return `
    <nav class="pager" aria-label="Cambiar de teoría">
      ${link(prev, 'prev')}
      ${link(next, 'next')}
    </nav>`;
}

function renderTheory(theory) {
  document.title = `${theory.author.name} · Desarrollo moral y competencias`;
  document.body.classList.add(`theme-${theory.theme}`);

  const app = document.getElementById('app');
  const n = Number(theory.number);
  const name = theory.author.name;

  app.innerHTML = `
    <div class="theory-shell">

      <nav class="breadcrumb reveal-up" aria-label="Ruta de navegación">
        <ol>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="index.html#teorias">Teorías</a></li>
          <li aria-current="page">${escapeHTML(theory.short)}</li>
        </ol>
      </nav>

      <header class="theory-hero reveal-up delay-1">
        <div class="hero-toy" aria-hidden="true">
          ${mediaImage(`fotos/${theory.key}`, 'fotos/autor-placeholder.svg', `Foto de ${name}`)}
        </div>
        <div class="hero-text">
          <span class="chip">Teoría ${n}</span>
          <h1>${escapeHTML(name)}</h1>
          <p>${escapeHTML(theory.author.argumentSimple)}</p>
        </div>
      </header>

      ${sectionNavMarkup()}

      <section class="panel argument-panel reveal-up delay-1" id="sec-argumento" aria-labelledby="h-argumento">
        <h2 id="h-argumento"><span class="panel-emoji" aria-hidden="true">💬</span> Argumento</h2>
        <div class="argument-intro">
          <h3>${escapeHTML(theory.author.argumentQuestion)}</h3>
          <p>${escapeHTML(theory.author.argumentPreview)}</p>
        </div>
        <details class="argument-disclosure">
          <summary>
            <span class="argument-summary-icon" aria-hidden="true">📖</span>
            <span class="argument-summary-text"><strong>Leer argumento completo</strong><small>Consulta el análisis y sus referencias</small></span>
            <span class="summary-toggle" aria-hidden="true"></span>
          </summary>
          <div class="argument-full-text">
            <p class="argument-text">${escapeHTML(theory.author.argument)}</p>
            <p class="argument-by">— ${escapeHTML(name)}</p>
          </div>
        </details>
      </section>

      <div class="content-stack">

        <!-- Columna 1: video · artículo 1 · artículo 2 -->
        <div class="column reveal-up delay-1">

          <article class="panel" id="sec-video" aria-labelledby="h-video">
            <h2 id="h-video"><span class="panel-emoji" aria-hidden="true">🎬</span> Video</h2>
            ${youtubeVideoMarkup(theory)}
          </article>

          <article class="panel" id="sec-articulo-1" aria-labelledby="h-articulo-1">
            <h2 id="h-articulo-1"><span class="panel-emoji" aria-hidden="true">📚</span> Artículo 1</h2>
            ${articleCard(theory.esArticle, 'ESPAÑOL', theory.asset)}
          </article>

          <article class="panel" id="sec-articulo-2" aria-labelledby="h-articulo-2">
            <h2 id="h-articulo-2"><span class="panel-emoji" aria-hidden="true">📖</span> Artículo 2</h2>
            ${articleCard(theory.enArticle, 'ENGLISH', theory.asset)}
          </article>

        </div>

        <!-- Columna 2: juego · dato curioso · página web -->
        <div class="column reveal-up delay-2">

          <article class="panel" id="sec-actividad" aria-labelledby="h-actividad">
            <h2 id="h-actividad"><span class="panel-emoji" aria-hidden="true">🎮</span> Juego</h2>
            ${activityMarkup(theory)}
          </article>

          <article class="panel fact-box" id="sec-dato" aria-labelledby="h-dato">
            <div>
              <div class="fact-icon" aria-hidden="true">⭐</div>
              <h2 id="h-dato">Dato curioso</h2>
              <p>${escapeHTML(theory.fact)}</p>
            </div>
            <div class="refline">Teoría: ${escapeHTML(theory.short)}</div>
          </article>

          <article class="panel" id="sec-web" aria-labelledby="h-web">
            <h2 id="h-web"><span class="panel-emoji" aria-hidden="true">🌐</span> Página web recomendada</h2>

            <a class="web-thumb" href="${theory.recommend.url}" target="_blank" rel="noopener"
               aria-label="Visitar ${escapeHTML(theory.recommend.title)} (se abre en una pestaña nueva)">
              ${mediaImage(`media/${theory.asset}WEB`, 'media/thumb-web.svg',
                `Miniatura de la página web recomendada: ${theory.recommend.title}`)}
              <span class="thumb-link-label" aria-hidden="true">Abrir ↗</span>
            </a>

            <p><strong>${escapeHTML(theory.recommend.title)}</strong></p>
            <p>${escapeHTML(theory.recommend.reason)}</p>

            <a class="primary-btn small" href="${theory.recommend.url}" target="_blank" rel="noopener">
              Visitar recurso <span aria-hidden="true">↗</span>${NEW_TAB_HINT}
            </a>
          </article>

        </div>
      </div>

      ${pagerMarkup(theory)}

      <div class="back-home">
        <a class="primary-btn" href="index.html#teorias">← Volver a todas las teorías</a>
      </div>

    </div>`;
}


// =========================================================
// INICIALIZACIÓN
// =========================================================

setupTextSize();

if (document.body.classList.contains('home-page')) {
  renderHomeCards();
  renderReferences();
  setupReferencesDetails();
}

if (document.body.classList.contains('theory-page')) {
  const id = new URLSearchParams(window.location.search).get('id');

  if (ACTIVE_THEORIES.includes(id)) {
    renderTheory(THEORIES[id]);
    window.scrollTo(0, 0);
  } else {
    window.location.replace('index.html');
  }
}
