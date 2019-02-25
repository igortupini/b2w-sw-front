import React, { Component } from "react";
import axios from "axios";
import Flip from "react-reveal/Flip";

import Card from "./Card";
import styles from "./App.module.css";

const API_URL = "https://swapi.co/api/";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [],
            cardCounter: 0
        };
        this.nextCard = this.nextCard.bind(this);
    }

    // Fetch 10 new planets from API
    fetchData() {
        axios
            .get(API_URL + "planets")
            .then(res => {
                let planetList = res.data;
                let fetchPipeline = [...Array(10)].map(() => {
                    return Math.floor(Math.random() * planetList.count) + 1;
                });
                let { planets } = this.state;
                fetchPipeline.forEach(randomPlanet => {
                    axios
                        .get(API_URL + "planets/" + randomPlanet)
                        .then(res => {
                            planets = [...planets, res.data];
                        })
                        .finally(() => this.setState({ planets }));
                });
            })
            .catch(() => alert("Could not fetch data from API."));
    }

    // Remove first planet of the array
    nextCard() {
        let { planets, cardCounter } = this.state;
        if (planets.length === 1) this.fetchData();
        planets.shift();
        this.setState({ planets, cardCounter: ++cardCounter });
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        let { planets, cardCounter } = this.state;
        let nextCard = this.nextCard;

        return (
            <div className={styles.wrapper}>
                <Flip bottom spy={cardCounter}>
                    <Card planet={planets[0]} heigth="800" />
                </Flip>
                <button onClick={nextCard}>Next</button>
            </div>
        );
    }
}

export default App;