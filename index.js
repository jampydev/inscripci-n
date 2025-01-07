




function previewFirma(event) {

    const input = event.target;
    const reader = new FileReader();
    
    reader.onload = function() {
        const preview = document.getElementById('firma-estudiante-preview');
        preview.src = reader.result;
        preview.style.display = 'block';
    };

    reader.readAsDataURL(input.files[0]);
}




function previewFirmaAprobacion(event) {
    const input = event.target;
    const reader = new FileReader();
    
    reader.onload = function() {
        const preview = document.getElementById('firma-aprobacion-preview');
        preview.src = reader.result;
        preview.style.display = 'block';
    };

    reader.readAsDataURL(input.files[0]);
}







document.getElementById("ema1").addEventListener("input", function () {

    const emailField = this;
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!regex.test(emailField.value)) {
        emailField.setCustomValidity("El correo debe terminar en @gmail.com");
    } else {
        emailField.setCustomValidity("");
    }
});



document.getElementById("ema2").addEventListener("input", function () {
    const emailField = this;
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!regex.test(emailField.value)) {
        emailField.setCustomValidity("El correo debe terminar en @gmail.com");
    } else {
        emailField.setCustomValidity("");
    }
});
