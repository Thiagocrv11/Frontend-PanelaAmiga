function mostrarLogin() {
    var modal = document.getElementById('loginModal');
    var overlay = document.getElementById('overlay');
    modal.style.display = 'block';
    overlay.style.display = 'block';
    }
function fecharLogin() {
    var modal = document.getElementById('loginModal');
    var overlay = document.getElementById('overlay');
    modal.style.display = 'none';
    overlay.style.display = 'none';
}
function realizarLogin() {
    fecharLogin();
    }

