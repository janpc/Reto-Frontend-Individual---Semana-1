import styled from 'styled-components';
import colors from '../../../style/colors';

const BackgroundImage = styled.div`
  background: url('${({ url }) => url}');
  height: 150px;
  width: 100%;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  border-bottom: 1px solid ${colors.border};
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid ${colors.border};
  position: absolute;
  bottom: -50px;
`;

const Name = styled.h3`
  margin: 0.75rem 1rem 0.5rem;
  font-size: 24px;
`;

const Contact = styled.p`
  margin: 0.5rem;
  & > a {
    margin: 0 0.5rem;
    color: currentColor;
    text-decoration: none;
    & + a {
      margin: 0;
      &:before {
        content: '|';
        margin-right: 0.5rem;
      }
    }
  }

  @media (max-width: 450px) {
    & > a {
      display: block;
      width: 100%;
      margin: 0.5rem;

      & + a:before {
        content: '';
      }
    }
  }
`;

const Description = styled.p`
  width: 90%;
  margin: 0.5rem;
  text-align: center;
`;

const Information = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & > span {
    color: ${colors.primary.light};
  }
`;

const Job = styled.h4`
  width: 85%;
  font-size: 20px;
  text-align: center;
  margin: 1rem 0;
`;

const Stack = styled.fieldset`
  position: relative;
  max-width: 90%;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 2rem;
  margin: 1rem 0 2rem;
  justify-content: center;
  border: 1px solid ${colors.secondary.dark};
  gap: 1.5rem;
  & > legend {
    font-size: 18px;
  }
`;

const Tecnology = styled.img`
  aspect-ratio: 1/1;
  width: 50px;
`;

export {
  BackgroundImage,
  ProfileImage,
  Name,
  Contact,
  Description,
  Information,
  Job,
  Stack,
  Tecnology
};
