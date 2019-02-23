import React, { Component } from 'react';
import axios from 'axios'

import Card from './Card'
import styles from './App.module.css'

const API_URL = "https://swapi.co/api/"

class App extends Component {
  constructor(props){
	super(props)
	this.state = {
	  planetCount: 0,
	  planetCache: []
	}

	this.fetchPlanets()
  }

  // Update state planetCount to API current number of planets
  fetchPlanets(){
	return axios.get(API_URL+'planets')
	.then(res => {
		let planets = res.data
		let planetCount = planets.count
		this.setState({planetCount})
	})
	.catch(e => console.error(e))
  }

  newCache(){
	  let {planetCount} = this.state
	  let number = Math.floor(Math.random() * planetCount) + 1
	  console.log(number)
  }

  componentDidUpdate(){
	this.newCache()
  }

  render() {
	return (
	<div className={styles.wrapper}>
		<Card />
	</div>
	);
  }
}

export default App;
