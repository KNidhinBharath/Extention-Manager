import { useEffect, useState } from 'react'
import Cards from './Cards'



const MainPage = ({mode,setMode}) => {

  const [activeTab ,SetActiveTab] = useState("All")
 
  return (
    <div style={{
      width:"100%"
    }} >
        <div id='extentions-tab' 
          style={{
            display:"flex",
           
            width:"100%" ,
            gap:"10px"  ,
            marginBottom:"20px"
                
          }}>
              <h2> Extentions List </h2>
              <div className='active-btn' 
              style={{                
                display:"flex",
                gap:"10px",
                
              }}> <button 
                      onClick={() => SetActiveTab("All")}
                      style={{
                        background: activeTab === "All" ? "red" : "rgba(52, 53, 65, 0.9)",
                        color: activeTab === "All" ? "black" : "white"
                      }}
                     >All</button> 
                  <button 
                      onClick={() => SetActiveTab("Active")}
                      style={{
                        background: activeTab === "Active" ? "red" : "rgba(52, 53, 65, 0.9)",
                        color: activeTab === "Active" ? "black" : "white"
                      }}
                     >Active</button> 
                  <button 
                      onClick={() => SetActiveTab("Inactive")}
                      style={{
                        background: activeTab === "Inactive" ? "red" : "rgba(52, 53, 65, 0.9)",
                        color: activeTab === "Inactive" ? "black" : "white"
                      }}
                     >Inactive</button> 
                  
                  
                    
                    
              </div>
              
        </div>

        <div id='cards'>
            
          <Cards 
            status = {activeTab} 
            mode={mode}
            setMode = {() => setMode((prev) => (!prev))}/>

        </div>
        
    </div>
  )
}

export default MainPage
