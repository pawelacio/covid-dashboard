import styled from 'styled-components';

export const CovidLineChartStyled = styled.div`
  /* AXES */
/* ticks */
.axis line{
stroke: #706f6f;
stroke-width: 0.5;
shape-rendering: crispEdges;
}

/* axis contour */
.axis path {
stroke: #706f6f;
stroke-width: 0.7;
shape-rendering: crispEdges;
}

/* axis text */
.axis text {
fill: #2b2929;
font-family: Arial, Helvetica, sans-serif;
font-size: 120%;
}

/* LINE CHART */
path.deaths {
    fill: none;
    stroke: #ed3700;
}

path.cases {
    fill: none;
    stroke: #2b2929;
    stroke-dasharray: 2;
}

path.recovered {
    fill: none;
    stroke: #9c9c9c;
    stroke-dasharray: 6;
}

.serie_label {
  fill: #2b2929;
  /* font-family: Georgia; */
  font-size: 80%;
}
`;