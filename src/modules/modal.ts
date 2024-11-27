// src/modules/modal.ts
import { Modal } from '../types/types.d';

export const setupModal = () => {
    const modal = document.querySelector('.modal') as HTMLElement;
    const modalImage = document.getElementById('modal-image') as HTMLImageElement;
    const closeModalBtn = document.querySelector('.close-modal') as HTMLElement;
    const items = document.querySelectorAll('.gallery-item') as NodeListOf<HTMLElement>;

    items.forEach(item => {
        item.addEventListener('click', () => {
            const image = item.querySelector('img') as HTMLImageElement;
            modalImage.src = image.src;
            modal.style.display = 'flex';
        });
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
};
