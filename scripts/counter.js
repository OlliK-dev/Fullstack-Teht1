import { $ } from './helpers.js'

// 3) Laskuri — virhe: event delegation ja bubbling sekoilee



export function initCounterButton(){
    const counterBtn = $('.counter');
    counterBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('.count')) return;
        const span = $('.count', counterBtn);
        span.textContent = String(parseInt(span.textContent, 10) + 1);
    }); 
}