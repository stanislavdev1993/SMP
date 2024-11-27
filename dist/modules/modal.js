export const setupModal = () => {
    const modal = document.querySelector('.modal');
    const modalImage = document.getElementById('modal-image');
    const closeModalBtn = document.querySelector('.close-modal');
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            const image = item.querySelector('img');
            modalImage.src = image.src;
            modal.style.display = 'flex';
        });
    });
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
};
