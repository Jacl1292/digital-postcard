import React from "react";
import Cronomet from "./Cronomet";

function Clock() {
   const multipl=1000;
    return(
        <div className='row'>
           <div className='body'>
           <i className="far fa-clock fa-4x" style={{marginTop:'2rem', color:'#fcfcfd' }}></i>
           </div>
           <div className='body'>
              <Cronomet multipl={multipl*100000}/>
           </div>
           <div className='body'>
              <Cronomet multipl={multipl*10000}/>
           </div>
           <div className='body'>
              <Cronomet multipl={multipl*1000}/>
           </div>
           <div className='body'>
              <Cronomet multipl={multipl*100}/>
           </div>
           <div className='body'>
              <Cronomet multipl={multipl*10}/>
           </div>
           <div className='body'>
              <Cronomet multipl={multipl}/>
           </div>
        </div>
    );
}
export default Clock;