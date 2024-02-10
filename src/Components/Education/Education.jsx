import React, { useEffect, useState } from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'

import { Typography } from '@mui/material'
import School from '@mui/icons-material/AutoStories'
import Inter from '@mui/icons-material/Class'
import Collage from '@mui/icons-material/School'
import './Education.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Education = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <div>
      <div className="container education-page">
        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['My', ' ', ' Education']}
              idx={15}
            />
          </h1>
          <p>
            Bachelor of Computer Application, Integral University, 2019-2022
            During my undergraduate studies, I developed a strong foundation in
            computer science and gained comprehensive knowledge of programming
            languages. which enhanced my problem-solving and analytical skills.
            Additionally, I collaborated with fellow students to complete
            team-based assignments, fostering my communication and teamwork
            abilities.
          </p>
          <p>
            My school education provided me with a well-rounded academic
            background. I excelled in subjects such as mathematics and science,
            fueling my passion for logical thinking and inquiry-based learning.
            I actively engaged in extracurricular activities, including science
            fairs and coding competitions, which further developed my technical
            skills and boosted my confidence.
          </p>
          <p>
            As a lifelong learner, I have actively pursued online certifications
            and courses to stay updated with the latest industry trends and
            advancements. I have completed courses on web development enhancing
            my expertise in these areas.
          </p>
        </div>
        <div className="Education">
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.White"
                style={{ fontSize: '15px' }}
              >
                2022-10-19
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: 'yellow' }}>
                  {/* <Event /> */}
                  <Collage style={{ color: 'black' }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>
                <Typography variant="h5" style={{ fontSize: '20px' }}>
                  BCA
                </Typography>
                <Typography variant="p" style={{ fontSize: '15px' }}>
                  Batchlor of Computer Application
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
              >
                2017-04-29
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: 'yellow' }}>
                  <Inter style={{ color: 'black' }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>
                <Typography variant="h5" style={{ fontSize: '20px' }}>
                  Intermediate
                </Typography>
                <Typography variant="p" style={{ fontSize: '15px' }}>
                  I'm complete my intermediate withe Math & Science.
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
              >
                2015-05-29
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ background: 'yellow' }}>
                  <School style={{ color: 'black' }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>
                <Typography variant="h5" style={{ fontSize: '20px' }}>
                  High School
                </Typography>
                <Typography variant="p" style={{ fontSize: '15px' }}>
                  I'm complete my 10th with Math & Science.
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
        <div id="star"></div>
          <div id="star2"></div>
          <div id="star3"></div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Education
