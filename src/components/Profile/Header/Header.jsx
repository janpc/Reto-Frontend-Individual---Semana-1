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

export default function Header({ userInfo }) {
  const {
    name,
    image,
    backgrounImage,
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

  return (
    <Card>
      <BackgroundImage
        url={
          backgrounImage ||
          'https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=800&h=300'
        }
      >
        <EditPosition top="0.5rem" right="0.5rem">
          <Edit size="16px" />
        </EditPosition>
        <ProfileImage
          alt={name}
          src={
            image
              ? image
              : 'https://i1.wp.com/bripgroup.com/wp-content/uploads/2018/05/blank-profile-picture-973460_640.png?resize=300%2C300&ssl=1'
          }
        />
      </BackgroundImage>
      <EditPosition top="165px" right="0.5rem">
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
            <Github size="26" />
          </a>
          <a href={linkedIn}>
            <Linkedin size="26" />
          </a>
        </div>
        <div>
          <Location size="26" />
          <span>{adress}</span>
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
  );
}
