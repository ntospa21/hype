import React from 'react'
import { HorizontalBar  } from 'react-chartjs-2'

const barData = {
  labels: ['EPP', 'S&D', 'ECR', 'ALDE', 'GREENS/EFA', 'GUE/NGL', 'EFDD', 'ENF', 'NI'],
  datasets: [
    {
      label: '# of Votes',
      data: [29.2,25.2,9.6,9.0,6.9,6.8,5.9,4.8,2.6],
      fill: false,
      backgroundColor: ['grey', 'red', 'darkblue', 'yellow', 'purple', 'green','cyan', 'orange', 'pink'],
      borderColor: ['rgb(255, 99, 132)', 'rgba(255,23,15,5)']
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  
}

const Horizontal = () => (
  <>
    <div className='header'>
     
    </div>
    <HorizontalBar data={barData} options={options}  
    onElementsClick={elem => {
    var data = barData.datasets[elem[0]._datasetIndex].data;
    alert(`${data[elem[0]._index]}`);

    
  }}
 />
  </>
)

export default Horizontal
