import { Notify } from 'notiflix/build/notiflix-notify-aio';

const axios = require('axios')

const searchForm = document.querySelector(".search-form")

searchForm.addEventListener('submit', onSearch)

async function onSearch(e) {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.searchQuery.value
        try {
            const response = await axios.get(`https://pixabay.com/api/?key=29953966-c475d5dff4ed5a25f1b37ba96&q=${searchQuery}&image_type=photo&
            orientation=horizontal&safesearch=true&keys=webformatURL,largeImageURL,tags,likes,views,comments,downloads`)
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    }


//webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.