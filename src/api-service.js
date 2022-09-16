export default class ImagesApiService {
    constructor() {
        this.searchQuery = ''
    }

    fetchImages() {
        return fetch(`https://pixabay.com/api/?key=29953966-c475d5dff4ed5a25f1b37ba96&q=${this.searchQuery}&image_type=photo&
            orientation=horizontal&safesearch=true&keys=webformatURL,largeImageURL,tags,likes,views,comments,downloads`)
            .then(response => response.json())
            .then(data => { return data.hits })
            .catch(error => {
            return error
        })
    }
}




/*try {
            const response = await axios.get(`https://pixabay.com/api/?key=29953966-c475d5dff4ed5a25f1b37ba96&q=${searchQuery}&image_type=photo&
            orientation=horizontal&safesearch=true&keys=webformatURL,largeImageURL,tags,likes,views,comments,downloads`)
            return response.json()
                .then(data => {
                return data.data.totalHits
            })
            
        } catch (error) {
            console.error(error);
        }*/