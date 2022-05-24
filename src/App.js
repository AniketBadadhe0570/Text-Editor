import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';



function App() {
  const [mode, setMode]= useState("light")
  const [alert, setAler]=useState(null);


  const showAlert=(message,type)=>{

    setAler({
      msg: message,
      type:type

    })
    setTimeout(()=>{
      setAler(null);
    },1500);

    
  }
  const toggleMode=()=>{
    if (mode =='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
    }
  }

  return (
    <div className="App">
      

      <Navbar title="Text Editor" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to Edit" mode={mode}/>
      {/* <About/> */}
     
      </div>
      
    </div>
  );
}

export default App;
