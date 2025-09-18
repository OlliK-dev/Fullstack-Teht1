'use strict';

import { $ } from './scripts/helpers.js'
import { initThemeButton } from './scripts/theme.js';

document.addEventListener('DOMContentLoaded', ()=>{

    initThemeButton()
})



// 3) Laskuri — virhe: event delegation ja bubbling sekoilee
const counterBtn = $('.counter');
counterBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('count')) return; // BUG: estää klikin
    const span = $('.count', counterBtn);
    span.textContent = String(parseInt(span.textContent, 10) + 1);
});

// 4) Clipboard — virhe: ei permissioiden / https tarkistusta
$('#copyBtn').addEventListener('click', async () => {
    const text = $('#copyBtn').dataset.text;
    await navigator.clipboard.writeText(text); // BUG: voi heittää virheen
    alert('Kopioitu!');
});

// 5) IntersectionObserver — virhe: threshold/cleanup puuttuu
const box = document.querySelector('.observe-box');
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.25) {
            box.textContent = 'Näkyvissä!';
        }
    });
});
io.observe(box);