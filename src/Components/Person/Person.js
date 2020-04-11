import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
        return (
            <div onClick={props.clicked} className={classes.customiseContainer}>
                <p className={classes.cutomPara}>{props.real_name}</p>
            </div>
        )
}
export default person;