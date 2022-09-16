import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ImagesApiService from './api-service';

const axios = require('axios')

const searchForm = document.querySelector(".search-form")
const gallery = document.querySelector(".gallery")

searchForm.addEventListener('submit', onSearch)

const imagesApiService = new ImagesApiService()

function onSearch(e) {
    e.preventDefault();
    imagesApiService.searchQuery = e.currentTarget.elements.searchQuery.value
    imagesApiService.fetchImages()
        .then(images => {
            console.log(images)
            return images
        })
        .then(images => {
            // console.log(renderMarkup)
            return renderMarkup(images)
        })
    }

function renderMarkup(images) {
    const { webformatURL, tags, likes, views, comments, downloads } = images;
    const markUp = images.map((image) => 
    `<div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
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
</div>`).join("")
        
    gallery.insertAdjacentHTML('afterend', markUp)
}
//webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.