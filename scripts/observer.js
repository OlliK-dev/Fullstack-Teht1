// 5) IntersectionObserver — virhe: threshold/cleanup puuttuu



export function initObserver() {

    const box = document.querySelector('.observe-box');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0.25) {
                box.textContent = 'Näkyvissä!';
            }
        });
    });
    io.observe(box);
}