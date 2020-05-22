import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import checkmark from './checkmark.png';

const Input = styled.input`
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 10;
  opacity: 0;
  cursor: pointer;
  margin: 0;

  &:disabled {
    cursor: not-allowed;
  }
`;

const Check = styled.div`
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  opacity: 0;
  background-image: url(${checkmark});
  background-position: center;
  background-size: contain;
`;

const BG = styled.div`
  width: 20px;
  height: 20px;
  background: ${props => props.theme.checkbox.regular.background};
  position: relative;

  input:checked + .check {
    opacity: 1;
  }

  cursor: pointer;

  &:hover {
    filter: brightness(2.5);
  }

  ${props =>
    props.lighter &&
    css`
      background-color: ${props.theme.checkbox.lighter.background};
    `}

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      filter: brightness(0.5);
      &:hover {
        filter: brightness(0.5);
      }
    `}
`;

const Checkbox = ({ onClick, info, lighter, checked, theme, disabled }) => (
  <BG disabled={disabled} lighter={lighter} theme={theme} className="checkbox">
    <Input type="checkbox" data-info={info} onChange={onClick} checked={checked} disabled={disabled} />
    <Check className="check" />
  </BG>
);

Checkbox.propTypes = {
  onClick: PropTypes.func,
  info: PropTypes.any,
  lighter: PropTypes.bool,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  theme: PropTypes.object
};

export default Checkbox;
