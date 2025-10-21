
import MainPage from './Components/MainPage';
import ExtentionsBar from './Components/ExtentionsBar';
import { useEffect, useState } from 'react';

function App() {

  const [darkMode,setDarkMode] = useState(false)

useEffect(() => {
  document.body.style.background = darkMode ? " deepskyblue" : "white"
  document.body.style.color = darkMode ? "white" : "black"
},[darkMode])


  return (

    <div style={{

       width: "80%",             
       margin: "10vh 10%",  
       padding:"10px 10px", 
       display: "flex",
       flexDirection:"column",
       alignItems: "center",
       justifyContent: "center",
       background : darkMode ? "grey" : "white",
       
      }}>

      <ExtentionsBar 
        mode={darkMode}
        setMode = {() => setDarkMode((prev) => (!prev))} />
      <MainPage/>

    </div>
  );
}

export default App;
