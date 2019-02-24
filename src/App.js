import React, { Component } from 'react';
import axios from 'axios'

import Card from './Card'
import NextButton from './NextButton'
import styles from './App.module.css'

const API_URL = "https://swapi.co/api/"

class App extends Component {
  constructor(props){
	super(props)
	this.state = {
	  planetCache: []
	}

  }

  fetchData(){
	  axios.get(API_URL+'planets')
	  .then(res => {
		  let planets = res.data
		  let randomPlanet = Math.floor(Math.random() * planets.count) + 1
		  return axios.get(API_URL+'planets/'+randomPlanet)
		  .then(res => {
			let planetCache = res.data
			this.setState({planetCache: [planetCache]})
		  })
	  })
	  .catch(e => console.error(e))
  }

  componentDidMount(){
	this.fetchData()
  }

  render() {
	let planet = this.state.planetCache

	return (
	<div className={styles.wrapper}>
		<Card planet={planet} />
		<NextButton>Next</NextButton>
	</div>
	);
  }
}

export default App;
