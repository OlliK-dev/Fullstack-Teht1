import { $ } from './helpers.js'

// 3) Laskuri — virhe: event delegation ja bubbling sekoilee
const counterBtn = $('.counter');
counterBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('count')) return; // BUG: estää klikin
    const span = $('.count', counterBtn);
    span.textContent = String(parseInt(span.textContent, 10) + 1);
});