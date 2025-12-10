document.addEventListener('DOMContentLoaded', () => {
    // Récupération des éléments
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Fonction pour afficher le formulaire de connexion
    loginBtn.addEventListener('click', () => {
        loginBtn.classList.add('active');
        registerBtn.classList.remove('active');
        
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    });

    // Fonction pour afficher le formulaire d'inscription
    registerBtn.addEventListener('click', () => {
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');
        
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });
});