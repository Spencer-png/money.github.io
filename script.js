function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
}

function handleLogin(event) {
    event.preventDefault();
    window.location.href = 'welcome.html';
}

function handleRegister(event) {
    event.preventDefault();
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
