import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class ApexChart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        series: [{
          name: 'Series 1',
          data: [90,100,80,80,70,90],
        }],
        
        options: {
          chart: {
            height: 350,
            type: 'radar',
           
          },
          xaxis: {
            categories: ['Pace', 'Dribbling', 'Shooting', 'Defending', 'Passing', 'Physicality']
          },
          yaxis: {
            tickAmount:10,
            
          },
          colors:['#ff30ba'],
          stroke: {
            show: true,
            width: 3, 
          },
          markers: {
            size: 9,
            
          }
        },
      };
    }
    render() {
      return (
        

  <div id="chart">
<Chart options={this.state.options} series={this.state.series} type="radar"  />
</div>


      );
    }
  }
export default ApexChart;
      



     