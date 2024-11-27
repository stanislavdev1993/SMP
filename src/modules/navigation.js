// src/modules/navigation.ts
export const setupNavigation = () => {
    document.querySelectorAll('nav a').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const href = anchor.getAttribute('href');
            if (href) {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                    });
                }
            }
        });
    });
};
