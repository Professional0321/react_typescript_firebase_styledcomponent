import styled from 'styled-components';
import { Flex, FlexKid } from '../Flex/index';

export const ContentWrapper = styled(Flex)`
  background-color: ${props => props.theme.colors.secondaryVariant};
`;

export const ServiceListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: calc(-${props => props.theme.spacing.xs}rem / 2);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: calc(-${props => props.theme.spacing.l}rem / 2);
  }

  @media screen and (min-width: 1280px) {
    justify-content: space-between;
  }
`;

export const Item = styled(FlexKid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: calc(${props => props.theme.spacing.xs}rem / 2);
  text-decoration: none;
  margin: ${props => props.theme.spacing.m}rem 0;
  text-align: center;

  svg {
    height: 3.625rem;
    width: 3.937rem;
    fill: ${props => props.theme.colors.primary};
  }

  @media screen and (min-width: 768px) {
    width: 33.333%;
  }
`;