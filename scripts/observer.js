// 5) IntersectionObserver — virhe: threshold/cleanup puuttuu



export function initObserver() {
    const box = document.querySelector('.observe-box');
    const io = new IntersectionObserver((entries, callback) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add("active");
                box.textContent = 'Näkyvissä!';
            } else {
                entry.target.classList.remove("active")
                    
            }
        });
    });
    io.observe(box)
    
}

