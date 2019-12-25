import React, { useState } from 'react'

import  './reservationForm.css'

import api from '../services/api'

import { Modal, Button } from 'react-bootstrap'

export default function ReservationForm(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    event.preventDefault()
    setShow(true)
  
  };

  async function handleSubmit (event) {
    await api.post('/reservations', {
      name,
      email,
      people,
      date,
      time
    })
    setName('')
    setEmail('')
    setPeople('')
    setDate('')
    setTime('')
  }

  return (
    <div className="formContainer">
      <h1>{props.title}</h1>
      <form onSubmit={handleSubmit}  >
        <label>
          Nom 
          <input id="name" onChange={event => setName(event.target.value)} value={name} type="text" name="nom" placeholder="Mon nom"  />
        </label>
        <label>
        E-mail 
          <input  id="email" onChange={event => setEmail(event.target.value)} value={email} type="email" name="email" placeholder="email@email.fr" />
        </label>
        <label>
          Nbr des Personnes 
          <input id="people" onChange={event => setPeople(event.target.value)} value={people} type="number" name="nombre" placeholder="0"/>
        </label>
        <label>
          Date
          <input  id="date" onChange={event => setDate(event.target.value)} value={date} type="date" name="date"  />
        </label>
        <label>
          heures
          <input  id="time" onChange={event => setTime(event.target.value)} value={time} type="time" name="hour" />
        </label>
        <button id="button" onClick={handleShow}> Réserver </button>
      </form>

      <Modal  id="modalWindow" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="modalTitle">Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body >Voulez-vous confirmer la réservation pour le {date} à {time} pour {people} personnes?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button id="confirmButton" variant="primary"  type="submit" onClick={ (event) => {handleSubmit(); handleClose()}}>
            Confirmer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
