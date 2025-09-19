import { $ } from './helpers.js'

// 4) Clipboard — virhe: ei permissioiden / https tarkistusta




export function initClipboard(){
    async function checkClipboardPermissionAndRequest(){

        try {
            const result = await navigator.permissions.query({name: 'clipboard-read'});

            if(result.state !== 'granted'){
                $('#copyBtn').addEventListener('click', async () => {
                    const text = $('#copyBtn').dataset.text;
                    await navigator.clipboard.readText(text); // BUG: voi heittää virheen
                    alert('Kopioitu!');
                })
            }else {
                console.log('Lupa on jo myönnetty');
            }
        } catch (error) {
            console.log('ERROR::Leikepöytä pyyntö hylätty')
        }
   
    }
    checkClipboardPermissionAndRequest();
}
