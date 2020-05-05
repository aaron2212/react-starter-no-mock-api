import React from 'react';

import { Field } from 'components/shared/forms/components';

export const Input = ({ type = 'text', ...props }) => {
  return (
    <Field name={props.name} label={props.label}>
      <input type={type} {...props} />
    </Field>
  );
};
