import React from 'react';
import styled from 'styled-components';

import { ValidationError } from './validation-error';

const Wrapper = styled.div`
  display: block;
`;

const Label = styled.div`
  display: block;
`;

export const Field = ({ children, name, label }) => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      {children}
      <ValidationError name={name} component="div" />
    </Wrapper>
  );
};
