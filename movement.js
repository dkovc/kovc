document.body.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    document.body.style.backgroundPosition = `${-x * 20}px ${-y * 20}px`;
});
