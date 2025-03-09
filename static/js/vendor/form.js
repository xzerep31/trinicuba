document.getElementById('formSelector').addEventListener('change', function() {
    const forms = document.querySelectorAll('.form-container');
    forms.forEach(form => form.style.display = 'none'); // Hide all forms
    const selectedForm = this.value;
    if (selectedForm) {
        document.getElementById(selectedForm).style.display = 'block'; // Show selected form
    }
});

