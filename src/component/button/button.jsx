import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css, ThemeContext } from 'styled-components';
import FluentHover from '../../util/fluentHover';

function getColor(name, theme) {
  if (theme && theme.button.backgroundColors[name]) return theme.button.backgroundColors[name];
  return name;
}

const Base = styled.button.attrs(props => ({
  style: {
    background: getColor(props.color, props.theme)
  }
}))`
  padding: 11.5px;
  color: white;
  width: fit-content;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  font-size: 12pt;
  transition: 150ms;
  font-family: 'Roboto', sans-serif;

  ${props =>
    props.disabled &&
    css`
      filter: brightness(0.65);
    `}

  img {
    width: 90%;
  }

  .spinner {
    width: 20px;
    height: 20px;

    div {
      width: 15px;
      height: 15px;
      border-width: 3px;
    }
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    ${props =>
      !props.disabled &&
      css`
        transform: scale(1.05);
      `}

    ${props =>
      props.disabled &&
      css`
        cursor: not-allowed;
      `}
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: 2px solid yellow;
  }
`;

const Button = ({ children, color, dimHoverEffect, ...rest }) => {
  const ref = React.createRef();
  const theme = useContext(ThemeContext);
  const baseColor = getColor(color, theme);

  return (
    <Base
      {...rest}
      theme={theme}
      ref={ref}
      color={color}
      onMouseMove={e => FluentHover.mouseMove(e, ref, baseColor, dimHoverEffect)}
      onMouseLeave={() => FluentHover.mouseLeave(ref, baseColor)}
    >
      {children}
    </Base>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  dimHoverEffect: PropTypes.bool,
  theme: PropTypes.object
};

Button.defaultProps = {
  color: 'green'
};

export default Button;
