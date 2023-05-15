// Function to handle the click on the "Block" or "Unblock" button
function sweetAlertClickHandler(event) {
    event.preventDefault();

    const message = event.target.getAttribute('data-message');
    const method = event.target.getAttribute('data-method') || 'GET'; // Valor por defecto: 'GET'
    const url = event.target.href;

    Swal.fire(
        {
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Aceptar',
            icon: 'question',
            reverseButtons: true,
            showCancelButton: true,
            text: message,
            title: 'Confirmación',
        }
    ).then(
        (result) => {
            if (result.isConfirmed) {
                const form = document.createElement('form');
                form.method = method;
                form.action = url;

                if (method.toUpperCase() === 'POST') {
                    // Add CSRF token if using POST method
                    const csrfToken = document.querySelector('meta[name="csrf"]').getAttribute('content');
                    const csrfInput = document.createElement('input');
                    csrfInput.type = 'hidden';
                    csrfInput.name = '_csrf';
                    csrfInput.value = csrfToken;
                    form.appendChild(csrfInput);
                }

                document.body.appendChild(form);
                form.submit();
            }
        }
    );
}

// Event listener for elements with the data-action attribute
const elementsWithDataAction = document.querySelectorAll('[data-action]');

elementsWithDataAction.forEach(
    (element) => {
        const action = element.getAttribute('data-action');

        if (typeof window[action] === 'function') {
            element.addEventListener('click', window[action]);
        }
    }
);
