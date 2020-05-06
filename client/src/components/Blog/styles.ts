import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import createFontStyles from '../../util/createFontStyles';
import Typography from '../Typography';
import { IColors } from '../../types/theme';

const Section = styled.section<{ backgroundColor?: keyof IColors }>`
  background-color: ${props => props.theme.colors.background};

  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.theme.colors[props.backgroundColor]};
    `}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BlogCard = styled(Link)`
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${props => props.theme.colors.onBackground};
  border: 1px solid white;
  border-radius: 1rem;
  margin: calc(${props => props.theme.spacing.s}rem / 2);
  padding: ${props => props.theme.spacing.xs}rem;
  transition: all 0.15s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  }

  @media screen and (min-width: 768px) {
    width: calc(47% - ${props => props.theme.spacing.xs}rem);
    margin: calc(${props => props.theme.spacing.m}rem / 2);
  }

  @media screen and (min-width: 1280px) {
    width: calc(33.332% - ${props => props.theme.spacing.l}rem);
    margin: calc(${props => props.theme.spacing.l}rem / 2);
    padding: ${props => props.theme.spacing.s}rem;
  }
`;

const BlogImage = styled.img`
  width: 100%;
`;

const BlogTitle = styled(Typography)<{ element: 'h3' | 'h4' }>`
  margin: ${props => props.theme.spacing.xs}rem 0 ${props => props.theme.spacing.s}rem;
  text-align: left;
  transition: all 0.15s ease-in-out;
  text-decoration: underline;
  text-decoration-color: transparent;
  text-transform: capitalize;

  ${BlogCard}:hover &,
  ${BlogCard}:focus & {
    text-decoration-color: ${props => props.theme.colors.onBackground};
  }
`;

const BlogIntroText = styled(Typography)<{ element: 'p' }>`
  margin: 0;
  text-align: left;
  ${props => createFontStyles(props.theme.fonts.b1)};
`;

const SectionTitle = styled(Typography)<{ element: 'h2' }>`
  text-transform: capitalize;
`;

const More = styled.div`
  margin: ${props => props.theme.spacing.s}rem auto;
  @media screen and (min-width: 1280px) {
    margin: ${props => props.theme.spacing.m}rem auto;
  }
`;

export { Section, Wrapper, BlogCard, BlogImage, BlogTitle, BlogIntroText, SectionTitle, More };
