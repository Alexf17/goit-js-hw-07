import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryConteiner = document.querySelector('.gallery')
const galleryMarkup = createGalleryEl(galleryItems)

galleryConteiner.addEventListener("click", onGalleryElClick);

galleryConteiner.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalleryEl(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
         <div class="gallery__item">
            <a class="gallery__link" href="">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
            </a>
        </div>
        `
    }).join("")
}

function onGalleryElClick(event) {
    // window.addEventListener('keydown', onEscPress)
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
    const instance =
        basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();
}

// function onEscPress(event) {
//     console.log('ESC')
//     window.removeEventListener('keydown', onEscPress)
//     instance.close()
// }

console.log(galleryItems);
