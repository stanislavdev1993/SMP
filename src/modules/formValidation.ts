// src/modules/formValidation.ts
import { FormData } from '../types/types.d';

export const setupFormValidation = () => {
    const form = document.getElementById('contact-form') as HTMLFormElement;
    const formStatus = document.querySelector('.form-status') as HTMLElement;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const message = (document.getElementById('message') as HTMLTextAreaElement).value;

        if (!name || !email || !message) {
            formStatus.textContent = 'Please fill in all fields!';
            formStatus.style.color = 'red';
        } else {
            formStatus.textContent = 'Form submitted successfully!';
            formStatus.style.color = 'green';
            form.reset();
        }
    });
};
