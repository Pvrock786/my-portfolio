import React from 'react';

import classes from './BackDrop.module.css';

const BackDrop = props => (
    <div className={classes.backdrop} onClick={props.click} />
);

export default BackDrop;