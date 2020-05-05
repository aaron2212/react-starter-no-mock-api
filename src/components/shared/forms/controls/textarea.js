import React from 'react';

import { Field } from 'components/shared/forms/components';

export const Textarea = ({ rows, cols, ...props }) => {
  return (
    <Field name={props.name}>
      <textarea rows={rows} cols={cols} {...props}></textarea>
    </Field>
  );
};
