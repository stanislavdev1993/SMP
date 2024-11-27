// types/types.d.ts

// Define a type for the posts returned from the API
export interface Post {
    title: string;
    body: string;
}

// Define a type for the form data
export interface FormData {
    name: string;
    email: string;
    message: string;
}

// Define a type for the modal
export interface Modal {
    modal: HTMLElement;
    modalImage: HTMLImageElement;
    closeModalBtn: HTMLElement;
}

// Define a type for the gallery items
export interface GalleryItem {
    currentIndex: number;
    items: NodeListOf<HTMLElement>;
    totalItems: number;
}
