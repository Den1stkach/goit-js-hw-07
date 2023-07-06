import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imgList = galleryItems
    .map(({ preview, original, description }) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
     class="gallery__image"
     src="${preview}"
     data-source="${original}"
     alt="${description}"
     />
     </a>
     </li>`
    )
    .join(' ');

gallery.insertAdjacentHTML('beforeend', imgList);
gallery.onclick = (event) => {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="1400" height="900" >`,
        {
            onShow: () => {
                window.addEventListener('keydown', onEsc);
            },
            onClose: () => {
                window.removeEventListener('keydown', onEsc);
            },
        }
    );
    function onEsc(event) {
        if (event.code === 'Escape') {
            instance.close();
        }
    }
};
