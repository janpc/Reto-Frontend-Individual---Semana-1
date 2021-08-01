import {
  InfoParagraph,
  InputContainer,
  SwitchContainer,
  SwitchLine
} from './style';

const Switch = ({ state, setState }) => {
  return (
    <SwitchContainer
      isCheked={state}
      onClick={() => setState(!state)}
      isChecked={state}
    >
      <span>
        <span>
          <input type="checkbox" value="true" />
          <span></span>
        </span>
      </span>
      <span></span>
    </SwitchContainer>
  );
};

const InlineCheckbox = ({ text, state, setState }) => {
  return (
    <SwitchLine>
      <InfoParagraph>
        {text} {state ? 'Si' : 'No'} .
      </InfoParagraph>
      <Switch state={state} setState={setState} />
    </SwitchLine>
  );
};

const FullInput = ({ text, type, value, setValue }) => {
  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }
  return (
    <InputContainer>
      <label for={text}>{text}</label>
      <input
        type={type}
        id={text}
        value={value}
        onChange={handleChange}
        placeholder={text}
      />
    </InputContainer>
  );
};

export { Switch, InlineCheckbox, FullInput };
