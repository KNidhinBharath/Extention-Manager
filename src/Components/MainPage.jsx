import React from 'react'
import Cards from './Cards'


const MainPage = () => {
  return (
    <div style={{
      width:"100%"
    }} >
        <div id='extentions-tab' 
          style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",   
            width:"100%" ,
            gap:"10px"  ,
                
          }}>
              <h2> Extentions List </h2>
              <div className='active-btn' 
              style={{
                
                display:"flex",
                gap:"10px"
              }}>
                    <button>ALL</button>
                    <button>ACTIVE</button>
                    <button>INACTIVE</button>
              </div>
              
        </div>

        <div id='cards'>
            
          <Cards/>

        </div>
        
    </div>
  )
}

export default MainPage
