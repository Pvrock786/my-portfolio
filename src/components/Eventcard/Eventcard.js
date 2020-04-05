import React, { Component } from 'react'
import './Eventcard.css'
import img from './ece1.jpg'
import Particles from 'react-particles-js';
import ParticleField from 'react-particles-webgl';
// import './Exo-Regular.ttf'
// import './Oribitron.ttf'
class Eventcard extends Component {
	
	render() {
		const config = {
			showCube: false,
			dimension: "3D",
			velocity: 2,
			boundaryType: "bounce",
			antialias: false,
			direction: {
			  xMin: -1,
			  xMax: 1,
			  yMin: -1,
			  yMax: 1,
			  zMin: -1,
			  zMax: 1
			},
			lines: {
			  colorMode: "rainbow",
			  color: "#351CCB",
			  transparency: 0.9,
			  limitConnections: true,
			  maxConnections: 20,
			  minDistance: 150,
			  visible: true
			},
			particles: {
			  colorMode: "rainbow",
			  color: "#ffffff",
			  transparency: 0.9,
			  shape: "circle",
			  boundingBox: "canvas",
			  count: 400,
			  minSize: 5,
			  maxSize: 50,
			  visible: true
			},
			cameraControls: {
			  enabled: true,
			  enableDamping: true,
			  dampingFactor: 0.2,
			  enableZoom: false,
			  autoRotate: false,
			  autoRotateSpeed: 0.3,
			  resetCameraFlag: true
			}
		  };
		return (
			<div className="container-event">
					<div className ="particle-js">
					<ParticleField config={config} />
					</div>
					<div className ="competition">
						<h1></h1>
					</div>
					<div className= "event_card">
						<div className ="card">	 
							<div className="inner">
							 <img src={img} alt="aa"  className="event-img" 
							  
							   /> 
							  <div  className="event-heading">
							  <h2>PLEXUS</h2>
							  </div>
							
							<article className="events-desc"> Welcome to Sant Longowal Institute of Engineering and Technology (SLIET).</article>
							<button className="explore-events">Explore </button>
					        </div>
					    </div>
						<div className ="card">	 
							<div className="inner">
							 <img src={img} alt="aa"  className="event-img" 
							  
							   /> 
							 <div  className="event-heading">
							  <h2>PLEXUS</h2>
							  </div>
							<article className="events-desc"> Welcome to Sant Longowal Institute of Engineering and Technology (SLIET).</article>
							<button className="explore-events">Explore </button>
					        </div>
					    </div>
						<div className ="card">	 
							<div className="inner">
							 <img src={img} alt="aa"  className="event-img" />	   
							 <div  className="event-heading">
							  <h2>PLEXUS</h2>
							  </div>
							<article className="events-desc"> Welcome to Sant Longowal Institute of Engineering and Technology (SLIET).</article>
							<button className="explore-events">Explore </button>
					        </div>
					    </div>
						<div className ="card">	 
							<div className="inner">
							 <img src={img} alt="aa" className="event-img"
							   /> 
							 <div  className="event-heading">
							  <h2>PLEXUS</h2>
							  </div>
							<article className="events-desc"> Welcome to Sant Longowal Institute of Engineering and Technology (SLIET).</article>
							<button className="explore-events">Explore </button>
					        </div>
					    </div>
						<div className ="card">	 
							<div className="inner">
							 <img src={img} alt="aa"  className="event-img" 
							  
							   /> 
							 <div  className="event-heading">
							  <h2>PLEXUS</h2>
							  </div>
							<article className="events-desc"> Welcome to Sant Longowal Institute of Engineering and Technology (SLIET).</article>
							<button className="explore-events">Explore </button>
					        </div>
					    </div>
					</div>
			</div>
		)
	}
}

export default Eventcard;