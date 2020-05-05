import styled from 'styled-components';
import { ErrorMessage } from 'formik';

import { theme } from 'theme';

export const ValidationError = styled(ErrorMessage)`
  color: ${theme.colors.error};
`;
