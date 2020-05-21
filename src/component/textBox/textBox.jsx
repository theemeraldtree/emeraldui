import styled from 'styled-components';

const TextBox = styled.textarea.attrs({
  type: 'text'
})`
  background-color: ${props => props.theme.input.background};
  border: 0;
  outline: none;
  color: ${props => props.theme.input.text};
  height: 250px;
  font-size: 17pt;
  padding-left: 3px;
  font-family: 'Roboto', sans-serif;
  resize: none;
  &::placeholder {
    color: ${props => props.theme.input.placeholder};
  }
  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.75);
  }
`;

export default TextBox;
