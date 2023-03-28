
import NavBar from './components/NavBar';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import { Services } from './components/Services';

function App() {
  return (
    <div className="App ">
    <NavBar/>
    <Home/>
    <About/>

    <Skills/>
    <Services/>
    <Work/>
    <Contact/>
    </div>
  );
}

export default App;
