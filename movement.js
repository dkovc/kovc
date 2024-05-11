document.body.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    document.body.style.backgroundPosition = `${x * 30}px ${y * 30}px, ${-x * 30}px ${-y * 30}px`;
});
