import React from 'react';

import { Page } from './page';
import { Form } from 'components/shared/forms';

export const LandingPage = () => {
  return (
    <Page title="Dashboard" showButton={false}>
      <h1>Welcome to the landing page (with a simple form)</h1>

      <Form />
    </Page>
  );
};
