import React, {useEffect, useContext} from 'react';
import { Line, defaults } from 'react-chartjs-2';
import {ThemeContext} from '../../ThemeContext';
import themesStyles from '../../styles/themes';

import {
  CovidLineChartStyled
} from './CovidLineChartStyled';


const BarChart = ({data}) => {
  const { theme } = useContext(ThemeContext);

  const date = data.map(item => item.date);
  const cases = data.map(item => item.cases);
  const deaths = data.map(item => item.deaths);
  const recovered = data.map(item => item.recovered);


  defaults.global.defaultFontColor = theme ? themesStyles[theme].fontColor : '#000000';


  const chartData = {
    labels: date,
    datasets: [
      {
        label: 'Cases',
        data: cases,
        fill: false,
        borderColor: '#3288bd',
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Deaths',
        data: deaths,
        fill: false,
        borderColor: '#d53e4f',
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Recovered',
        data: recovered,
        fill: false,
        borderColor: '#99d594',
        yAxisID: 'y-axis-1',
      },
    ],
  }
  
  const options = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          ticks: {
            callback: function(value, index, values) {
                return values[0] > 1000000 ? value / 1e6 + 'M' : value;
            }
        }
        },
      ],
      xAxes: [
        {
          type: 'time',
        }
      ]
    },
  }

  useEffect(() => {
    console.log(data);
    return () => {
      console.log('Unmount')
    }
  }, [data])

  return (
    <CovidLineChartStyled>
       <Line data={chartData} options={options} />
    </CovidLineChartStyled>
  )
}

export default BarChart