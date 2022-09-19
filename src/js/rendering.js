import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery")

function renderMarkup(images) {
    const markUp = images.map(({ webformatURL, tags, likes, views, comments, downloads, largeImageURL }) => {
    return `
    <a href ="${largeImageURL}" class="link">
    <div class="photo-card">    
    <img src="${webformatURL}" alt="${tags}" loading="lazy"/>
    <div class="info"
        <p class="info-item">
        <b>Likes: ${likes}</b>
        </p>
        <p class="info-item">
        <b>Views: ${views}</b>
        </p>
        <p class="info-item">
        <b>Comments: ${comments}</b>
        </p>
        <p class="info-item">
        <b>Downloads: ${downloads}</b>
        </p>
    </div>
    </div></a>`}).join("")
            
  gallery.insertAdjacentHTML('beforeend', markUp) 

  const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    close: true,
    nav: true,
    navText: ['←', '→'],
    doubleTapZoom: 3,
});
} 



export {renderMarkup}

//webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.