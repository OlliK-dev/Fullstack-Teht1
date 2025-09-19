'use strict';

import { initCounterButton } from './scripts/counter.js';
import { $ } from './scripts/helpers.js'
import { initThemeButton } from './scripts/theme.js';

document.addEventListener('DOMContentLoaded', ()=>{

    initThemeButton()
    initCounterButton()
})
