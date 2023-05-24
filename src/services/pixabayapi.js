import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const API_KEY = '35889696-234245940e7cec3ffc17b1751';
// const BASE_FILTERS = 'image_type=photo&orientation=horizontal&per_page=12';

function getData (name, page) {
  const API = `https://pixabay.com/api/?q=${name}&page=${page}&key=24190237-c75eaa2cb0fd0521e8d3d1887&image_type=photo&orientation=horizontal&per_page=12`;
  return axios(API).then(response => {
    if (response) {
      return response.data;
    }
  });
}
const api = { getData };
export default api;


// export const getImagesAPI = async (query, page) => {
//   const response = await axios.get(
//     `?q=${query}&page=${page}&key=${API_KEY}&${BASE_FILTERS}`
//   );
//   return response;
// };
/*  const images = page => {
    const { id, largeImageURL, webformatURL, tags } = img;
    return axios('imgs', {
      params: {
        api_key: API_KEY,
        page,
      },
    });
  };
}; */

// export const getImagesAPI = async (query, page) => {
//   const response = await axios.get(
//     `?q=${query}&page=${page}&key=${API_KEY}&${BASE_FILTERS}`
//   );
//   const images = response.data.hits.map(img => {
//     const { id, largeImageURL, webformatURL, tags } = img;
//     return {
//       id,
//       largeImageURL,
//       webformatURL,
//       tags,
//     };
//   });
//   return images;
// };
