const isLoggedIn = false; // Cambia esto según sea necesario
const userType = 'user'; // Cambia esto según sea necesario

const esColaborador = userType === 'juridica' || userType === 'humana';

if (isLoggedIn) {
    document.getElementById('auth-buttons').innerHTML = `
        <button class="login-btn boton-login-estilo" onclick="handleLogoutClick()">Log Out</button>
        <span class="userTypeText">Sesión iniciada como: ${userType}</span>
    `;
    if (esColaborador) {
        document.getElementById('colaborador-buttons').style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userType = localStorage.getItem('userType');

    const esColaborador = userType === 'juridica' || userType === 'humana';

    if (isLoggedIn) {
        document.getElementById('auth-buttons').innerHTML = `
            <button class="login-btn boton-login-estilo" onclick="handleLogoutClick()">Log Out</button>
            <span class="userTypeText">Sesión iniciada como: ${userType}</span>
        `;
        if (esColaborador) {
            document.getElementById('colaborador-buttons').style.display = 'block';
        }
    }
});

function handleInicioClick() {
    window.location.href = '/front_html_css/pages/principal/PaginaPrincipal.html';
}

function handleNosotrosClick() {
    window.location.href = '/front_html_css/pages/nosotros/PaginaNosotros.html';
}


function handleFaqsClick() {
    window.location.href = '/faqs';
}

function handleNoticiasClick() {
    window.location.href = '/noticias';
}

function handleMapaClick() {
    window.location.href = '/front_html_css/pages/mapa/MapaInteractivo.html';
}

function handleCargarColaboradoresClick() {
    window.location.href = '/PaginaCargarColaboradores';
}

function handleConsultarPuntosClick() {
    window.location.href = '/front_html_css/pages/puntos/PaginaConsultarPuntos.html';
}

function handleCanjearPuntosClick() {
    window.location.href = '/front_html_css/pages/puntos/PaginaCanjearPuntos.html';

}

function handleReportarFallasClick() {
    window.location.href = '/PaginaReportarFallas';
}

function handleLogoutClick() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userType');
    window.location.href = '/';
}

function handleLoginClick() {
    window.location.href = '/pages/login/PaginaLogin.html';
}

function togglePuntosDropdown() {
    const dropdown = document.getElementById('puntos-dropdown');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}
function handlerOpcionesHeladera() {
    window.location.href = '/front_html_css/pages/colaboraciones/tipos-de-colaboraciones/PaginaHacerseCargoDeUnaHeladera.html';
}