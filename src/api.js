import axios from 'axios'



const searchImages = async (searchTerm) => {
    const resp = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID lg6qxE_7ipUNrZNXk8LomiUWq82yQu7vnO5BeHICM9U'
        },
        params: {
            query: searchTerm
        }
    })

    return resp.data.results
}





export default searchImages