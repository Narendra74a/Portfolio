import React from 'react';
import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import './Contact.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';



const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_v6lecs8',
        'template_06itik9',
        form.current,
        'eUp42fnJT9dVIxHc8'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <div>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e','.']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Narendra Kumar,
          <br />
          India,
          <br />
          Uttar Pradesh <br />
          Anand Nagar, Maharajganj <br />
          <br />
          <span>narendra.rock2015@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[27.1422837,83.285216]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[27.1422837,83.285216]}>
              <Popup>
                Narendra lives here, come over for a black tea:)
              </Popup>
            </Marker>
          </MapContainer>
 
        </div>
      </div>
      <Loader type="pacman" />
      <div id="star1"></div>
          <div id="star2"></div>
          <div id="star3"></div>
    </div>
  )
}

export default Contact
