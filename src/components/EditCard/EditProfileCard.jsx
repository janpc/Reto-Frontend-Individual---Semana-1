import EditCard from './EditCard';

import { Title, InfoParagraph, InputContainer, Submit, Form } from './style';

import { FullInput } from './EditOtherComponents';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../redux/user/user-actions';

export default function EditProfileCard({ closeForm, userInfo }) {
  const dispatch = useDispatch();

  const [image, setImage] = useState(userInfo.image);
  const [country, setCountry] = useState(userInfo.adress.country);
  const [city, setCity] = useState(userInfo.adress.city);
  const [description, setDescription] = useState(userInfo.description);
  const [discord, setDiscord] = useState(userInfo.discord);
  const [portfolio, setPortfolio] = useState(userInfo.portfolio);

  function handleSubmit(e) {
    e.preventDefault();

    const info = {
      image,
      adress: {
        country,
        city
      },
      description,
      discord,
      portfolio
    };

    dispatch(setUserInfo(info));
    closeForm();
  }
  return (
    <EditCard closeForm={closeForm}>
      <Form onSubmit={handleSubmit}>
        <Title>Datos Personales</Title>
        <InfoParagraph>
          URL de la imagen que deseas utilizar como avatar:
        </InfoParagraph>
        <FullInput
          text="Avatar"
          type="text"
          value={image}
          setValue={setImage}
        />
        <InfoParagraph>
          Al tener tus datos actualizados tienes mas probabilidades de que las
          empresas contacten contigo.
        </InfoParagraph>
        <FullInput
          text="Pais"
          type="text"
          value={country}
          setValue={setCountry}
        />
        <FullInput text="Ciudad" type="text" value={city} setValue={setCity} />
        <InfoParagraph>
          Aquí podrás añadir información personal que creas relevante.
          Comentanos quién eres, que cosas te gustan, etc.
        </InfoParagraph>
        <InputContainer>
          <label for="biografia">Biografia</label>
          <textarea
            id="biografia"
            placeholder="Biografia"
            value={description}
            onChange={(e) => {
              e.preventDefault();
              setDescription(e.target.value);
            }}
          />
        </InputContainer>
        <InfoParagraph>URL de tus redes sociales:.</InfoParagraph>
        <FullInput
          text="Discord"
          type="text"
          value={discord}
          setValue={setDiscord}
        />
        <FullInput
          text="Portfolio"
          type="text"
          value={portfolio}
          setValue={setPortfolio}
        />
        <Submit type="submit" value="Guardar" />
      </Form>
    </EditCard>
  );
}
