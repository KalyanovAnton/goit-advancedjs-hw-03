export const creatGalleryCard = galleryInfo => {
    return `<li class="gallery-item">
  <a class="gallery-link" href="${galleryInfo.largeImageURL}">
    <img
      class="gallery-image"
      src="${galleryInfo.webformatURL}"
      data-source="${galleryInfo.largeImageURL}"
      alt="${galleryInfo.tags}"
    />
  </a>
  <div class="div-info">
      <div class="info-gallery">
        <h2 class="info-title">Likes</h2>
        <p class="info-st">${galleryInfo.likes}</p>
      </div>
      <div class="info-gallery">
        <h2 class="info-title">Views</h2>
        <p class="info-st">${galleryInfo.views}</p>
      </div>
      <div class="info-gallery">
        <h2 class="info-title">Comments</h2>
        <p class="info-st">${galleryInfo.comments}</p>
      </div>
      <div class="info-gallery">
        <h2 class="info-title">Downloads</h2>
        <p class="info-st">${galleryInfo.downloads}</p>
      </div>
    </div>
</li>`
}