window.addEventListener('DOMContentLoaded', function() {
/* ----------------------------- darkmode change ---------------------------- */

  const dark = document.getElementById('dark-toggle'),
        lang = document.getElementById('lang-toggle'),
        ball = document.querySelectorAll('.ball');

  dark.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    ball.forEach((item) => { item.classList.toggle('ball_dark'); });
  });

/* ----------------------------- language change ---------------------------- */

  lang.addEventListener('change', () => {
    
  });
});