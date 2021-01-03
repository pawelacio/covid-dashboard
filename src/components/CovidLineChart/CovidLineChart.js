import React, {useEffect, useRef} from 'react'
import * as d3 from 'd3'

import {
  CovidLineChartStyled
} from './CovidLineChartStyled';

const BarChart = ({data}) => {
  const barChartRef = useRef(null);

  useEffect(() => {
    // Prepare SVG
    var margin = {top: 10, right: 30, bottom: 30, left: 100};
    const width = 900 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // D3 part
    // Append SVG element
    const svg = d3.select(barChartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

    //Create scale X
    const scaleX = d3.scaleTime()
      .domain([new Date(data[0].date), new Date(data[data.length-1].date)])
      .range([0, width])
      .nice();

    const xAxis = d3.axisBottom()
      .ticks(d3.timeMonth.every(1))
      .scale(scaleX);

    svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);


    const scaleY = d3.scaleLinear()
      .domain([0, data[data.length-1].cases])
      .range([height, 0]);

    const yAxis = d3.axisLeft()
      .scale(scaleY);

    svg.append("g")
      .attr("class", "axis")
      .call(yAxis);

    // Add the cases line
    const casesLine = d3.line()
      .x(d => { return scaleX(new Date(d.date)) })
      .y(d => { return scaleY(d.cases) })

    svg.append("path")
      .attr("class", "cases")
      .datum(data)
      .attr("d", casesLine)

    // Add the deaths line
    const deathsLine = d3.line()
      .x(d => { return scaleX(new Date(d.date)) })
      .y(d => { return scaleY(d.deaths) })

    svg.append("path")
      .attr("class", "deaths")
      .datum(data)
      .attr("d", deathsLine)

    // Add the recovered line
    const recoveredLine = d3.line()
    .x(d => { return scaleX(new Date(d.date)) })
    .y(d => { return scaleY(d.recovered) })

    svg.append("path")
      .attr("class", "recovered")
      .datum(data)
      .attr("d", recoveredLine)


    return () => {
      d3.select("svg").remove();
    }
  }, [data])

  return (
    <CovidLineChartStyled ref={barChartRef}></CovidLineChartStyled>
  )
}

export default BarChart