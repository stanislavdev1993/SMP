export const setupNavigation = () => {
    document.querySelectorAll('nav a').forEach((anchor) => {
        // Type assertion to specify anchor as HTMLAnchorElement
        const htmlAnchor = anchor as HTMLAnchorElement;

        htmlAnchor.addEventListener('click', function (e: MouseEvent) {
            e.preventDefault();
            const targetSelector = this.getAttribute('href');
            if (targetSelector) {
                const target = document.querySelector(targetSelector) as HTMLElement;
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                    });
                }
            }
        });
    });
};
