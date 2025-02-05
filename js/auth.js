import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Inicializar Firebase
import { app } from "./firebase-config.js";
const auth = getAuth(app);
const db = getFirestore(app);

// Verificar si el usuario tiene acceso premium
onAuthStateChanged(auth, async (user) => {
    if (user) {
        const userRef = doc(db, "usuarios", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists() && userSnap.data().premium) {
            document.getElementById("premiumSection").style.display = "block"; // Mostrar acceso
        } else {
            document.getElementById("premiumSection").style.display = "none"; // Ocultar acceso
        }
    } else {
        document.getElementById("premiumSection").style.display = "none"; // Ocultar si no está logueado
    }
});
