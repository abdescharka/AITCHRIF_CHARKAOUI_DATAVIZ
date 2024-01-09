$(document).ready(function () {
    // Spécifiez le chemin correct vers votre fichier JSON
    var jsonFileURL = 'https://drive.google.com/file/d/10SIi7xriq4nkW3GFb0PjynKs1QxLt-JW/view?usp=sharing';
    fetch(jsonFileURL, {
  mode: 'no-cors',
})
  .then(response => {
    // You won't be able to access response body or headers in 'no-cors' mode
    console.log('Request successful, but no access to response data due to CORS');
  })
  .catch(error => {
    console.error('Error during the request:', error);
  });

  // Utilisez D3 pour charger le fichier JSON
  d3.json(jsonFileURL).then(function(data) {
    // Faites quelque chose avec les données, par exemple, imprimez-les dans la console
    console.log(data);
  }).catch(function(error) {
    console.error("Erreur lors du chargement du fichier JSON :", error);
  });
    
  //https://drive.google.com/file/d/10SIi7xriq4nkW3GFb0PjynKs1QxLt-JW/view?usp=sharing
    // Sélectionnez la liste déroulante par son ID
    var comboBox = $('#indicator-dropdown');

    // Chargez les données JSON à partir du fichier spécifié
    $.getJSON(jsonFileURL)
        .done(function (data) {
            // Remplissez la liste déroulante avec les options basées sur les données JSON
            data.forEach(function (d) {
                comboBox.append($('<option></option>').attr('value', d['Indicator Name']).text(d['Indicator Name']));
            });

            // Définissez un gestionnaire d'événements pour détecter les changements dans la liste déroulante
            comboBox.change(function () {
                var selectedIndicator = $(this).val();
                // Faites quelque chose avec la valeur sélectionnée, par exemple, affichez-la dans la console
                console.log('Indicateur sélectionné :', selectedIndicator);
            });
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.error("Échec de chargement du fichier JSON : " + err);
        });
});

