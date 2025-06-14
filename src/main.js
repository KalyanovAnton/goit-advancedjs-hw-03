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

  if (searchedQuery === '') {
    iziToast.error({
      title: '',
      message:
        'The field is empty.<br>Please enter something to continue.',
      position: 'topRight',
    });
    refs.galleryEl.innerHTML = '';
    return;
  }

  refs.loaderEl.classList.add('active');

  photoApi(searchedQuery)
    .finally(() => {
      refs.loaderEl.classList.remove('active');
    })
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          title: '',
          message:
            'Sorry, there are no images matching<br>your search query. Please try again!',
          position: 'topRight',
        });
        refs.galleryEl.innerHTML = '';
        return;
      }
      const galleryCreat = data.hits
        .map(pictureInfo => creatGalleryCard(pictureInfo))
        .join('');

      refs.galleryEl.innerHTML = galleryCreat;

      galleryLightBox.refresh();

      searchForm.reset();
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
};

refs.formEl.addEventListener('submit', toSearchSubmit);
