import{S as c,i as n}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const u=t=>`<li class="gallery-item">
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
</li>`,d=t=>fetch(`https://pixabay.com/api/?key=50834675-61314f789662a68656002458b&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return s.json()}),o={formEl:document.querySelector(".gallery-form"),galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")},f=new c(".gallery a",{captionsData:"alt",captionDelay:250}),m=t=>{t.preventDefault();const{target:s}=t,a=s.elements.user_query.value;if(a===""){n.error({title:"",message:"The field is empty.<br>Please enter something to continue.",position:"topRight"}),o.galleryEl.innerHTML="";return}o.loaderEl.classList.add("active"),d(a).finally(()=>{o.loaderEl.classList.remove("active")}).then(i=>{if(i.total===0){n.error({title:"",message:"Sorry, there are no images matching<br>your search query. Please try again!",position:"topRight"}),o.galleryEl.innerHTML="";return}const e=i.hits.map(r=>u(r)).join("");o.galleryEl.innerHTML=e,f.refresh(),s.reset()}).catch(i=>{console.error("Fetch error:",i)})};o.formEl.addEventListener("submit",m);
//# sourceMappingURL=index.js.map
