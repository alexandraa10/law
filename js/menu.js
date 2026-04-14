// ── HAMBURGER TOGGLE ──
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');

toggle.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        toggle.innerHTML = '✕';
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        toggle.innerHTML = '☰';
    }
});


// ── SUBMENÚ DOCUMENTOS ──
const menuDocumentos = document.getElementById("menu-documentos");
const submenu = document.getElementById("submenu");
const isTouchDevice = () => window.matchMedia("(hover: none)").matches;

let timer;

// ── DESKTOP: hover con delay ──
menuDocumentos.addEventListener("mouseenter", () => {
    if (isTouchDevice()) return;
    clearTimeout(timer);
    submenu.classList.remove("opacity-0", "invisible");
});

menuDocumentos.addEventListener("mouseleave", () => {
    if (isTouchDevice()) return;
    timer = setTimeout(() => {
        submenu.classList.add("opacity-0", "invisible");
    }, 300);
});

submenu.addEventListener("mouseenter", () => {
    if (isTouchDevice()) return;
    clearTimeout(timer);
});

submenu.addEventListener("mouseleave", () => {
    if (isTouchDevice()) return;
    timer = setTimeout(() => {
        submenu.classList.add("opacity-0", "invisible");
    }, 300);
});

// ── MOBILE: toggle con click/tap ──
menuDocumentos.addEventListener("click", (e) => {
    if (!isTouchDevice()) return;
    e.preventDefault();
    const isVisible = !submenu.classList.contains("invisible");
    if (isVisible) {
        submenu.classList.add("opacity-0", "invisible");
    } else {
        submenu.classList.remove("opacity-0", "invisible");
    }
});

// Cerrar submenú si se toca fuera
document.addEventListener("click", (e) => {
    if (!menuDocumentos.contains(e.target)) {
        submenu.classList.add("opacity-0", "invisible");
    }
});
