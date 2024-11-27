// src/main.ts
import { setupModal } from './modules/modal';
import { setupCarousel } from './modules/carousel';
import { setupNavigation } from './modules/navigation';
import { setupFormValidation } from './modules/formValidation';
import { fetchPosts } from './modules/fetchData';
import { Post } from './types/types.d';


document.addEventListener('DOMContentLoaded', () => {
    setupModal();
    setupCarousel();
    setupNavigation();
    setupFormValidation();
    fetchPosts();
});
