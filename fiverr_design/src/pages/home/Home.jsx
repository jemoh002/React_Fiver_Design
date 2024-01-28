import React from 'react'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/Slide/Slide'
import {cards, projects} from "../../data"
import CatCard from '../../components/catCard/CatCard'
import './Home.scss'
import ProjectCard from '../../components/projectCard/ProjectCard'


function Home() {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowScroll={5}>
        {cards.map(card => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiverr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>Upgrade to a curated experience packed with tools and benefits , dedicated to businesss</p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

          <button>Explore Fiverr Business</button>

          </div>
                    

          <div className="item">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0NDisZFRktNzc3Ny0tNzc3Ny03LS0tLS03LS0tKys3Ky0rLSsrLS0rKysrKystKy0rKysrKysrK//AABEIAJ8BPgMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIG/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAED/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A50oVg3ZoVAVARQBQKCCKAEABBQAAAAAABFFEVFQAAAAAAAAUAAAAAGkqoqCYoCI0gINJQQAABFABAAUAAAAFQQAFAAAAAAAAAAAAFQBQAaRUVAABFQAABFQVRBAAAAAAAAABAUAAAAAAAAAAAAAAAFEUGkqoqIqAKgAAAIoAioigCgAgAgKACKICgKIKiAoACKAAAAAAAACiKDSVUqogAAAAAAIKCogAAAKAIAAgKICiAAAKgAAAKigCKACAoACooNJVRUQAAABFQAAUAQAAAABBQAQAUAAEAAAUFQQVBQRQAABFAAFBpKqVUQAAABAFAAAAAAARBUBQUBABFAAQVAAAAAFQBRFAAAAAVFgNIrNVABAABAQUAUUAQARQABFBAAURUBQAEVAVAABQRUAURQAAAAFiLAaRUVBFQAAEARUAgigAACgAAAgAAigqKAAAICggACgCKAAAAADUZWA0ioqCKgAAIAigAgAAAAIoAAAAIqAqgAACAIKoigAAAAAAogIqxlqA/9k=" alt="" />
          </div>
          
        </div>
      </div>
      <Slide slidesToShow={4} arrowScroll={4}>
        {projects.map(card => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
    
  )
}

export default Home
