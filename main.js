"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const modalImage = document.getElementById('modal-image');
    const closeModalBtn = document.querySelector('.close-modal');
    let currentIndex = 0;
    const items = document.querySelectorAll('.gallery-item');
    const totalItems = items.length;
    const showItem = (index) => {
        items.forEach((item, i) => {
            item.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    };
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
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
            const image = item.querySelector('img');
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
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Form validation
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
            form.reset(); // Optional: Reset the form after submission
        }
    });
    // Fetch posts and display them
    const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await response.json();
            const postsContainer = document.querySelector('.posts-container');
            posts.slice(0, 6).forEach((post) => {
                const postElement = document.createElement('div');
                postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
                postsContainer.appendChild(postElement);
            });
        }
        catch (error) {
            console.error('Error fetching posts:', error);
        }
    };
    fetchPosts();
});
