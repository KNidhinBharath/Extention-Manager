import React, { useState } from 'react'

const ExtentionsBar = ({mode ,setMode}) => {

  return (
    <div style={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      width:"100%",      
      padding:"10px 0px",
      border:"1px solid black",
      borderRadius:"16px"
    }}>
        <div id='logo' 
          style={{
            marginLeft:"10px"
          }}>
            <img src='./assets/images/logo.svg' alt='logo'/>
        </div>

         { mode ? (
               <button 
               className='btn' 
               onClick={setMode}
               style={{background:"black",marginRight:"10px"}}
               >
                  <img src='./assets/images/icon-sun.svg'  alt='light-mode'/>
               </button>    
             ) : (
               <button 
               className='btn' 
               onClick={setMode}
               style={{background:"white",marginRight:"10px"}}>
                  <img src='./assets/images/icon-moon.svg'  alt='dark-mode'/>
               </button> 
             )
          
          }
        
    </div>
  )
}

export default ExtentionsBar
