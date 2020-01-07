window.addEventListener('DOMContentLoaded', function() {
/* ----------------------------- darkmode change ---------------------------- */

  const dark = document.getElementById('dark-toggle'),
        lang = document.getElementById('lang-toggle'),
        ball = document.querySelectorAll('.ball'),
        arrow = document.querySelector('.arrow');

  dark.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    ball.forEach((item) => { item.classList.toggle('ball_dark'); });
    arrow.classList.toggle('arrow_dark');
  });

/* ----------------------------- language change ---------------------------- */

  lang.addEventListener('change', () => {
    
  });
});