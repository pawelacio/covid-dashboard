import styled from 'styled-components';
import themesStyles from '../../styles/themes';

export const CountryItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 10px;
  transition: all .1s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
`;

export const CountryNameStyled = styled.div`

`;

export const CountryFlagStyled = styled.img`
  height: 30px;
  width: 45px;
`;

export const SelectCountryStyled = styled.div`

  ${CountryItemStyled} {
    background-color: ${ props => props.theme ? themesStyles[props.theme].cardColor : 'blue' };
  }
`;

