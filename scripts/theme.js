import { $ } from './helpers.js'


// 1) Teema — virhe: localStorage avain sekoilee, event listener duplikoituu

const THEME_KEY = 'theme-preference';

function applyTheme(t) { 
    document.documentElement.setAttribute('data-theme', t); 
}

function saveTheme(t) { 
    localStorage.setItem(THEME_KEY, t); 
} // BUG: key typo

function loadTheme() { 

    const currentTheme = localStorage.getItem(THEME_KEY)
    
    if(currentTheme == null){
        return 'light'
    }
    return currentTheme
}

function toggleTheme() { 

    const currentTheme = loadTheme()

    let next = null

    if(currentTheme === 'light') {
        next = 'dark'
    } else {
        next = 'light'
    }


    applyTheme(next);
    saveTheme(next); 
}




export function initThemeButton(){

    const bugFixWrongKeyCheck = localStorage.getItem('theme-preference')

    if(localStorage.clear('theme-preference')){

        if(bugFixWrongKeyCheck == 'black'){
            localStorage.setItem(THEME_KEY, 'dark')
        }
        
        localStorage.removeItem('theme-preference')
    }

    const themeBtn = $('#themeToggle');

    themeBtn.addEventListener('click', toggleTheme);
    
    const currentTheme = loadTheme()

    applyTheme(loadTheme());
}