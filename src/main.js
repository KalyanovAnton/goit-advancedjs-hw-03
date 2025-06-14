import { creatGalleryCard } from './js/render-functions';
import { photoApi } from './js/pixaday-api';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  formEl: document.querySelector('.gallery-form'),
  galleryEl: document.querySelector('.gallery'),
  loaderEl: document.querySelector('.loader'),
};

const galleryLightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const toSearchSubmit = event => {
  event.preventDefault();

  const { target: searchForm } = event;

  const searchedQuery = searchForm.elements.user_query.value;

  refs.loaderEl.classList.add('active');

  refs.galleryEl.innerHTML = '';

  photoApi(searchedQuery)
    .finally(() => {
      refs.loaderEl.classList.remove('active');
    })
    .then(data => {
      const galleryCreat = data.hits
        .map(pictureInfo => creatGalleryCard(pictureInfo))
        .join('');

      refs.galleryEl.innerHTML = galleryCreat;

      galleryLightBox.refresh();

      if (data.total === 0) {
        iziToast.error({
          title: '',
          message:
            'Sorry, there are no images matching<br>your search query. Please try again!',
          position: 'topRight',
        });
      }
      searchForm.reset();
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
};

refs.formEl.addEventListener('submit', toSearchSubmit);
