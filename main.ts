document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal') as HTMLElement;
    const modalImage = document.getElementById('modal-image') as HTMLImageElement;
    const closeModalBtn = document.querySelector('.close-modal') as HTMLElement;

    let currentIndex = 0;
    const items = document.querySelectorAll('.gallery-item') as NodeListOf<HTMLElement>;
    const totalItems = items.length;

    const showItem = (index: number) => {
        items.forEach((item, i) => {
            item.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    };

    const nextButton = document.querySelector('.next') as HTMLButtonElement;
    const prevButton = document.querySelector('.prev') as HTMLButtonElement;

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(currentIndex);
    });

    // Initialize carousel display
    showItem(currentIndex);

    // Open modal with the selected image
    items.forEach(item => {
        item.addEventListener('click', () => {
            const image = item.querySelector('img') as HTMLImageElement;
            modalImage.src = image.src;
            modal.style.display = 'flex';
        });
    });

    // Close modal
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href') as string) as HTMLElement;
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
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
            form.reset(); // Optional: Reset the form after submission
        }
    });

    // Fetch posts and display them
    const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await response.json();
            const postsContainer = document.querySelector('.posts-container') as HTMLElement;

            posts.slice(0, 6).forEach((post: { title: string; body: string }) => {
                const postElement = document.createElement('div');
                postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
                postsContainer.appendChild(postElement);
            });
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    fetchPosts();
});
