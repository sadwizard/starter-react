import React from 'react';
import ReactDOM from 'react-dom';
import styles from './sass/styles.sass';


const content = document.getElementById('app');

class Main extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div className=''>
			  hello
			</div>
		)
	}
}

export default Main;


ReactDOM.render(<Main/> , content);