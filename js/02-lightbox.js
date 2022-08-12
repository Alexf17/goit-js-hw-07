import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryConteiner = document.querySelector('.gallery')
const galleryMarkup = createGalleryEl(galleryItems)

galleryConteiner.addEventListener("click", onGalleryElClick);

galleryConteiner.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalleryEl(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join("")
}

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function onGalleryElClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
}

console.log(galleryItems);

