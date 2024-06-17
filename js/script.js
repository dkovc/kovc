document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#login-form button');
    const sphere = document.querySelector('.sphere');

    button.addEventListener('mouseenter', () => {
        sphere.style.background = 'radial-gradient(circle at 50% 50%, var(--button-hover-bg-start), var(--button-hover-bg-end) 70%)';
    });

    button.addEventListener('mouseleave', () => {
        sphere.style.background = 'radial-gradient(circle at 50% 50%, var(--button-bg-start), var(--button-bg-end) 70%)';
    });

    document.getElementById('login-form').addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(event) {
    event.preventDefault();
    const username = document.querySelector('input[name="username"]').value;
    const email = username + '@ko.vc';
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    
    const form = event.target;
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = '_csrf';
    hiddenInput.value = csrfToken;
    form.appendChild(hiddenInput);

    redirectToGoogleLogin(email);
}

function redirectToGoogleLogin(email) {
    const loginUrl = `https://accounts.google.com/AccountChooser?Email=${encodeURIComponent(email)}&continue=https://mail.google.com/a/ko.vc`;
    window.location.href = loginUrl;
}
