function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
}

function handleLogin(event) {
    event.preventDefault();
    // Here you would typically send a request to your server to authenticate the user
    // For this example, we'll just simulate a successful login
    window.location.href = 'welcome.html';
}

function handleRegister(event) {
    event.preventDefault();
    // Here you would typically send a request to your server to register the user
    // For this example, we'll just simulate a successful registration
    window.location.href = 'welcome.html';
}

function goToForum() {
    window.location.href = 'forum.html';
}

document.addEventListener('mousemove', (e) => {
    const crosshair = document.querySelector('.crosshair');
    crosshair.style.left = `${e.clientX - 10}px`;
    crosshair.style.top = `${e.clientY - 10}px`;
});
