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
`;

export const TextStyled = styled.p`
  display: inline;
  font-weight: ${props => props.bold ? 700 : 500 }
`;