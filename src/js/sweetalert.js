function sweetAlertClickHandler(event) {
    event.preventDefault();

    const cancelText = event.currentTarget.getAttribute('data-cancel-text') || 'No';
    const confirmText = event.currentTarget.getAttribute('data-confirm-text') || 'Yes';
    const icon = event.currentTarget.getAttribute('data-icon') || 'question';
    const message = event.currentTarget.getAttribute('data-message');
    const method = event.currentTarget.getAttribute('data-method') || 'GET';
    const url = event.currentTarget.href;
    const title = event.currentTarget.getAttribute('data-title') || 'Confirmation';

    Swal.fire({
        cancelButtonText: cancelText,
        confirmButtonText: confirmText,
        icon: icon,
        reverseButtons: true,
        showCancelButton: true,
        text: message,
        title: title
    }).then((result) => {
        if (result.isConfirmed) {
            const form = document.createElement('form');
            form.method = method;
            form.action = url;

            if (method.toUpperCase() === 'POST') {
                // Check if CSRF token is available
                const csrfTokenElement = document.querySelector('meta[name="csrf"]');

                if (csrfTokenElement) {
                    const csrfToken = csrfTokenElement.getAttribute('content');
                    const csrfInput = document.createElement('input');
                    csrfInput.type = 'hidden';
                    csrfInput.name = '_csrf';
                    csrfInput.value = csrfToken;
                    form.appendChild(csrfInput);
                }
            }

            document.body.appendChild(form);
            form.submit();
        }
    });
}

const elementsWithDataAction = document.querySelectorAll('[data-action="sweetAlertClickHandler"]');

elementsWithDataAction.forEach((element) => {
    const action = element.getAttribute('data-action');

    if (typeof window[action] === 'function') {
        element.addEventListener('click', window[action]);
    }
});
