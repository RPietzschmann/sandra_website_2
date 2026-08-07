(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  var backdrop = document.querySelector('.nav-backdrop');
  var body = document.body;

  function closeNav() {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    body.classList.remove('nav-open');
  }

  function openNav() {
    toggle.setAttribute('aria-expanded', 'true');
    nav.classList.add('is-open');
    backdrop.classList.add('is-open');
    body.classList.add('nav-open');
  }

  if (toggle && nav && backdrop) {
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeNav() : openNav();
    });

    backdrop.addEventListener('click', closeNav);

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });

    var mq = window.matchMedia('(min-width: 900px)');
    mq.addEventListener('change', function (e) {
      if (e.matches) closeNav();
    });
  }

  var currentPage = document.body.getAttribute('data-page');
  if (currentPage) {
    document.querySelectorAll('.main-nav a, .footer-nav a, .legal-nav a').forEach(function (link) {
      if (link.getAttribute('data-page') === currentPage) {
        link.classList.add('is-active');
      }
    });
  }
})();
