import styled from 'styled-components';
import colors from '../../../style/colors';

const Title = styled.h4`
  font-size: 20px;
  margin: 2.5rem 1rem 1rem;
`;

const Info = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem;

  & > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }
`;

const ExtraInfo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem 1rem 2rem;

  & > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }
`;

const Separation = styled.hr`
  width: 80%;
  border-color: ${colors.line};
`;

export { Title, Info, ExtraInfo, Separation };
