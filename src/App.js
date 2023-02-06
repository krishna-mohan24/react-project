import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'

function App() {
  return (
    <>
    
<Navbar title = "TextUtils" abouttext = "About Text Utils"></Navbar>
<div className = "container my - my3">
<TextForm heading = "Enter the text to analyze"></TextForm>
{/*<About/>*/}


</div>
    
    </>
  );
}

export default App;
