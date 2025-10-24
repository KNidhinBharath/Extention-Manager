
import MainPage from './Components/MainPage';
import ExtentionsBar from './Components/ExtentionsBar';
import { useEffect, useState } from 'react';


function App() {

  const [darkMode,setDarkMode] = useState(false)

useEffect(() => {
  document.body.style.background = darkMode ? "linear-gradient(to bottom, #0A0F2C, #1A237E)" : "white"
  document.body.style.color = darkMode ? "white" : "black"
},[darkMode])


  return (

    <div id='Main' 
      
    style={{
       width: "80%",             
       margin: "10vh 10%",  
       padding:"10px 10px", 
       display: "flex",
       flexDirection:"column",
       alignItems: "center",
       justifyContent: "center",
       backgroundColor : darkMode ? "inherit"  : "white",
       
      }}>

      <ExtentionsBar 
        mode={darkMode}
        setMode = {() => setDarkMode((prev) => (!prev))} />
      <MainPage 
        mode={darkMode}
        setMode = {() => setDarkMode((prev) => (!prev))}/>

    </div>
  );
}

export default App;
