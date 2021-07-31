import styled from 'styled-components';
import colors from '../../../style/colors';

const Title = styled.h4`
  font-size: 20px;
  margin: 2.5rem 0 1rem;
`;

const ValidatedSkills = styled.fieldset`
  position: relative;
  width: 90%;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 0;
  margin: 1rem 0 2rem;
  justify-content: center;
  border: 1px solid ${colors.secondary.dark};
  gap: 1.5rem;
  & > legend {
    font-size: 18px;
  }
`;

const OtherSkills = styled.div`
  display: flex;
  gap: 1rem;
`;

const Skill = styled.div`
  width: 50px;

  & > img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
  }

  & > p {
    font-size: 14px;
    text-align: center;
    margin-top: 0.5rem;
  }
`;

export { Title, ValidatedSkills, Skill, OtherSkills };
