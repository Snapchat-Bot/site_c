import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCS4ix7FePyQaRYlRXVxi5ghS7bI25kJVI",
    authDomain: "site-concierge.firebaseapp.com",
    projectId: "site-concierge",
    storageBucket: "site-concierge.appspot.com",
    messagingSenderId: "863521292746",
    appId: "1:863521292746:web:9ec193e10e42f4f5680f33",
    measurementId: "G-6F7ZQLQHF9"
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function addNewProduct() {
    db.collection('products').add({
        name: 'Nouveau Produit',
        description: 'Description du nouveau produit',
        // autres détails
    }).then(() => {
        console.log('Produit ajouté avec succès');
    }).catch((error) => {
        console.error('Erreur lors de l\'ajout du produit : ', error);
    });
}

export { db };