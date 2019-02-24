import React from 'react'
import ContentLoader from 'react-content-loader'
import styles from './Card.module.css'

const LightSaberLoading = () => {

    return (
        <ContentLoader 
		    height={20}
		    width={200}
		    speed={1}
		    primaryColor="#333333"
		    secondaryColor="#781515"
	>   
		    <rect x="52.92" y="5.67" rx="4" ry="4" width="125" height="10.21" /> 
		    <rect x="25.69" y="5.67" rx="2" ry="2" width="25" height="10.21" />
	    </ContentLoader>
    )
}

const ListLoading = () => {
    
    return (
    
        <ContentLoader 
	    	height={200}
	    	width={300}
	    	speed={1}
	    	primaryColor="#333333"
	    	secondaryColor="#111111"
	    >
	    	<circle cx="10" cy="20" r="8" /> 
	    	<rect x="25" y="15" rx="5" ry="5" width="220" height="10" /> 
	    	<circle cx="10" cy="75" r="8" /> 
	    	<rect x="25" y="70" rx="5" ry="5" width="220" height="10" /> 
	    	<circle cx="10" cy="130" r="8" /> 
	    	<rect x="25" y="125" rx="5" ry="5" width="220" height="10" />
	    </ContentLoader>
    )
}

const EmptyCard = props => {

    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <LightSaberLoading />
            </div>
            <div className={styles.content}>
                <ListLoading />
            </div>
        </div>
    )
}

const Card = props => {

    let planet = props.planet[0]
    return props.planet.length?
    (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>
                {planet.name}</h1>
            </div>
            <div className={styles.content}>
                <ul>
                    <li><strong>Population:</strong> {planet.population}</li>
                    <li><strong>Climate:</strong> {planet.climate}</li>
                    <li><strong>Terrain:</strong> {planet.terrain}</li>
                    <li className={styles.featured}>Featured in <strong>{planet.films.length}</strong> {planet.films.length > 1 ? 'films':'film'}</li>
                </ul>
            </div>
        </div>
    )
    :<EmptyCard />
}

export default Card