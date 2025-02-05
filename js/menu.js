const menuDocumentos = document.getElementById("menu-documentos");
    const submenu = document.getElementById("submenu");

    let timer;

    // Mostrar el submenú cuando el cursor entra
    menuDocumentos.addEventListener("mouseenter", () => {
        clearTimeout(timer); // Cancelar cualquier ocultación en progreso
        submenu.classList.remove("opacity-0", "invisible");
    });

    // Ocultar el submenú con retraso cuando el cursor sale
    menuDocumentos.addEventListener("mouseleave", () => {
        timer = setTimeout(() => {
            submenu.classList.add("opacity-0", "invisible");
        }, 300); // Espera 300ms antes de desaparecer
    });

    // Evitar que desaparezca si el usuario entra al submenú
    submenu.addEventListener("mouseenter", () => {
        clearTimeout(timer); // Cancelar la ocultación
    });

    // Desaparecer si el usuario sale completamente
    submenu.addEventListener("mouseleave", () => {
        timer = setTimeout(() => {
            submenu.classList.add("opacity-0", "invisible");
        }, 300);
    });