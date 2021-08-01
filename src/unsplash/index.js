import { createApi } from 'unsplash-js';
require('dotenv').config();

const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCES_KEY
});

export async function getUnsplashPhotos() {
  try {
    const pictures = await unsplash.photos.list();
    console.log(process.env.REACT_APP_UNSPLASH_ACCES_KEY);
    return pictures.response.results;
  } catch (err) {
    console.log(err);
  }
}
