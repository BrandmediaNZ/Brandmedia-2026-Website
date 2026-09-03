const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-btn');
const mobilePanel = document.querySelector('.mobile-panel');
const mobileLinks = document.querySelectorAll('.mobile-panel a');

function updateHeader(){
  header?.classList.toggle('scrolled', window.scrollY > 18);
}
updateHeader();
window.addEventListener('scroll', updateHeader, {passive:true});

function setMenu(open){
  if(!menuBtn || !mobilePanel) return;
  mobilePanel.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
  const bars = menuBtn.querySelectorAll('span');
  if (bars.length >= 2){
    bars[0].style.transform = open ? 'translateY(4px) rotate(45deg)' : '';
    bars[1].style.transform = open ? 'translateY(-4px) rotate(-45deg)' : '';
  }
}
menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
mobileLinks.forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if(e.key === 'Escape') setMenu(false); });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.14});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Current year without creating a CMS dependency.
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

// Preselect contact service when arriving from a service CTA, e.g. /contact/?service=brand-guardian
const serviceSelect = document.querySelector('#service-select');
if (serviceSelect) {
  const requestedService = new URLSearchParams(window.location.search).get('service');
  if (requestedService && [...serviceSelect.options].some(option => option.value === requestedService)) {
    serviceSelect.value = requestedService;
  }
}
