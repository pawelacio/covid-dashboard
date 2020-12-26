import styled from 'styled-components';
import { breakpoints, responsiveFrom } from '../../helpers/breakpoints';
import themesStyles from '../../styles/themes';

export const DailyDashboardStyled = styled.div`
  /* padding: 20px; */
`;

export const ValueStyled = styled.div`
  text-align: right;
  font-size: 30px;
  font-weight: 900;

  color: ${ props => props.theme ? themesStyles[props.theme].fontColor : 'blue' };

  ${responsiveFrom(breakpoints.tablet)`
      font-size: 50px;
  `};
`;

export const RowStyled = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  ${responsiveFrom(breakpoints.medium)`
      flex-wrap: nowrap;
  `};
`;

export const TextStyled = styled.p`
  display: inline;
  font-weight: ${props => props.bold ? 700 : 500 };
  color: ${ props => props.theme ? themesStyles[props.theme].fontColor : 'blue' };
`;

export const CountryFlag = styled.img`
  display: block;
  height: 40px;
  margin-right: 0px;
  margin-left: auto;
  border: 4px solid #000000;

  ${responsiveFrom(breakpoints.medium)`
    height: 60px;
  `}
`;

export const CountryName = styled.h2`
  font-size: 24px;

  color: ${ props => props.theme ? themesStyles[props.theme].fontColor : 'blue' };

  ${responsiveFrom(breakpoints.medium)`
    font-size: 36px;
  `}
`;