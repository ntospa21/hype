import React from 'react'
import { HorizontalBar  } from 'react-chartjs-2'

const barData = {
  labels: ['EPP', 'S&D', 'ECR', 'ALDE', 'GREENS/EFA', 'GUE/NGL', 'EFDD', 'ENF', 'NI'],
  datasets: [
    {
      label: '# of Votes',
      data: [219,189,72,68,52,51,44,36,20],
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
