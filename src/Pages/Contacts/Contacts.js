import React, {useState, useEffect} from 'react'

import { Modal, Button } from 'react-bootstrap'
import SocketIO from 'socket.io-client'

import api from '../../services/api'
import Footer from '../../components/footer'
import  GoogleMaps from '../../components/googleMaps' 
import './contacts.css'
const socket = SocketIO(process.env.REACT_APP_API_SOCKET_URL)

export default function Contacts() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)
    
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Contact page connected')
  })

  socket.on('refreshMessagesList', () => {
    console.log("envoie confirmé")
  })
   },[])  

  async function handleSubmit () {
  
    setDate(new Date())
    await api.post('/messages', {
      name,
      email,
      message,
      date,
      saw: false
    }).then(() => {
      socket.emit('sentMessage', {
        name,
        email
      }, console.log('message sent'))
    })

    setName('')
    setEmail('')
    setMessage('')
    setDate(new Date())
  }

  const handleClose = () => setShow(false)  

  const handleShow = (event) => {
    event.preventDefault()
    setShow(true)
  }

  return (
    <div className="contactsContainer">
      <div className="contentContacts">
        <div id="contactForm">
          <form  onSubmit={handleSubmit} >
            <p id="title" >Laissez un message</p>
            <label>
              Nom 
              <input id="name" onChange={event => setName(event.target.value)} 
                value={name} type="text" name="nom" placeholder="Mon nom"  />
            </label>
            <label> 
            E-mail 
              <input  id="email" onChange={event => setEmail(event.target.value)} 
                value={email} type="email" name="email" placeholder="email@email.fr" />
            </label>
            <label>
              Message 
              <textarea id="message" onChange={event => setMessage(event.target.value)} 
                value={message} type="text" name="message" placeholder="Mon message..."  />
            </label>
            <button id="button" onClick={handleShow}> Envoyer </button>
          </form>

          <Modal  id="modalWindow" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title id="modalTitle">Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body >Voulez-vous confirmer l'envoie de cet message?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Annuler
              </Button>
              <Button id="confirmButton" variant="primary"  type="submit" onClick={ () => {handleSubmit(); handleClose()}}>
                Confirmer
              </Button>
            </Modal.Footer>
          </Modal>

        </div>
      </div>
      <div className="googleMaps">
        <GoogleMaps 
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `300px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <Footer />
    </div>
  )
} 