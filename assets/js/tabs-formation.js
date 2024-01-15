$('#myTabs a').on('click', function (e) {
    e.preventDefault();
    
    // Vérifier si l'onglet cliqué est celui que vous souhaitez rediriger
    if ($(this).attr('href') === '#tab2') {
        // Rediriger vers la page correspondante
        window.location.href = 'formations.html';
    } else {
        // Faire autre chose pour les autres onglets si nécessaire
    }
});
