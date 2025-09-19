
import { $ } from './helpers.js'

export function initApiSearch() {
    // 2) Haku — virhe: väärä API-osoite + virheenkäsittely puuttuu
    const form = document.getElementById('searchForm');
    const resultsEl = document.getElementById('results');
    const statusEl = document.getElementById('status');

    // Coffee http-rajapinnan dokumentaatio: https://sampleapis.com/api-list/coffee
    async function searchImages(query) {
        const url = `https://api.sampleapis.com/coffee/images`; // BUG: ei vastaa hakusanaan
        const res = await fetch(url);
        const data = await res.json();
        return data.slice(0, 8).map(x => ({ title: x.title || query, url: x.image }));
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const q = $('#q').value.trim();
        statusEl.textContent = 'Ladataan…';
        const items = await searchImages(q); // BUG: ei try/catch, ks. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
        resultsEl.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.className = 'card';
            li.innerHTML = `<strong>${item.title}</strong><br><img alt="" width="160" height="120" src="${item.url}">`;
            resultsEl.appendChild(li);
        });
        statusEl.textContent = `${items.length} tulosta`;
    });
}