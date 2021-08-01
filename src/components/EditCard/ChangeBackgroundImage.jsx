import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../redux/user/user-actions';
import EditCard from './EditCard';
import { getUnsplashPhotos } from '../../unsplash';

import { BackgroundImagePreview } from './style';

export default function ChangeBackgroundImage({ closeForm }) {
  const dispatch = useDispatch();

  const [photos, setPhotos] = useState([]);

  async function getPics() {
    const photos = await getUnsplashPhotos();
    setPhotos(photos);
  }

  useEffect(() => {
    getPics();
  }, []);

  function setPicture(url) {
    dispatch(setUserInfo({ backgroundImage: url }));
    closeForm();
  }

  return (
    <EditCard closeForm={closeForm}>
      <h2>Select a photo:</h2>
      {photos?.map((photo) => (
        <ImagePreview key={photo.id} photo={photo} setPicture={setPicture} />
      ))}
      {}
    </EditCard>
  );
}

const ImagePreview = ({ photo, setPicture }) => {
  return (
    <BackgroundImagePreview
      loading="lazy"
      alt={photo.alt_descriptor}
      src={photo.urls.regular}
      onClick={() => setPicture(photo.urls.regular)}
    />
  );
};
