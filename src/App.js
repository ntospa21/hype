import React from 'react';
import Plot from 'react-plotly.js';
import './sec.css'


function App(){
         return(
        <div className="container">
              <div className='koumpaki' >
   </div>
  

            <h5>What are the issues which made you vote in the recent European elections? Firstly? Any others?</h5>
            <Plot className='content'
            data={[
                {
                type: 'bar',
                title: "Share of committee chairs by political group",
                y: ['EPP', 'S&D', 'ECR', 'ALDE', 'GREENS/EFA', 'GUE/NGL', 'EFDD', 'ENF', 'NI'],
                x:[29.2,25.2,9.6,9.0,6.9,6.8,5.9,4.8,2.6],
                orientation:'h',
                groupnorm:'percent',
                marker: {
                color: ['grey', 'red', 'darkblue', 'yellow', 'darkgreen', 'lightbrown','cyan', 'orange', 'pink'],
                    width: 1
            },
                }
            ]}
            layout={{width:800, height:500, margin:500,  orientation: 'h' }}
            
            
            />   <div className='deutero'>    
             <h5> Share of committee chairs by political group</h5>
             <Plot className='content'
            data={[
                {
                type: "pie",
                labels: ["EPP", "S&D", "ECR", "ALDE", "GREENS/EFA", "GUE/NGL", "EFDD", "ENF", "NI"],
                values: [29.2,25.2,9.6,9.0,6.9,6.8,5.9,4.8,2.6],
                domain:{column: 0},
                name: 'Share of committee chairs by political group',
                hoverinfo: 'label+percent+name',
                hole: .55 ,
                   color: ['grey', 'red', 'darkblue', 'yellow', 'darkgreen', 'lightbrown','cyan', 'orange', 'pink'],
                    width: 1
            },
                
            ]}
            layout={{margin:{"l": 0, "r": 0, "b": 0, "t": 0}} }
            
            
            />
          </div> 
            <div className='trito'> 
            <h5> Size of political groups</h5>
            <Plot className='content'
            data={[
                {
                type: 'bar',
              
                y: ['NI', 'ENF', 'EFDD', 'GUE/NGL', 'GREENS/EFA',  'ALDE','ECR', 'S&D', 'EPP'],
                x:[20,36,44,51,52,68,72,189,219],
                orientation:'h',
                marker: {
                color: ['grey', 'red', 'darkblue', 'yellow', 'darkgreen', 'lightbrown','cyan', 'orange', 'pink'],
                    width: 1
            },
                }
            ]}
            layout={{width:800, height:500, margin:500, orientation: 'h' }}
            
            
            />
            
            </div>
       
        </div>
          )
   }
export default App;