import React, { useState } from 'react'

const ExtentionsBar = ({mode ,setMode}) => {

  return (
    <div style={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      width:"100%",      
      padding:"8px 0px",  
      marginBottom:"20px", 
      backgroundColor: mode ? 'rgba(52, 53, 65, 0.9)' : "white",      
      borderRadius:"8px",
      
      
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
                          style={{background:"#1E1E1E",
                            height:"20px",
                            padding:"10px",
                            borderRadius:"8px",
                            color:"white"
                          }}/>) 
                    :(<img src='./assets/images/icon-moon.svg'  
                          alt='dark-mode'
                          style={{background:"white",
                            height:"20px",
                            padding:"10px",
                            borderRadius:"8px"
                          }}/>) }
               </div>            
        
    </div>
  )
}

export default ExtentionsBar
