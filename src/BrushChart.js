import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts';
import './App.css';
import axios from 'axios';

const SHEET_ID = "16BYn6tnSfqMOYfuBMsIMZ_3FNv1w8GcCWNlrakwSprY";
const API_KEY = process.env.REACT_APP_API_KEY;

export default function BrushChart(){
  const [options, setOptions] = useState({
    chart: {type: 'line'},
    xaxis: {type: 'datetime',
            labels: { format: 'MM/dd/yy'  },   },              
    annotations: {
      yaxis: [ 
        {
          y: 300,
          borderColor: '#00E396',
          label: {
          borderColor: '#00E396',
          style: {color: '#fff',
                  background: '#00E396'
                    },
          text: 'This is a test'
           }
        },
        {
          y: 500,
          borderColor: '#00E396',
          label: {
          borderColor: '#00E396',
          style: {color: '#fff',
                  background: '#00E396'
                    },
          text: 'This is a test2'
           }
        },
        {
          y: 700,
          borderColor: '#00E396',
          label: {
          borderColor: '#00E396',
          style: {color: '#fff',
                  background: '#00E396'
                    },
          text: 'This is a test3'
           }
        }
      ],
   
      xaxis: [  {
          x: new Date('08/09/2022').getTime(),
          borderColor: '#FFCA28',
          label: {
            borderColor: '#FFCA28',
            style: {
              color: '#fff',
              background: '#FFCA28'
            },
            text: 'This is a test4'
          }
        }
      ]
    },
  })

  const [series, setSeries] = useState([{
    data: ''
  }]);

  useEffect(() => {
    axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A2:B185?key=${API_KEY}`)
        .then(res => {
            setSeries([
              {
              data: res.data.values.map(row=>
                [new Date(row[0]).getTime(),parseInt(row[1].substring(1))] 
                )
            }])
          } )
  }, []);

  return (
    <div Style={'background-color:pink'}>
      <Chart options={options} series={series} type={options.chart.type} height={350} />
    </div>
  )
}



