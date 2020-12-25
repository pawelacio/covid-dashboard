import styled, {keyframes} from 'styled-components';

const dot = keyframes`
  50% {
    transform: translateX(96px);
  }
`;

const dots = keyframes`
  50% {
    transform: translateX(-31px);
  }
`;

export const Gooey = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 142px;
  height: 40px;
  transform: translate(-50%, -50%);
  background: white;
  filter: contrast(20);
`;

export const Dot = styled.span`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 12px;
  left: 15px;
  filter: blur(4px);
  background: #000;
  border-radius: 50%;
  transform: translateX(0);
  animation: ${dot} 2.8s infinite;
`;

export const Dots = styled.div`
  transform: translateX(0);
  margin-top: 12px;
  margin-left: 31px;
  animation: ${dots} 2.8s infinite;

  span {
    display: block;
    float: left;
    width: 16px;
    height: 16px;
    margin-left: 16px;
    filter: blur(4px);
    background: #000;
    border-radius: 50%;
  }
`;


export const LoaderStyled = styled.div`
`;

