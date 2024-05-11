document.addEventListener('DOMContentLoaded', function() {
    const gradients = [
        {start: '#0a0f11', mid: '#192841', end: '#272930'},
        {start: '#272930', mid: '#1c2031', end: '#0a0f11'},
        {start: '#1c2031', mid: '#192841', end: '#0a0f11'}
    ];
    let currentGradient = 0;

    function shiftGradient() {
        const {start, mid, end} = gradients[currentGradient];
        document.body.style.backgroundImage = `linear-gradient(135deg, ${start}, ${mid}, ${end})`;
        currentGradient = (currentGradient + 1) % gradients.length;
    }

    setInterval(shiftGradient, 5000);
});
