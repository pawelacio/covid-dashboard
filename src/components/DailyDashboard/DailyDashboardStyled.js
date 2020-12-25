import styled from 'styled-components';

export const DailyDashboardStyled = styled.div`
  /* padding: 20px; */
`;

export const ValueStyled = styled.div`
  text-align: right;
  font-size: 50px;
  font-weight: 900;
`;

export const RowStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const TextStyled = styled.p`
  display: inline;
  font-weight: ${props => props.bold ? 700 : 500 }
`;

export const CountryFlag = styled.img`
  display: block;
  height: 60px;
  margin-right: 0px;
  margin-left: auto;
  border: 4px solid #000000;
`;

export const CountryName = styled.h2`
  font-size: 36px;
`;