import React from 'react';
import { InputHolder, Checkbox, Detail } from '../main';

export default { title: 'InputHolder ' };
export const basicInputHolder = () => (
  <InputHolder>
    <Checkbox />
    <Detail>Checkbox</Detail>
  </InputHolder>
);
