<script>
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Désactiver le bouton pendant l'envoi
    const btn = document.getElementById('submit-btn');
    const statusDiv = document.getElementById('form-status');
    btn.disabled = true;
    btn.textContent = 'Envoi en cours...';
    statusDiv.textContent = '';
    
    // Paramètres EmailJS
    const serviceID = 'service_3bb8j2k'; // À remplacer
    const templateID = 'template_5spvsmt'; // À remplacer
    
    // Envoyer l'email
    emailjs.sendForm(serviceID, templateID, this)
        .then(function() {
            statusDiv.innerHTML = '<p style="color: green;">✅ Message envoyé avec succès !</p>';
            document.getElementById('contact-form').reset();
            btn.disabled = false;
            btn.textContent = 'Envoyer';
        }, function(error) {
            statusDiv.innerHTML = '<p style="color: red;">❌ Erreur lors de l\'envoi. Veuillez réessayer.</p>';
            console.error('Erreur EmailJS:', error);
            btn.disabled = false;
            btn.textContent = 'Envoyer';
        });
});
</script>