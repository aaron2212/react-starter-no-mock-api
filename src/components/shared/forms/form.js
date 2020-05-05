import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import { Input } from 'components/shared/forms/controls';
import { messages } from '../../../const';

export const Form = () => {
  const initialValues = {
    query: '',
  };
  const validationSchema = yup.object().shape({
    query: yup.string().required(messages.validation.required),
  });

  const makeApiCall = async (values, setSubmitting) => {
    setSubmitting(true);

    // Make API call here

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) =>
        makeApiCall(values, setSubmitting)
      }
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        isSubmitting,
        errors,
      }) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Input
            placeholder="Search"
            value={values.search}
            name="query"
            onChange={handleChange}
            onBlur={handleBlur}
            label="Search"
          />

          <input type="submit" disabled={isSubmitting} value="Search" />
        </form>
      )}
    </Formik>
  );
};
