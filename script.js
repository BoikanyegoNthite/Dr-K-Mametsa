(function() {
  // Mobile menu toggle
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Header scroll shadow
  var header = document.querySelector('.site-header');
  var setHeaderShadow = function() {
    if (!header) return;
    if (window.scrollY > 8) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  setHeaderShadow();
  window.addEventListener('scroll', setHeaderShadow, { passive: true });

  // Smooth scroll for internal links
  var links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var targetId = link.getAttribute('href').slice(1);
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        nav && nav.classList.remove('open');
        toggle && toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Scrollspy for nav active state
  var spySections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  var spy = function() {
    var fromTop = window.scrollY + 120;
    var currentId = null;
    for (var i = 0; i < spySections.length; i++) {
      var sec = spySections[i];
      if (sec.offsetTop <= fromTop && (sec.offsetTop + sec.offsetHeight) > fromTop) {
        currentId = sec.id; break;
      }
    }
    if (!nav) return;
    var navLinks = nav.querySelectorAll('a[href^="#"], a[href$=".html"], a[href*="#"]');
    navLinks.forEach(function(a) { a.classList.remove('is-active'); });
    if (currentId) {
      var active = nav.querySelector('a[href="#' + currentId + '"]');
      if (active) active.classList.add('is-active');
    }
  };
  window.addEventListener('scroll', spy, { passive: true });
  spy();

  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Image loading handler
  var images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(function(img) {
    img.addEventListener('load', function() {
      this.classList.add('loaded');
    });
    img.addEventListener('error', function() {
      this.style.display = 'none';
    });
  });
  // Image fallback: show 📷 only if image fails to load
  document.querySelectorAll('.card-image img, .gallery-item img, .photo-frame img').forEach(img => {
    img.addEventListener('error', function() {
      this.style.display = 'none';
      this.parentNode.classList.add('img-fallback');
    });
    img.addEventListener('load', function() {
      this.parentNode.classList.remove('img-fallback');
    });
  });

  // Contact form progressive enhancement (Formspree or similar)
  var form = document.getElementById('contact-form');
  var status = document.querySelector('.form-status');
  if (form && status) {
    form.addEventListener('submit', function(e) {
      // If action is configured, allow normal submit; also add fetch for SPA-like UX
      e.preventDefault();
      status.textContent = 'Sending…';
      var fd = new FormData(form);
      fetch(form.action, { method: 'POST', body: fd, headers: { 'Accept': 'application/json' } })
        .then(function(res) { return res.ok ? res.json() : Promise.reject(res); })
        .then(function() {
          status.textContent = 'Thanks! We will be in touch shortly.';
          form.reset();
        })
        .catch(function() {
          status.textContent = 'There was a problem sending your message. Please try again.';
        });
    });
  }
})();


