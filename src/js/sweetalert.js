// Function to handle the click on the "Block" or "Unblock" button
function sweetAlertClickHandler(event) {
    event.preventDefault();

    const cancelText = event.target.getAttribute('data-cancel-text') || 'Cancel';
    const confirmText = event.target.getAttribute('data-confirm-text') || 'Accept';
    const icon = event.target.getAttribute('data-icon') || 'question'; // Valor por defecto: 'question'
    const message = event.target.getAttribute('data-message');
    const method = event.target.getAttribute('data-method') || 'GET'; // Valor por defecto: 'GET'
    const url = event.target.href;
    const title = event.target.getAttribute('data-title') || 'Confirmation';

    Swal.fire(
        {
            cancelButtonText: cancelText,
            confirmButtonText: confirmText,
            icon: icon,
            reverseButtons: true,
            showCancelButton: true,
            text: message,
            title: title
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
