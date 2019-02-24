import React, { Component } from 'react';
import axios from 'axios'

import Card from './Card'
import styles from './App.module.css'

const API_URL = "https://swapi.co/api/"

class App extends Component {
  constructor(props){
	super(props)
	this.state = {
	  planetData: []
	}
	this.nextCard = this.nextCard.bind(this)
  }

  // Fetch 10 new planets from API
  fetchData(){
	  axios.get(API_URL+'planets')
	  .then(res => {
			let planets = res.data
			for (let i = 0; i < 10; i++) {
				let randomPlanet = Math.floor(Math.random() * planets.count) + 1
				axios.get(API_URL+'planets/'+randomPlanet)
				.then(res => {
					let planetData = [...this.state.planetData]
					planetData.push(res.data)
					this.setState({planetData: planetData})
					})
				.catch(e => console.error(e))
			}
	  })
		.catch(e => console.error(e))
  }

  nextCard(){
	let planetData = this.state.planetData
	//Por que o ternário não funciona aqui?
	if (planetData.length === 1) return this.fetchData()
	planetData.shift()
	this.setState({planetData})
  }

  componentDidMount(){
	this.fetchData()
  }

  render() {
	let planet = this.state.planetData
	let nextCard = this.nextCard

	return (
	<div className={styles.wrapper}>
		<Card planet={planet} />
		<button onClick={nextCard}>Next</button>
	</div>
	);
  }
}

export default App;
