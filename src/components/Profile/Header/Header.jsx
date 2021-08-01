import {
  BackgroundImage,
  ProfileImage,
  Name,
  Contact,
  Description,
  Information,
  Job,
  Stack,
  Tecnology
} from './style';

import { EditPosition } from '../../../style/main';
import { Card } from '../../../style/main';

import { Github, Linkedin, Location, Edit } from '../../../icons';
import EditProfileCard from '../../EditCard/EditProfileCard';
import { useState } from 'react';
import ChangeBackgroundImage from '../../EditCard/ChangeBackgroundImage';

export default function Header({ userInfo }) {
  const {
    name,
    image,
    backgroundImage,
    email,
    phone,
    description,
    linkedIn,
    github,
    adress,
    lastConexion,
    job,
    stack
  } = userInfo;

  const [isShowingEditForm, setIsShowingEditForm] = useState(false);
  const [isShowingBackgroundForm, setIsShowingBackgroundForm] = useState(false);

  return (
    <>
      {isShowingBackgroundForm && (
        <ChangeBackgroundImage
          userInfo={userInfo}
          closeForm={() => setIsShowingBackgroundForm(false)}
        />
      )}
      {isShowingEditForm && (
        <EditProfileCard
          userInfo={userInfo}
          closeForm={() => setIsShowingEditForm(false)}
        />
      )}
      <Card>
        <BackgroundImage url={backgroundImage}>
          <EditPosition
            top="0.5rem"
            right="0.5rem"
            onClick={() => setIsShowingBackgroundForm(true)}
          >
            <Edit size="16px" />
          </EditPosition>
          <ProfileImage alt={name} src={image} />
        </BackgroundImage>
        <EditPosition
          top="165px"
          right="0.5rem"
          onClick={() => setIsShowingEditForm(true)}
        >
          <Edit size="16px" />
        </EditPosition>
        <Name>{name}</Name>
        <Contact>
          <a href={`mailto:${email}`}>{email}</a>
          <a href={`tel:${phone}`}>{phone}</a>
        </Contact>
        <Description>{description}</Description>
        <Information>
          <div>
            <a href={github}>
              <Github size="22" />
            </a>
            <a href={linkedIn}>
              <Linkedin size="22" />
            </a>
          </div>
          <div>
            <Location size="22" />
            <span>
              {adress.city}, {adress.country}
            </span>
          </div>
          <span>Última conexión {lastConexion}</span>
        </Information>
        <Job>Buscando trabajo de {job}</Job>
        <Stack>
          <EditPosition>
            <Edit size="16px" />
          </EditPosition>
          <legend>Stack indicado por el usuario</legend>
          {stack.map((tec) => (
            <Tecnology
              alt={tec}
              src={`https://cdn.svgporn.com/logos/${tec}.svg`}
            />
          ))}
        </Stack>
      </Card>
    </>
  );
}
