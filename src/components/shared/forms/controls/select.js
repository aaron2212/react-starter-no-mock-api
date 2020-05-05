import React from 'react';

import { Field } from 'components/shared/forms/components';

export const Select = ({ options, ...props }) => {
  const selectOptions = options.map((v) => (
    <option key={v} value={v}>
      {v}
    </option>
  ));

  return (
    <Field name={props.name}>
      <select {...props}>{selectOptions}</select>
    </Field>
  );
};
