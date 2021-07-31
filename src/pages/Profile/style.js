import styled from 'styled-components';
import colors from '../../style/colors';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
  padding: 1rem;

  background-color: ${colors.background.dark};

  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
`;
