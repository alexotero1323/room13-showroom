// Lista única de firmas: logo, tamaño óptico y página propia (si la tiene).
// Al hacer la página de una firma, basta con ponerle `pagina` aquí.
const FIRMAS = [
  { k: 'laminam',    nombre: 'Laminam',    logo: 'svg', e: 1,    pagina: 'laminam.html' },
  { k: 'novacucina', nombre: 'Novacucina', logo: 'svg', e: .85,  pagina: 'novacucina.html' },
  { k: 'linea-013',  nombre: 'Línea 013',  logo: 'svg', e: 2.2,  pagina: 'linea013.html' },
  { k: 'boksen',     nombre: 'Boksen',     logo: 'svg', e: .85, pagina: 'boksen.html' },
  { k: 'barazza',    nombre: 'Barazza',    logo: 'svg', e: 1, pagina: 'barazza.html' },
  { k: 'grato',      nombre: 'Grato',      logo: 'svg', e: .72, pagina: 'grato.html' },
  { k: 'microquarz', nombre: 'MicroQuarz', logo: '',    e: 1, pagina: 'microquarz.html' },
  { k: 'vema',       nombre: 'Vema',       logo: 'png', e: 1, pagina: 'vema.html' },
  { k: 'bora',       nombre: 'Bora',       logo: 'svg', e: .72, pagina: 'bora.html' },
  { k: 'loyra',      nombre: 'Loyra',      logo: 'svg', e: 1, pagina: 'loyra.html' },
  { k: 'sofactual',  nombre: 'Sofactual',  logo: 'png', e: 1.05, pagina: 'sofactual.html' },
  { k: 'megius',     nombre: 'Megius',     logo: 'png', e: 1.1, pagina: 'megius.html' },
];
const enlaceFirma = f => f.pagina || `firma.html?f=${f.k}`;

// En cada página de firma: <nav id="otras"> con los logos del resto y <body data-firma="clave">
(() => {
  const otras = document.getElementById('otras'); if (!otras) return;
  const yo = document.body.dataset.firma;
  otras.innerHTML = FIRMAS.filter(f => f.k !== yo).map(f => f.logo
    ? `<a href="${enlaceFirma(f)}"><img src="img/firmas/${f.k}.${f.logo}" alt="${f.nombre}" style="--e:${f.e}" loading="lazy"></a>`
    : `<a href="${enlaceFirma(f)}" class="txt">${f.nombre}®</a>`).join('');
})();

// En la portada: cada tarjeta de firma apunta a su página propia
document.querySelectorAll('a.firma[data-k]').forEach(a => { const f = FIRMAS.find(x => x.k === a.dataset.k); if (f) a.href = enlaceFirma(f); });
