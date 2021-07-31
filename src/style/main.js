import styled from 'styled-components';
import colors from './colors';

const Card = styled.article`
  position: relative;
  background-color: ${colors.paper};
  border: 1px solid ${colors.border};
  border-radius: 5px;
  width: min(1000px, 90vw);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'TMontserrat', Arial, sans-serif;
  color: ${colors.secondary.main};
`;

const EditPosition = styled.button`
  position: absolute;
  top: ${({ top }) => top || '0'};
  right: ${({ right }) => right || '0'};
  background: none;
  border: none;
  cursor: pointer;
`;

export { Card, EditPosition };
