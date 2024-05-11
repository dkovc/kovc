document.addEventListener('DOMContentLoaded', function() {
    const colors = ['#0a192f', '#172a45', '#203354'];
    let step = 0;

    function shiftGradient() {
        step++;
        if (step >= colors.length) step = 0;
        document.body.style.backgroundImage = `linear-gradient(270deg, ${colors[step]}, ${colors[(step + 1) % colors.length]}, ${colors[(step + 2) % colors.length]})`;
    }

    setInterval(shiftGradient, 5000);
});
