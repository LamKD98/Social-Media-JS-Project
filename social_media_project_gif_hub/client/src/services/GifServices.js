const baseURL = 'https://api.tenor.com/v1/';

const GifServices = {
    searchGifs(query) {
        return fetch(`${baseURL}search?q=${query}&key=YOUR_TENOR_API_KEY`)
            .then(res => res.json())
            .catch(err => console.error(err));
    },

    getTrendingGifs() {
        return fetch(`${baseURL}trending?key=YOUR_TENOR_API_KEY`)
            .then(res => res.json())
            .catch(err => console.error(err));
    }
};

export default GifServices;
