'use strict';

import { initApiSearch } from './scripts/api_search.js';
import { initClipboard } from './scripts/clipboard.js';
import { initCounterButton } from './scripts/counter.js';
import { initObserver } from './scripts/observer.js';
import { initThemeButton } from './scripts/theme.js';

document.addEventListener('DOMContentLoaded', ()=>{

    initThemeButton()
    initCounterButton()
    initClipboard()
    initObserver()
    initApiSearch()

})
