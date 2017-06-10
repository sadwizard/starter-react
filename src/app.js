import React from 'react';
import ReactDOM from 'react-dom';
import styles from './sass/styles.sass';
import BaseRouter from './router.js';



const content = document.getElementById('app');

ReactDOM.render(<BaseRouter/> , content);