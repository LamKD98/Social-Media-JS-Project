const baseURL = 'https://api.tenor.com/v1/';

const GifServices = {
    searchGifs(query) {
        return fetch(`${baseURL}search?q=${query}&key=AIzaSyA9SS1evcudEpr89ch9I4foqWMjFLNmS78`)
            .then(res => res.json())
            .catch(err => console.error(err));
    },

    getTrendingGifs() {
        return fetch(`${baseURL}trending?key=AIzaSyA9SS1evcudEpr89ch9I4foqWMjFLNmS78`)
            .then(res => res.json())
            .catch(err => console.error(err));
    }
};

export default GifServices;
