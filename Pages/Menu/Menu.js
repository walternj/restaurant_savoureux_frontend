import React,{ useEffect, useState } from 'react'

import SocketIO from 'socket.io-client'
import api from '../../services/api'
import Footer from '../../components/footer'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

import './menu.css'

const socket = SocketIO(process.env.REACT_APP_API_SOCKET_URL)

export default function Menu() {
	const [plats, setPlats] = useState([])
	const [refresh, setRefresh] = useState(false)

	useEffect(() => {
		async function loadPlats () {	
			try {
				const response = await api.get('./plats')
				setPlats(response.data)
				//console.log(response.data)
			}
			catch (err){
				console.warn(err)
			}
		}
		loadPlats()
	},[refresh])

	useEffect(() => {
	
		socket.on('connect', () => {
			console.log('connected to Menu page...')
		})

		socket.on('menuHasPosted', () => {
			setRefresh(!refresh)
			console.log('menu post received...')
		})

		socket.on('menuHasDeleted', () => {
			setRefresh(!refresh)
			console.log('menu delete received...')
		})

	},[refresh, plats])

	return (
		<div className="menuContainer"> 
			<div className="cardDeckContainer">
			<p id="menuTitle">Menu</p>
				<div id="menuFrame">
					
					<CardDeck bsPrefix="card-deck">
						{plats.map(plat => (
							<Card  bsPrefix="col-sm-10 col-md-4 col-lg-3" 
								id="card" key={plat._id}  
							>
								<Card.Img className="image" variant="top" src={plat.photo_url} />
								<Card.Body>
									<Card.Title>{plat.title}</Card.Title>
									<Card.Text>
										{plat.description}
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<p className="text-muted">{plat.price}€</p>
								</Card.Footer>
							</Card>
						))}
					</CardDeck>
				</div>
			</div>
			<Footer />
		</div>
	)
}