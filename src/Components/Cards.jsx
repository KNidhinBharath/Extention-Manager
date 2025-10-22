import React, { useEffect, useState } from 'react'
import '../../src/toggle.css'

const Cards = ({status}) => {
 
  const [info,setInfo] = useState([])
  
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("details")) 

    if(savedData) {
      setInfo(savedData)
    }

    else{
       async function onLoad() {
      try {
        const response = await fetch('/data.json')
        if(!response.ok) {
          throw new Error('Network issue')
        }
        const data = await response.json()    
        setInfo(data) 
        localStorage.setItem("details",JSON.stringify(data))           
      } catch (error) {               
        console.error("Cannot find the data")
        }    
      }
        onLoad() 
     
    }     
 
 },[])

 useEffect(()=> {
  const details = JSON.parse(localStorage.getItem("details"))
  if(status === "All") {
          setInfo(details)
        }
        else {
          const filteredData = details.filter((el) => {
          if(status === "Active") return el.isActive === true
          if(status === "Inactive") return el.isActive === false
          })
          setInfo(filteredData)
        }            

 },[status])


  function handleChange(name) {
    const recoveredData = JSON.parse(localStorage.getItem("details")) || []
    const updated = recoveredData.map((el) => el.name === name ? {...el ,isActive:!el.isActive} :el )
    localStorage.setItem("details",JSON.stringify(updated))

    const filtered = updated.filter(el =>
    status === "All" ? true : status === "Active" ? el.isActive : !el.isActive
  );
    setInfo(filtered)
    
  } 

  return (
    
    <div id='Card' 
      style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"10px"
      }}> 
    {
      info.map((el,index) => (
       <div 
        key={index}
        style={{
        border:"1px solid black",
        borderRadius:"16px",
        padding:"10px",
          
       }}>
        <div id='top' 
            
            style={{
            display:"flex",
            gap:"10px",
            marginBottom:"10px",
           
            }}>
            <img src={el.logo} alt='Dev-lens'/>
            <div id='desc'>
                  <h4 style={{
                    margin:"0px",
                    paddingTop:"5px"
                  }} >{el.name}</h4>
                  <p style={{
                    margin:"5px 0px"
                  }}>{el.description}</p>
            </div>            
        </div> 
        <div id='bottom' style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          marginTop:"30px"
        }}>
              <button style={{
                borderRadius:"16px",
                padding:"5px"
              }}>Remove</button>

              <label className="switch">
                <input type="checkbox" checked = {el.isActive} onChange={() =>handleChange(el.name)} />                
                <span className="slider round"></span>
               </label>
        </div>
          
        </div>  
        
      ))}
           
          
    </div>
  )
}

export default Cards
