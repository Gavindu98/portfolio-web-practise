
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { circleBounce } from 'tsparticles/Utils';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import HowWork from './components/HowWork';
import Portfolio from './components/Portfolio';
import Services from './components/Services';

function App() {
  return (
    <>
      <div>
      <Particles
      className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true, 
                value_area:900
              }
            },
            shape: {
              type: "circle" ,
              stroke:  {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Contact/>
      <HowWork/>
      <Portfolio/>
      <Services/>
      </div>
    </>
  );
}

export default App;
