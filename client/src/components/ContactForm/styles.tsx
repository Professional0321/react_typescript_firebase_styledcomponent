import styled from 'styled-components';
import createFontStyles from '../../util/createFontStyles';

export const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.s}rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  button {
    margin-top: ${props => props.theme.spacing.s}rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ErrorMessage = styled.span`
  ${props => createFontStyles(props.theme.fonts.b3)};
  text-align: left;
  color: ${props => props.theme.colors.error};
`;
