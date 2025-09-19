import { $ } from './helpers.js'

// 4) Clipboard — virhe: ei permissioiden / https tarkistusta




export function initClipboard(){
    $('#copyBtn').addEventListener('click', async () => {
        const text = $('#copyBtn').dataset.text;
        await navigator.clipboard.writeText(text); // BUG: voi heittää virheen
        alert('Kopioitu!');
   })
}

