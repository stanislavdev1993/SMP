// src/modules/carousel.ts
import { GalleryItem } from '../types/types.d';

export const setupCarousel = () => {
    let currentIndex = 0;
    const items = document.querySelectorAll('.gallery-item') as NodeListOf<HTMLElement>;
    const totalItems = items.length;
    const nextButton = document.querySelector('.next') as HTMLButtonElement;
    const prevButton = document.querySelector('.prev') as HTMLButtonElement;

    const showItem = (index: number) => {
        items.forEach((item, i) => {
            item.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    };

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(currentIndex);
    });

    showItem(currentIndex);
};

