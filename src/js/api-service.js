import axios from "axios";

export default class ImagesApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1
        this.perpage = 40
    }

    async fetchImages() {
        try {
            const response = await axios.get(`https://pixabay.com/api/?key=29953966-c475d5dff4ed5a25f1b37ba96&q=${this.searchQuery}&image_type=photo&
            orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perpage}`)
            // console.log(response)
            this.incrementPage()
            const data = response.data
            
            // console.log(data)
            return data

        } catch (error) {
            console.error(error);
        }
        
    }
    incrementPage(){
        this.page += 1
    }

    resetPage() {
        this.page = 1
    }
}


        // return fetch(`https://pixabay.com/api/?key=29953966-c475d5dff4ed5a25f1b37ba96&q=${this.searchQuery}&image_type=photo&
        //     orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perpage}`)
        //     .then(response =>
        //     {console.log(response)
        //         return response.json()
                
                
        //     })
        //     .then(data => {
        //         this.incrementPage()
        //         return data
        //     })
        //     .catch(error => {
        //     return error
        // })