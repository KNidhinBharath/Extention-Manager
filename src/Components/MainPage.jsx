import { useEffect, useState } from 'react'
import Cards from './Cards'



const MainPage = () => {

  const [activeTab ,SetActiveTab] = useState("All")
 
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
              }}> <button 
                      onClick={() => SetActiveTab("All")}
                      style={{
                        background: activeTab === "All" ? "red" : "white",
                        color: activeTab === "All" ? "white" : "black"
                      }}
                     >All</button> 
                  <button 
                      onClick={() => SetActiveTab("Active")}
                      style={{
                        background: activeTab === "Active" ? "red" : "white",
                        color: activeTab === "Active" ? "white" : "black"
                      }}
                     >Active</button> 
                  <button 
                      onClick={() => SetActiveTab("Inactive")}
                      style={{
                        background: activeTab === "Inactive" ? "red" : "white",
                        color: activeTab === "Inactive" ? "white" : "black"
                      }}
                     >Inactive</button> 
                  
                  
                    
                    
              </div>
              
        </div>

        <div id='cards'>
            
          <Cards 
            status = {activeTab}/>

        </div>
        
    </div>
  )
}

export default MainPage
