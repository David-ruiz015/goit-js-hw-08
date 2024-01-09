import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

const itemsGallery = galleryItems
  .map(
    galleryItems =>
      `<a class="gallery__link" href=${galleryItems.original}>
        <img class="gallery__image"
        src=${galleryItems.preview} 
        alt=${galleryItems.description}/>
        </a>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', itemsGallery);

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
});
lightbox.on('show.simplelightbox');
