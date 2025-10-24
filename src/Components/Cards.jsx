import React, { useEffect, useState } from 'react'
import '../../src/toggle.css'
import '../../src/index.css'
import Modal from 'react-modal'


const Cards = ({mode,setMode,status}) => {
 
  const [info,setInfo] = useState([])
  const [isOpen,setIsOpen] = useState(false)
  const [selectedName ,setSelectedName] = useState("")
  
  
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
    status === "All" ? true : status === "Active" ? el.isActive : !el.isActive );
    setInfo(filtered)
    
  } 

  function handleRemove(name){

    setSelectedName(name)
    setIsOpen(true)     
  }

  function confirmRemove() {
    
      const data = JSON.parse(localStorage.getItem("details"))
      const updated = data.filter((el) => el.name !== selectedName)
      localStorage.setItem("details",JSON.stringify(updated))
      const filtered = updated.filter(el => status === "All" ? true : status === "Active"? el.isActive : !el.isActive)
      setInfo(filtered)     
      setIsOpen(false)
  }

  return (
    
    <div id='Card' 
      style={{
        display:"grid",        
        gap:"10px",
        
      }}> 
    {
      info.map((el,index) => (
       <div 
        key={index}
        style={{
        border:"1px solid black",
        borderRadius:"16px",
        padding:"10px",
        background:  mode ? '#343541' : "white",
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
              }} 
              onClick={() => handleRemove(el.name)}
              >Remove</button>

              <label className="switch">
                <input type="checkbox" checked = {el.isActive} onChange={() =>handleChange(el.name)} />                
                <span className="slider round"></span>
               </label>
        </div>
          
        </div>  
        
      ))}
           <Modal 
            isOpen = {isOpen}
            onAfterClose={() => setIsOpen(false)}
             style={{
                overlay: { backgroundColor: "rgba(0,0,0,0.6)" },
                content: {
                width: "300px",
                height: "200px",
                margin: "auto",
                borderRadius: "10px",
                textAlign: "center"
          }
        }}>

              <h2> Are You Sure ?</h2>
              <div style={{
                display:"flex",
                flexDirection:"row",
                gap:"10px"
              }}>
                <button onClick={() =>confirmRemove() }>Yes</button>
                <button onClick={() => setIsOpen(false) }>No</button>
              </div>

           </Modal>
          
    </div>
  )
}

export default Cards
