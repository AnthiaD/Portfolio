/* ============================================================
   ANTHIA DIALLO — PORTFOLIO
   main.js — Interactions, animations, filtres projets
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ────────────────────────────────────
     BARRE DE PROGRESSION
  ──────────────────────────────────── */
  const progressBar = document.getElementById('progress-bar');

  window.addEventListener('scroll', () => {
    if (!progressBar) return;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = ((window.scrollY / docHeight) * 100) + '%';
  });

  /* ────────────────────────────────────
     NAVBAR — scroll + menu mobile
  ──────────────────────────────────── */
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelector('.nav-links');
  const burger   = document.getElementById('burger');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  if (burger) {
    const spans = burger.querySelectorAll('span');

    const closeMenu = () => {
      navLinks.classList.remove('open');
      burger.classList.remove('active');
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    };

    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      burger.classList.toggle('active');
      if (burger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        closeMenu();
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ────────────────────────────────────
     ACTIVE NAV LINK au scroll
  ──────────────────────────────────── */
  const sections   = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveNav() {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      const top    = section.offsetTop;
      const height = section.offsetHeight;
      const id     = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();

  /* ────────────────────────────────────
     SCROLL REVEAL
  ──────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ────────────────────────────────────
     BARRES DE COMPÉTENCES
  ──────────────────────────────────── */
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar   = entry.target;
        const level = bar.getAttribute('data-level') || '0';
        bar.classList.add('animated');
        setTimeout(() => { bar.style.width = level + '%'; }, 100);
        skillObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.2 });

  skillBars.forEach(bar => skillObserver.observe(bar));

  /* ────────────────────────────────────
     FILTRES PROJETS (par compétence / techno)
  ──────────────────────────────────── */
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const projetItems = document.querySelectorAll('.projet-item');
  const emptyMsg    = document.getElementById('projets-empty');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // État actif des boutons
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      // Affichage / masquage des projets
      let visibleCount = 0;
      projetItems.forEach(item => {
        const tags = (item.getAttribute('data-tags') || '').split(' ');
        const show = (filter === 'all') || tags.includes(filter);
        item.classList.toggle('hidden', !show);
        if (show) visibleCount++;
      });

      // Message si aucun résultat
      if (emptyMsg) emptyMsg.classList.toggle('show', visibleCount === 0);
    });
  });

  /* ────────────────────────────────────
     SMOOTH SCROLL sur les ancres
  ──────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ────────────────────────────────────
     ANNÉE DYNAMIQUE dans le footer
  ──────────────────────────────────── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
