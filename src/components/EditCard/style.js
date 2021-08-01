import styled from 'styled-components';
import colors from '../../style/colors';

const Background = styled.div`
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.background.dark}88;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: min(90vw, 600px);
  max-height: 90vh;
  background-color: ${colors.paper};
  color: ${colors.secondary.light};
  border-radius: 5px;
  font-family: 'Montserrat', Arial;
  padding: 2rem;
  box-sizing: border-box;

  overflow: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.primary.dark};
    border-radius: 5px;
    &:hover {
      background: ${colors.primary.light};
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 1rem 0;
`;

const InfoParagraph = styled.p`
  text-align: left;
  align-self: flex-start;
  margin: 1.5rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${colors.secondary.dark};
  border-radius: 10px;
  margin-bottom: 2rem;
  outline: none;
  box-sizing: border-box;

  & > label {
    margin-left: 10px;
    margin-top: -0.5rem;
    background: ${colors.paper};
    color: ${colors.secondary.main};
    font-type: sans-serif;
    padding: 0 5px;
    width: fit-content;
  }
  & > input,
  > textarea {
    margin: 5px 10px;
    background: none;
    border: none;
    outline: none;
    color: ${colors.secondary.light};
    font-size: 16px;
  }

  &:hover,
  :focus {
    border: 1px solid ${colors.secondary.light};
  }
`;

const Submit = styled.input`
  width: 100%;
  padding: 0.5rem 0;
  margin: 1rem 0;
  background: ${colors.primary.dark};
  border: none;
  border-radius: 10px;
  outline: none;
  color: ${colors.secondary.light};
  font-size: 20px;
  cursor: pointer;

  &:hover,
  :focus {
    background: ${colors.primary.light};
  }
`;

const SwitchContainer = styled.span`
  width: 58px;
  height: 38px;
  display: inline-flex;
  padding: 12px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
  vertical-align: middle;

  & > span:first-of-type {
    padding: 9px;
    top: 0;
    left: 0;
    z-index: 2;
    position: absolute;
    transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    ${({ isChecked }) =>
      isChecked
        ? 'color:#569b51;transform: translateX(20px);'
        : 'color:#bdbdbd;'}

    & > span {
      width: 100%;
      display: flex;
      align-items: inherit;
      justify-content: inherit;

      & > input {
        top: 0;
        left: 0;
        width: 100%;
        cursor: inherit;
        height: 100%;
        margin: 0;
        opacity: 0;
        padding: 0;
        z-index: 1;
        position: absolute;
      }

      & > span {
        width: 20px;
        height: 20px;
        box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
          0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
        border-radius: 50%;
        background-color: currentColor;
      }
    }
  }

  & > span:not(:first-child) {
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: 1;
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 7px;
    background-color: ${({ isChecked }) => (isChecked ? '#569b51' : '#EEEEEE')};
`;

const SwitchLine = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const BackgroundImagePreview = styled.img`
  width: 100%;
  margin: 2rem 0;
  cursor: pointer;

  &:hover,
  :focus {
    opacity: 0.7;
  }
`;

export {
  Background,
  Card,
  Title,
  InfoParagraph,
  InputContainer,
  Submit,
  Form,
  SwitchContainer,
  SwitchLine,
  BackgroundImagePreview
};
