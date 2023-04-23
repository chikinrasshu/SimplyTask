document.addEventListener("DOMContentLoaded", function () {
    'use strict'

    // Do Form Validations
    const forms = document.querySelectorAll('.needs-validation');
    console.log(forms);

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            console.log("Checking validity");
            if (!form.checkValidity()) {
                console.log("Is valid?");
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false);
    });

    // Tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});
