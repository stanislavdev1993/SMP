export const setupFormValidation = () => {
    const form = document.getElementById('contact-form');
    const formStatus = document.querySelector('.form-status');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (!name || !email || !message) {
            formStatus.textContent = 'Please fill in all fields!';
            formStatus.style.color = 'red';
        }
        else {
            formStatus.textContent = 'Form submitted successfully!';
            formStatus.style.color = 'green';
            form.reset();
        }
    });
};
