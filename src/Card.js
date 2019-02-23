import React from 'react'
import styles from './Card.module.css'

const Card = props => {
    
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Tatooine</h1>
            </div>
            <div className={styles.content}>
                <ul>
                    <li><strong>Population:</strong> 1000</li>
                    <li><strong>Climate:</strong> Dry</li>
                    <li><strong>Terrain:</strong> Desert</li>
                    <li className={styles.featured}>Featured in <strong>2</strong> movies</li>
                </ul>
            </div>
        </div>
    )
}

export default Card