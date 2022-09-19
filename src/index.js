import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ImagesApiService from './js/api-service';
import { renderMarkup } from './js/rendering';

const searchForm = document.querySelector(".search-form")
const loadMoreBtn = document.querySelector(".load-more")
const gallery = document.querySelector(".gallery")


searchForm.addEventListener('submit', onSearch)
loadMoreBtn.addEventListener('click', onLoadMore)

const imagesApiService = new ImagesApiService()

const perPage = imagesApiService.perpage

function onSearch(e) {
  e.preventDefault();
  imagesApiService.searchQuery = e.currentTarget.elements.searchQuery.value
  
  if (imagesApiService.searchQuery === '') {
    return Notify.failure("Sorry, search request can't be empty.")
  }
  
    clearImagesGallery()
    imagesApiService.resetPage()
    imagesApiService.fetchImages()
      .then(data => {
        const totalHits = data.totalHits
        if (totalHits === 0) {
          Notify.failure('Sorry, there are no images matching your search query. Please try again.')
        } else {Notify.info(`Hooray! We found ${totalHits} images.`)}
       
        return data.hits
      })
      .then(images => {
        console.log(images)
        return renderMarkup(images)
        
      })
    loadMoreBtn.classList.remove('is-hidden')
    }

function onLoadMore() {
  imagesApiService.fetchImages()
    .then(data => {
      const totalHits = data.totalHits
      const currentPage = imagesApiService.page
       // console.log("currentPage", currentPage)
      if (totalHits < (currentPage - 1) * perPage) {
        loadMoreBtn.classList.add('is-hidden')
        Notify.warning("We're sorry, but you've reached the end of search results.")
      }
        return data.hits
        })
        .then(images => {
          return renderMarkup(images)
        })
}

function clearImagesGallery() {
  gallery.innerHTML = ""
}
