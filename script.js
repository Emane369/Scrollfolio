<<<<<<< HEAD
document.querySelectorAll('.scroll-anim').forEach(el => {
  el.classList.add('hidden');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.scroll-anim').forEach(el => observer.observe(el));
=======
document.querySelectorAll('.scroll-anim').forEach(el => {
  el.classList.add('hidden');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.scroll-anim').forEach(el => observer.observe(el));
>>>>>>> 3b47ec930e2d17dcd97c051fcc065cfd89fa74dc
