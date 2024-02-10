import React, { useEffect, useState } from 'react'
import './Skill.scss'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'

import { Typography } from '@mui/material'

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaSass,
  FaGit,
  FaNodeJs,
  FaDatabase,
} from 'react-icons/fa'
import { BsBootstrap } from 'react-icons/bs'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <div>
      {' '}
      <div className="container skills-page">
        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['Skill', '  ', '&', '  ', ' Experience']}
              idx={15}
            />
          </h1>
          <p>
            Expert in front-end development including technologies like
            <span class="tech-tag">HTML5</span>,
            <span class="tech-tag">CSS3</span>,
            <span class="tech-tag">JavaScript</span>,
            <span class="tech-tag">jQuery</span>,
            <span class="tech-tag">Angular2</span>,
            <span class="tech-tag">React</span>,
            <span class="tech-tag">TypeScript</span>,
            <span class="tech-tag">Jasmine</span>,
            <span class="tech-tag">Bootstrap</span>,
            <span class="tech-tag">Sass</span>,<span class="tech-tag">Git</span>
            , etc.
          </p>
          <p>
            I’m not a designer but I have a good sense of aesthetics, and
            experience in responsive,web design. I put special effort into
            optimizing my code and providing the best user experience. I would
            love to give you any kind of support also after the project's
            completion. I guarantee a commitment during work on your project.
          </p>
        </div>
        <div className="Skills">
         
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.White"
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector style={{ fontSize: '20px' }} />
                <TimelineDot style={{ background: '#ffd700' }}>
                  {/* <Event /> */}

                  <FaHtml5 style={{ color: 'black', fontSize: '20px' }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>
                <Typography variant="h5" style={{ fontSize: '20px' }}>
                  Html
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.White"
                style={{ fontSize: '15px' }}
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: '#ffd700' }}>
                  {/* <Event /> */}

                  {/* <CssOutlined style={{ color: 'black', fontSize: '20px' }} /> */}
                  <FaCss3 style={{ color: 'black', fontSize: '20px' }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>
                <Typography variant="h5" style={{ fontSize: '20px' }}>
                  Css
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.White"
                style={{ fontSize: '15px' }}
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: '#ffd700' }}>
                  {/* <Event /> */}

                  <FaJs style={{ color: 'black', fontSize: '20px' }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>
                <Typography variant="h5" style={{ fontSize: '20px' }}>
                  JavaScript
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.White"
                style={{ fontSize: '15px' }}
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: '#ffd700' }}>
                  {/* <Event /> */}

                  <FaReact style={{ color: 'black', fontSize: '20px' }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>
                <Typography variant="h5" style={{ fontSize: '20px' }}>
                  React
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.White"
                style={{ fontSize: '15px' }}
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: '#ffd700' }}>
                  {/* <Event /> */}

                  <BsBootstrap style={{ color: 'black', fontSize: '20px' }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>
                <Typography variant="h5" style={{ fontSize: '20px' }}>
                  BootStrap
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.White"
                style={{ fontSize: '15px' }}
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: '#ffd700' }}>
                  {/* <Event /> */}

                  <FaSass style={{ color: 'black', fontSize: '20px' }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>
                <Typography variant="h5" style={{ fontSize: '20px' }}>
                  Sass
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.White"
                style={{ fontSize: '15px' }}
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: '#ffd700' }}>
                  {/* <Event /> */}

                  <FaGit style={{ color: 'black', fontSize: '20px' }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>
                <Typography variant="h5" style={{ fontSize: '20px' }}>
                  Git
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.White"
                style={{ fontSize: '15px' }}
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: '#ffd700' }}>
                  {/* <Event /> */}

                  <FaNodeJs style={{ color: 'black', fontSize: '20px' }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>
                <Typography variant="h5" style={{ fontSize: '20px' }}>
                  NodeJs
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.White"
                style={{ fontSize: '15px' }}
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: '#ffd700' }}>
                  {/* <Event /> */}

                  <FaDatabase style={{ color: 'black', fontSize: '20px' }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>
                <Typography variant="h5" style={{ fontSize: '20px' }}>
                  MongoDB
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
        <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Skill
