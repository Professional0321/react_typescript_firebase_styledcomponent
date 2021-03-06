import styled, { css } from 'styled-components';
import Button from '../Button/Button';

export const HeaderWrapper = styled.header`
  width: 100%;
  background: ${props => props.theme.colors.background};
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid ${props => props.theme.colors.surface};
  position: sticky;
  top: 0;
  z-index: 999;

  span {
    color: inherit;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.s}rem;

  @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
    padding: ${props => props.theme.spacing.xs}rem;
    ${props => props.theme.spacing.l}rem;
  }
`;

export const HeaderNavLinkList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  list-style-type: none;
  -webkit-padding-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
`;

export const HeaderNavLink = styled.a`
  color: ${props => props.theme.colors.onBackground};
  margin-right: ${props => props.theme.spacing.s}rem;
  text-decoration: none;
  text-transform: capitalize;
  font-family: ${props => props.theme.fonts.b2.family};
  font-weight: ${props => props.theme.fonts.b2.weight};
  font-size: ${props => props.theme.fonts.b2.size}rem;
  ${props =>
    props.theme.fonts.b2.lineHeight &&
    css`
      line-height: ${props.theme.fonts.b2.lineHeight};
    `};

  ${props =>
    props.theme.fonts.b2.mediaQueries &&
    css`
      @media (min-width: ${props.theme.fonts.b2.mediaQueries[0].query}px) {
        ${props.theme.fonts.b2.mediaQueries[0].family &&
          css`
            font-family: ${props.theme.fonts.b2.mediaQueries[0].family};
          `};
        ${props.theme.fonts.b2.mediaQueries[0].weight &&
          css`
            font-weight: ${props.theme.fonts.b2.mediaQueries[0].weight};
          `};
        ${props.theme.fonts.b2.mediaQueries[0].size &&
          css`
            font-size: ${props.theme.fonts.b2.mediaQueries[0].size}rem;
          `};
        ${props.theme.fonts.b2.mediaQueries[0].lineHeight &&
          css`
            line-height: ${props.theme.fonts.b2.mediaQueries[0].lineHeight};
          `};
      }
    `}

  &:hover {
    color: ${props => props.theme.colors.primary};
    svg {
      fill: ${props => props.theme.colors.primary};
    }
  }

  svg {
    fill: ${props => props.theme.colors.onBackground};
    width: 24px;
    height: 24px;
  }

  @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
    padding: 0.5rem 1rem;
  }
`;

export const LikeButton = styled(HeaderNavLink)`
  position: relative;

  svg {
    fill: ${props => props.theme.colors.onBackground};
  }
`;

export const Badge = styled.span`
  background-color: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.onBackground};
  border: 1px solid ${props => props.theme.colors.surface};
  position: absolute;
  top: -4px;
  left: 39px;
  width: 16px;
  height: 16px;
  display: block;
  font-size: 10px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
  border-radius: 50%;

  @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 4px;
    left: 50px;
    width: 18px;
    height: 18px;
  }
`;

export const SiteLogo = styled(HeaderNavLink)`
  color: ${props => props.theme.colors.primary};
  font-family: 'Lobster', cursive;
  font-weight: bold;
  font-size: 1.5rem !important;

  &:hover {
    opacity: 0.8;
  }

  @media all and (min-width: ${props => props.theme.mediaQueries.medium}px) {
    font-size: 2.35rem !important;
  }
`;

export const HeaderButton = styled(HeaderNavLink)`
  border: 2px solid ${props => props.theme.colors.onSecondary};
  list-text-style: none;
  padding: 0.2rem 0.5rem;

  @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
    padding: 0.5rem 1rem;
  }
`;

export const HeaderMenuLeft = styled.div`
  display: flex;
`;

export const HeaderMenuRight = styled.div`
  list-style-type: none;
  display: inline-flex;
  align-content: flex-start;
  justify-content: center;
`;

export const MobileMenuIcon = styled.button`
  padding: 0;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  svg {
    margin: 0;
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.onBackground};
  }

  &:hover {
    svg {
      fill: ${props => props.theme.colors.primary};
    }
  }
`;

export const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -0.5rem;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
  z-index: 999;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
  position: relative;
  font-family: ${props => props.theme.fonts.h1.family};
  font-weight: ${props => props.theme.fonts.h1.weight};
  font-size: ${props => props.theme.fonts.h1.size}rem;
  ${props =>
    props.theme.fonts.h1.lineHeight &&
    css`
      line-height: ${props.theme.fonts.h1.lineHeight};
    `};

  ${props =>
    props.theme.fonts.h1.mediaQueries &&
    css`
      @media (min-width: ${props.theme.fonts.h1.mediaQueries[0].query}px) {
        ${props.theme.fonts.h1.mediaQueries[0].family &&
          css`
            font-family: ${props.theme.fonts.h1.mediaQueries[0].family};
          `};
        ${props.theme.fonts.h1.mediaQueries[0].weight &&
          css`
            font-weight: ${props.theme.fonts.h1.mediaQueries[0].weight};
          `};
        ${props.theme.fonts.h1.mediaQueries[0].size &&
          css`
            font-size: ${props.theme.fonts.h1.mediaQueries[0].size}rem;
          `};
        ${props.theme.fonts.h1.mediaQueries[0].lineHeight &&
          css`
            line-height: ${props.theme.fonts.h1.mediaQueries[0].lineHeight};
          `};
      }
    `}

  a {
    margin: ${props => props.theme.spacing.l}rem auto;
    color: ${props => props.theme.colors.onBackground};
  }
`;

