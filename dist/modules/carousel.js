export const setupCarousel = () => {
    let currentIndex = 0;
    const items = document.querySelectorAll('.gallery-item');
    const totalItems = items.length;
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const showItem = (index) => {
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
