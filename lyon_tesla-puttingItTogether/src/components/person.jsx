import styles from '../assets/person.module.css';
import React, { useState } from 'react';

const Person = (props) => {
    const {firstName, lastName, age, hairColor}=props;
    const [personAge, setAge] = useState(age);
    return(
        <div className={styles.birthdayCard}>
                    <h1>{lastName}, {firstName}</h1>
            <h3>Age: {personAge}</h3>
            <h3>Hair Color: {hairColor}</h3>
            <button onClick={ ()=> setAge(personAge + 1)}><h2>Happy Birthday, {firstName} {lastName}!</h2></button>
        </div>
    );
} 
export default Person;