import React, { useEffect, useState } from 'react'
import '../../src/toggle.css'


const Cards = () => {

  const [info,setInfo] = useState([])

  useEffect(() => {

    async function onLoad() {

      try {
        const response = await fetch('/data.json')
        if(!response.ok) {
          throw new Error('Network issue')
        }
        const data = await response.json()
        console.log(data) 
        setInfo(data) 

      } catch (error) {
               
        console.error("Cannot find the data")
      }

    
  }

  onLoad()
  
 },[])



  function handleChange(index) {

    setInfo( 
      prev => prev.map((el,i) => i === index ? {...el ,isActive:!el.isActive} :el ))
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

              <label class="switch">
                <input type="checkbox" checked = {el.isActive} onChange={() =>handleChange(index)} />                
                <span class="slider round"></span>
               </label>
        </div>
          
        </div>  
        
      ))}
           
          
    </div>
  )
}

export default Cards
