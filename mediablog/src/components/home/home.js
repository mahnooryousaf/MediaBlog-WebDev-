import React from "react";
import { useHistory } from "react-router-dom";
import './homecss.css';
import Carousel from 'react-bootstrap/Carousel';
import drake from '../images/Drake.jpg';
import beatles from '../images/Beatles.jpg';
import floyd from '../images/PinkFloyd.png';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Home() {
      const REACT_APP_REDIRECT_URL='http://localhost:3000/data'
      const handleLogin = () => {
        let token=JSON.parse( localStorage.getItem('token'))
        if(token){
            history.push("/data"+token);
        }
        
        window.location = `https://accounts.spotify.com/authorize?client_id=09457c8290ee425ebc9ccb7681fad952&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
      };
    

    let history = useHistory();
    const handleClick=()=> {
        history.push("/data");
      }
      const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
      
return (
  <div id="page"className="w-full h-screen text-center justify-center items-center">
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
          limit: 300,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }}
  />

      <div id = "header">
        <h1>Home</h1>
        <p>Welcome To</p>
      </div>
      <div id = "body">


      <ul className="bars">
      <li className="line1"><h1 className="letters">G</h1></li>

      <li className="line2"><h1 className="letters">O</h1></li>
      <li className="line3"><h1 className="letters">S</h1></li>
      <li className="line4"><h1 className="letters">S</h1></li>
      <li className="line5"><h1 className="letters">I</h1></li>
      <li className="line6"><h1 className="letters">P</h1></li>
      </ul>
  
      
   
      
      <div id="images">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={drake}
            alt="First slide"
            
          />
          <Carousel.Caption>
            <h3>HOTTEST GOSSIP</h3>
            <p>Take a look at what everyone is saying about your favourite artist</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={beatles}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>POPULARITY</h3>
            <p>Check out the metrics on their songs</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={floyd}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>YOUR TAKES</h3>
            <p>Was that new song amazing or not so much? Let them know!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <div id="desc">
        <h2>HOW IT WORKS:</h2>
        <li>Search for your favourite artist, song or album</li>
        <li>Click on the chart to generate a graph based on the relevant keyword</li>
        <li>Leave a comment about the topic!</li>

        </div>
      <button onClick={handleLogin} className="dataButton">Data page</button>
  
      </div>

    </div>
    
    
)

}


export default Home;