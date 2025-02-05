

// Importar Firebase Core y Servicios
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Configuración de Firebase (REEMPLAZA con tus datos de Firebase)
const firebaseConfig = {
    apiKey: "AIzaSyAYn7DbLdfDJlO1KRFhWJB5fWq8_SKnh7A",
    authDomain: "law-firm-ae7af.firebaseapp.com",
    projectId: "law-firm-ae7af",
    storageBucket: "law-firm-ae7af.firebasestorage.app",
    messagingSenderId: "938529142289",
    appId: "1:938529142289:web:4fe70ac10a226f985023b0",
    measurementId: "G-76244QH2MV"
  }; 

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
