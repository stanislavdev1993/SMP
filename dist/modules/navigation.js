export const setupNavigation = () => {
    document.querySelectorAll('nav a').forEach((anchor) => {
        // Type assertion to specify anchor as HTMLAnchorElement
        const htmlAnchor = anchor;
        htmlAnchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSelector = this.getAttribute('href');
            if (targetSelector) {
                const target = document.querySelector(targetSelector);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                    });
                }
            }
        });
    });
};
