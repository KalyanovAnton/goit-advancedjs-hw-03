import{S as c,i as n}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const d=t=>`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      data-source="${t.largeImageURL}"
      alt="${t.tags}"
    />
  </a>
  <div class="div-info">
      <div class="info-gallery">
        <h2 class="info-title">Likes</h2>
        <p class="info-st">${t.likes}</p>
      </div>
      <div class="info-gallery">
        <h2 class="info-title">Views</h2>
        <p class="info-st">${t.views}</p>
      </div>
      <div class="info-gallery">
        <h2 class="info-title">Comments</h2>
        <p class="info-st">${t.comments}</p>
      </div>
      <div class="info-gallery">
        <h2 class="info-title">Downloads</h2>
        <p class="info-st">${t.downloads}</p>
      </div>
    </div>
</li>`,u=t=>fetch(`https://pixabay.com/api/?key=50834675-61314f789662a68656002458b&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return s.json()}),i={formEl:document.querySelector(".gallery-form"),galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")},f=new c(".gallery a",{captionsData:"alt",captionDelay:250}),m=t=>{t.preventDefault();const{target:s}=t,a=s.elements.user_query.value;i.loaderEl.classList.add("active"),i.galleryEl.innerHTML="",u(a).finally(()=>{i.loaderEl.classList.remove("active")}).then(o=>{const e=o.hits.map(r=>d(r)).join("");i.galleryEl.innerHTML=e,f.refresh(),o.total===0&&n.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),s.reset()}).catch(o=>{console.error("Fetch error:",o)})};i.formEl.addEventListener("submit",m);
//# sourceMappingURL=index.js.map
