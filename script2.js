function mostrarLogin() {
    var modal = document.getElementById('loginModal');
    var overlay = document.getElementById('overlay');
    modal.style.display = 'block';
    overlay.style.display = 'block';
    }

// Função para fechar o modal de login
function fecharLogin() {
    var modal = document.getElementById('loginModal');
    var overlay = document.getElementById('overlay');
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

// Função para realizar o login (simulada, substitua com sua lógica real)
function realizarLogin() {
    // Implemente a lógica real de autenticação aqui
    // Este é um exemplo simples onde apenas fecha o modal
    fecharLogin();
    }

