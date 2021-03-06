import React from 'react';
import styled, { css } from 'styled-components';
import { VerticalSpacer, WidthConstraints, Flex } from '../Layout';
import { ButtonInternal } from './Button';
import { arrow } from '../../util/icons';
import Typography from '../Typography/Typography';
import useResponsiveWindowSize from '../../hooks/useResponsiveWindowSize';

interface Props {
  totalPages: number;
  preHandler: () => any;
  nextHandler: () => any;
  jumpHandler: (pageNumber: number) => any;
  displayPrev: boolean;
  displayNext: boolean;
  currentPage: number;
}

export const PaginateButtons: React.FunctionComponent<Props> = ({
  totalPages,
  preHandler,
  nextHandler,
  jumpHandler,
  displayNext,
  displayPrev,
  currentPage,
}) => {
  const { isTablet } = useResponsiveWindowSize();
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <VerticalSpacer>
      <WidthConstraints>
        <Flex direction="row" justify={isTablet ? 'space-around' : 'center'} align="center">
          {displayPrev && (
            <PrevNextButton
              to="/#"
              role="button"
              size="small"
              variant="secondaryVariant"
              aria-label="Go to previous page"
              title="Go to previous page"
              onClick={e => {
                e.preventDefault();
                preHandler();
              }}
            >
              {isTablet && <Typography element="span" variant="b2" content="Prev" />}
              {arrow}
            </PrevNextButton>
          )}
          {!isTablet &&
            pageNumbers.map((number, index) => (
              <JumpPageButton
                key={index}
                role="button"
                size="small"
                variant="secondary"
                current={index === currentPage - 1 ? 'true' : 'false'}
                aria-label={`Page ${number}`}
                title={`Page ${number}`}
                to="/#"
                onClick={e => {
                  e.preventDefault();
                  jumpHandler(number);
                }}
              >
                {number}
              </JumpPageButton>
            ))}
          {displayNext && (
            <PrevNextButton
              role="button"
              size="small"
              to="/#"
              variant="secondaryVariant"
              aria-label="Go to next page"
              title="Go to next page"
              onClick={e => {
                e.preventDefault();
                nextHandler();
              }}
              next="true"
            >
              {arrow}
              {isTablet && <Typography element="span" variant="b2" content="Next" />}
            </PrevNextButton>
          )}
        </Flex>
      </WidthConstraints>
    </VerticalSpacer>
  );
};

export const JumpPageButton = styled(ButtonInternal)<{ current?: 'true' | 'false' }>`
  margin: 0 ${props => props.theme.spacing.xs}rem;
  border: none;
  ${props =>
    props.current === 'true' &&
    css`
      background-color: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.dark};
    `}
`;

export const PrevNextButton = styled(ButtonInternal)<{ next?: 'true' | 'false' }>`
  border: none;
  color: ${props => props.theme.colors.primary};
  svg {
    transform: ${props => (props.next === 'true' ? 'rotate(-90deg)' : 'rotate(90deg)')};
    width: 36px;
    height: 36px;
    fill: ${props => props.theme.colors.primary};
  }
`;

export default PaginateButtons;
