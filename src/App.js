import React , {useState}from 'react';
import Plot from 'react-plotly.js';
import './sec.css'
import  Backround from './assets/Backround.svg'
import eprs from './assets/eprs.svg'
import dentra from './assets/dentra.png'
import introd from './assets/Introduction.svg'
import icon from './assets/EP LOGO.png'
import member from './assets/Member,mission,benefits icon.svg'
import theup from './assets/The european parliament members.svg'
import age from './assets/Age of MEPs by member stateThere is an average age of MEPs, together with the maximum and minimum age, per Member State. The average age of Members on.svg'
import mepage from './assets/MEP age icon.svg'
import aveg from './assets/aver.svg'
function App(){

  const [toggle, setToggle] = useState(false)
  const [text , setText] = useState('the average')
  const toggler = () =>{
    toggle ? setToggle(false)  : setToggle(true)  ;
  }

 
 
         return(
        <div style={{ 
          backgroundImage: `url(${Backround})`
          
        }}>
        <div>
              <img src={eprs}
                alt=''
              />
              <img src={icon} style={{marginLeft:'155vh', marginBottom:'18vh'}} alt='' />

</div>
<div   className='tree'
>
  <img 
  width={750}
  height={500}
  alt=''
  src= {dentra}
    style={{marginLeft: '60vh'}}
  />
</div>
<div>
<img src={introd} style={{marginLeft:'60vh'}} alt=''/>
</div>
<img src={member} style={{marginLeft:'40vh'}} alt=''/>
<div>
<img src={theup} style={{marginLeft:'35vh', marginTop:'12vh'}} alt=''/>
</div>


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
                backgroundImage: {Backround},
                    width: 1
            },
                }
            ]}
            layout={{width:550, height:400, margin:500,  orientation: 'h', paper_bgcolor:'#B5F6F5' , plot_bgcolor:'#B5F6F5'}}
            style={{marginLeft:'85vh', marginTop: '-47vh'}}
            onUpdate={(data)=>console.log(data)}
            onClick={(...data)=> console.log(data)}
            
            />  
            <div>
                        <button className="btn" style={{marginTop:'10vh', marginLeft:'95vh'}} value={text}   onClick={toggler} >  {text}</button>
</div>

            <img src={age} alt='' style={{marginLeft:'35vh', marginTop:'15vh'}}/>
            {toggle ?<img src={mepage} alt='' style={{marginLeft:'5vh'}}/> : <img src={aveg} alt='' style={{marginLeft:'5vh'}}/>}
           
        </div>
          )
   }
export default App;