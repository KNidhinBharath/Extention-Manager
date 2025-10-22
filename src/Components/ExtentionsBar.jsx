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
            <img src='./assets/images/logo.svg' alt='logo' style={{
              width:"120px",
              height:"50px"
            }}/>
        </div>         
               <div                   
                  onClick={setMode}   
                  style={{
                    padding:"0px 20px"
                  }}            
                  >{ mode ? 
                    (<img src='./assets/images/icon-sun.svg'  
                          alt='light-mode' 
                          style={{background:"black",
                            height:"20px"
                          }}/>) 
                    :(<img src='./assets/images/icon-moon.svg'  
                          alt='dark-mode'
                          style={{background:"white",
                            height:"20px"
                          }}/>) }
               </div>            
        
    </div>
  )
}

export default ExtentionsBar
