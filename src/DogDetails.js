import React from 'react';
import {Link , Redirect} from 'react-router-dom';

const DogDetails = ({dog}) => {
    return(
        <div>
            <h3>{dog.name}</h3>
            <h3>{dog.age}</h3>
            <img src = {dog.src} alt = {dog.name} />
            <ul>
            {dog.facts.map((fact , i) => <li key={i}>{fact}</li>)}
            </ul>
            <Link to='/dogs'>Return to home page</Link>
        </div>
    )
}


export default DogDetails;