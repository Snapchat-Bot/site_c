const reservations = {
    // Autres produits existants
    'nouveau-produit': {
        name: 'Nouveau Produit',
        description: 'Description du nouveau produit',
        // autres détails
    }
};

function handleReservation(product) {
    const productInfo = reservations[product];
    if (productInfo) {
        // Logique de réservation
    } else {
        console.error('Produit non trouvé');
    }
}