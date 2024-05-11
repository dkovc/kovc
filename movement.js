document.body.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth * 2 - 1;
    const y = e.clientY / window.innerHeight * 2 - 1;
    document.body.style.backgroundPosition = `${x * 30}px ${y * 30}px, ${-x * 30}px ${-y * 30}px`;
});
