import React from 'react';
import { Button } from '../main';
import ButtonContainer from './util/buttonContainer';

export default { title: 'Button' };

export const basicColors = () => (
  <ButtonContainer>
    <Button color="green">Green Button (Primary)</Button>
    <Button color="red">Red Button (Destructive)</Button>
    <Button color="blue">Blue Button</Button>
    <Button color="yellow">Yellow Button</Button>
    <Button color="purple">Purple Button</Button>
  </ButtonContainer>
);
