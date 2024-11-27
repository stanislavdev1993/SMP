// src/modules/fetchData.ts
import { Post } from '../types/types.d';

export const fetchPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts: Post[] = await response.json(); // Use Post type here
        const postsContainer = document.querySelector('.posts-container') as HTMLElement;

        posts.slice(0, 6).forEach((post) => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
            postsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
};
