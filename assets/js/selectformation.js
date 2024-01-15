function filtrerFormations() {
    var selectNiveau = document.getElementById('selectNiveau');
    var selectFiliere = document.getElementById('selectFiliere');
    var listeFormations = document.getElementById('listeFormations');
    var formations = Array.from(listeFormations.children);

    // Réinitialisez l'affichage de toutes les formations
    formations.forEach(function(formation) {
        formation.style.display = 'none';
    });

    // Filtrer les formations en fonction des sélections
    formations.filter(function(formation) {
        var niveau = formation.getAttribute('data-niveau');
        var filiere = formation.getAttribute('data-filiere');

        var niveauSelectionne = selectNiveau.value;
        var filiereSelectionnee = selectFiliere.value;

        if ((niveauSelectionne === 'default' || niveau === niveauSelectionne) &&
            (filiereSelectionnee === 'default' || filiere === filiereSelectionnee)) {
            formation.style.display = 'block';
        }
    });
}