export const MobileIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.onSurface};
`;

export const ThemeToggleButton = styled.button`
  color: ${props => props.theme.colors.onBackground};
  margin-right: ${props => props.theme.spacing.s}rem;
  text-decoration: none;
  background-color: ${props => props.theme.colors.background};
  border: none;
  outline: none;
  font-family: ${props => props.theme.fonts.b2.family};
  font-weight: ${props => props.theme.fonts.b2.weight};
  font-size: ${props => props.theme.fonts.b2.size}rem;
  ${props =>
    props.theme.fonts.b2.lineHeight &&
    css`
      line-height: ${props.theme.fonts.b2.lineHeight};
    `};

  ${props =>
    props.theme.fonts.b2.mediaQueries &&
    css`
      @media (min-width: ${props.theme.fonts.b2.mediaQueries[0].query}px) {
        ${props.theme.fonts.b2.mediaQueries[0].family &&
          css`
            font-family: ${props.theme.fonts.b2.mediaQueries[0].family};
          `};
        ${props.theme.fonts.b2.mediaQueries[0].weight &&
          css`
            font-weight: ${props.theme.fonts.b2.mediaQueries[0].weight};
          `};
        ${props.theme.fonts.b2.mediaQueries[0].size &&
          css`
            font-size: ${props.theme.fonts.b2.mediaQueries[0].size}rem;
          `};
        ${props.theme.fonts.b2.mediaQueries[0].lineHeight &&
          css`
            line-height: ${props.theme.fonts.b2.mediaQueries[0].lineHeight};
          `};
      }
    `}

  svg {
    path {
      stroke: ${props => props.theme.colors.onBackground};
    }
    fill: ${props => props.theme.colors.white};
    width: 24px;
    height: 24px;
  }

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
    svg {
      path {
        stroke: ${props => props.theme.colors.primary};
      }
      fill: ${props => props.theme.colors.primaryVariant};
    }
  }

  @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
    padding: 0.5rem 1rem;
  }
`;

export const HeaderTop = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.surface};
  display: flex;
  justify-content: flex-end;
  line-height: 24px;
  a {
    color: ${props => props.theme.colors.onBackground};
    padding: 0.2rem 0;
    font-family: ${props => props.theme.fonts.b1.family};
    font-weight: ${props => props.theme.fonts.b1.weight};
    font-size: ${props => props.theme.fonts.b1.size}rem;
    ${props =>
      props.theme.fonts.b1.lineHeight &&
      css`
        line-height: ${props.theme.fonts.b1.lineHeight};
      `};

    ${props =>
      props.theme.fonts.b1.mediaQueries &&
      css`
        @media (min-width: ${props.theme.fonts.b1.mediaQueries[0].query}px) {
          ${props.theme.fonts.b1.mediaQueries[0].family &&
            css`
              font-family: ${props.theme.fonts.b1.mediaQueries[0].family};
            `};
          ${props.theme.fonts.b1.mediaQueries[0].weight &&
            css`
              font-weight: ${props.theme.fonts.b1.mediaQueries[0].weight};
            `};
          ${props.theme.fonts.b1.mediaQueries[0].size &&
            css`
              font-size: ${props.theme.fonts.b1.mediaQueries[0].size}rem;
            `};
          ${props.theme.fonts.b1.mediaQueries[0].lineHeight &&
            css`
              line-height: ${props.theme.fonts.b1.mediaQueries[0].lineHeight};
            `};
        }
      `}
  }

  @media all and (min-width: ${props => props.theme.mediaQueries.large}px) {
    padding: 0;
    font-size: 0.225rem;
    height: 24px;
    a {
      padding: 0;
    }
  }
`;

export const SearchBarContainer = styled.div<{ open?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.surface};
  padding: 1.25rem;
  height: 4.5rem;

  form {
    margin: 0;
    padding: 0;
    width: auto;
    flex: 0 1 50rem;
  }
`;

export const CloseSearchButton = styled(Button)`
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  width: 48px;

  svg {
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.onBackground};
  }

  &:hover,
  &:active,
  &:focus {
    opacity: 0.8;

    svg {
      fill: ${props => props.theme.colors.primary};
    }
  }
`;
