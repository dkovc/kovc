function animateBackground() {
    let x = 0;
    let y = 0;
    let directionX = 0.1;
    let directionY = 0.1;

    function moveBackground() {
        x += directionX;
        y += directionY;

        document.body.style.backgroundPosition = `${x}px ${y}px`;

        if (Math.random() < 0.01) {
            directionX *= -1;
        }
        if (Math.random() < 0.01) {
            directionY *= -1;
        }
    }

    setInterval(moveBackground, 50);
}

animateBackground();
