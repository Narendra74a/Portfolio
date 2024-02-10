import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import './Portfolio.scss'
// import Projectcard from '../Projectcard/Projectcard'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'

import Card from './Carddata'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div>
      {' '}
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              'M',
              'y',
              ' ',
              'P',
              'r',
              'o',
              'j',
              'e',
              'c',
              't',
              's',
              '.',
            ]}
            idx={15}
          />
        </h1>
        <p>
          My portfolio project serves as a representation of my work and
          showcases my skills and offerings in the fields of art, design, and
          technique. Through this project, I have demonstrated my creativity and
          personality. My portfolio website provides an immersive and visually
          engaging experience, reflecting both my achievements and my artistic
          flair. Within my portfolio project, I have included a diverse range of
          my prominent works, such as web design, graphic design, and user
          experience importance, expansion, and representative samples.
        </p>
        <div id="worlList">
          {Card.map((item) => (
            <div className="works">
              <img src={item.image} alt="Work Card" />
              <div class="layer">
                <h3>{item.name}</h3>
                <p>{item.Description}</p>

                <Link to={item.link} target="blank">
                  <FontAwesomeIcon icon={faExternalLink} className="btn" />
                </Link>
                <Link id="CodeBtn" to={item.link} target="blank">
                  <span>Source Code</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div id="star1"></div>
          <div id="star2"></div>
          <div id="star3"></div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Portfolio
