import React , {useState, useEffect}from 'react';
import { GlobalStyle } from './globalstyles';
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
import work from './assets/The work of the european parliament.svg'
import mission from './assets/Mission of EP icon.svg'
import citi from './assets/Working with citizens.svg'
import iconciti from './assets/Icon citizens.svg'
import participate from './assets/Participate in programs that help you find a job or learn a  new oneThe Employment committee is responsible for monitoring employment and employment p.svg'
import happy from './assets/Icon happy.svg'
import outlook from './assets/Outlook.png'
import Dokimi from './dokimi';
import './sec.css'
function App(){

  const [toggle, setToggle] = useState(false)
 
  
  const toggler = () =>{
    toggle ? setToggle(false)  : setToggle(true)  ;
  }
  
 
 
         return(
        <div  className='app' style={{ 
          backgroundImage: `url(${Backround})`,
          
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
    style={{marginLeft: '60vh', marginTop:'-20vh'}}
  />
</div>
<div>
<img src={introd} style={{marginLeft:'60vh'}} alt=''/>
</div>
<img src={member} style={{marginLeft:'40vh'}} alt=''/>
<div>
<img src={theup} style={{marginLeft:'35vh', marginTop:'12vh'}} alt=''/>
</div>
<div className='chartaki'>
<Dokimi/>
</div>

            
          
            <img src={age} alt='' style={{marginLeft:'35vh', marginTop:'10vh'}}/>
            {toggle ? <div >
                        <button className="btn" style={{ marginLeft:'85vh' }}   onClick={toggler} > the average </button>
                        <div style={{marginLeft:'86vh'}}>
<img src={mepage} alt='' style={{marginLeft:'5vh'}}/> </div></div>: 
<div  >
                        <button className="btn" style={{ marginLeft:'85vh'}}    onClick={toggler} >   the younger</button>
                        <div style={{marginLeft:'86vh'}}>
<img src={aveg} alt='' style={{marginLeft:'5vh'}}/></div> </div>}
<div>
<img src={work} alt='' style={{marginTop:'10vh', marginLeft:'35vh'}}/> 
<p style={{marginLeft:'103vh', fontSize:20, marginTop:'-20vh'}}>EP's work  examples:
</p>

<p style={{marginLeft:'106vh', fontSize:20}}>Passing EU laws{<button className='btn' onClick={()=>alert('do sth')}>Read more</button>}
</p>

<p style={{marginLeft:'84vh', fontSize:20}}>Democratic scrunity of all EU Institutions{<button className='btn' onClick={()=>alert('do sth')}>Read more</button>}
</p>
</div>

<img src={mission} alt='' style={{marginLeft:'40vh'}}/>
<img src={citi} alt='' style={{marginLeft:'40vh', marginTop:'15vh'}}/>
<div>
<button className='btn' style={{marginLeft:'108vh', marginTop:'-10vh'}}>Read more</button>

</div>
<div>
<img src={iconciti} alt='' style={{marginLeft:'50vh', marginTop:'-15vh'}} />
</div>
<img src={participate} alt='' style={{marginLeft:'40vh'}}/>
<button className='btn' style={{marginRight:'70vh', marginTop:'-10vh'}}>Read more</button>
<img src={happy} alt='' style={{marginLeft:'40vh'}}/>
<img src={outlook} alt='' style={{marginLeft:'10vh'}}/>



</div>


          )
   }
export default App;