import styled, { css } from 'styled-components';

const InputHolder = styled.div`
  ${props => !props.vertical && css`
    display: flex;
    align-items: center;
  `}
  font-family: 'Roboto', sans-serif;
  .checkbox {
    margin-right: 5px;
  }
  & > div {
    display: flex;
    align-items: center;
  }
`;

export default InputHolder;
