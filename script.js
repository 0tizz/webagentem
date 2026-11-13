// Agente MILLER · web de documentación. Sin dependencias ni proceso de compilación.

// Menú del móvil
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '✕' : '☰';
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = '☰';
}));

// Año del pie
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Copiar comandos al portapapeles
const toast = document.getElementById('toast');
let toastTimer;
function notifyCopied() {
  if (!toast) return;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1500);
}
document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      notifyCopied();
    } catch {
      const field = document.createElement('textarea');
      field.value = value;
      document.body.appendChild(field);
      field.select();
      document.execCommand('copy');
      field.remove();
      notifyCopied();
    }
  });
});

// Filtro y búsqueda de órdenes (solo en la documentación)
const tabs = [...document.querySelectorAll('.command-tabs .tab')];
const rows = [...document.querySelectorAll('.command-row')];
const search = document.getElementById('commandSearch');
const noResults = document.getElementById('noResults');
let activeFilter = 'todos';
function filterCommands() {
  const term = (search?.value || '').toLocaleLowerCase('es');
  let visible = 0;
  rows.forEach(row => {
    const categoryMatch = activeFilter === 'todos' || row.dataset.category === activeFilter;
    const textMatch = row.textContent.toLocaleLowerCase('es').includes(term);
    row.hidden = !(categoryMatch && textMatch);
    if (!row.hidden) visible++;
  });
  if (noResults) noResults.hidden = visible !== 0;
}
if (rows.length) {
  tabs.forEach(tab => tab.addEventListener('click', () => {
    activeFilter = tab.dataset.filter;
    tabs.forEach(item => item.classList.toggle('active', item === tab));
    filterCommands();
  }));
  search?.addEventListener('input', filterCommands);
}

// Índice lateral de la documentación: marca la sección que se está leyendo
const indice = document.querySelector('.doc-indice');
if (indice && 'IntersectionObserver' in window) {
  const enlaces = new Map([...indice.querySelectorAll('a[href^="#"]')].map(a => [a.getAttribute('href').slice(1), a]));
  const vistos = new Set();
  const observador = new IntersectionObserver(entradas => {
    entradas.forEach(e => (e.isIntersecting ? vistos.add(e.target.id) : vistos.delete(e.target.id)));
    const actual = [...enlaces.keys()].find(id => vistos.has(id));
    enlaces.forEach((a, id) => a.classList.toggle('activo', id === actual));
  }, { rootMargin: '-20% 0px -70% 0px' });
  enlaces.forEach((_, id) => {
    const seccion = document.getElementById(id);
    if (seccion) observador.observe(seccion);
  });
}
