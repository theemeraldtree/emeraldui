import styled from 'styled-components';

const TextInput = styled.input.attrs({
  type: 'text'
})`
  background-color: ${props => props.theme.input.background};
  border: 0;
  outline: none;
  color: ${props => props.theme.input.text};
  height: 40px;
  font-size: 17pt;
  padding-left: 10px;
  font-family: 'Roboto', sans-serif;
  &::placeholder {
    color: ${props => props.theme.input.placeholder};
  }
  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.75);
  }
`;

export default TextInput;
