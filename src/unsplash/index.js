import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'SMmvJcBzC1r7lIyYf6DFoHxu0xCrSJlzQZ7JqhWWmFE'
});

export async function getUnsplashPhotos() {
  try {
    const pictures = await unsplash.photos.list();
    return pictures.response.results;
  } catch (err) {
    console.log(err);
  }
}
