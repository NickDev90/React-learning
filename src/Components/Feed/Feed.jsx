import React from 'react';
import s from './Feed.module.css'

// variable with some HTML code
let someText = [<div>
		<h2>Hello, this is text <strong>inside</strong> <i>variable</i></h2>
	<button><strong>Just</strong> click</button>
		<ul>Task list
			<li>HTML</li>
			<li>CSS</li>
			<li>JS</li>
			<li>REACT</li>
		</ul>
	</div>, <h1>It works!!!</h1>
]

class Feed extends React.Component {

	state = {
	    time: new Date().toLocaleTimeString()
  	}

	componentDidMount() {
		console.log('component Feed DidMount');


		this.testVar = setInterval(
		()=> this.setState(
			{time: new Date().toLocaleTimeString()}
		), 1000);
	}

	componentDidUpdate() {
		console.log('did update')
		console.log(this.state)
	}

	componentWillUnmount() {
		console.log('good by Feed');
		clearInterval(this.testVar);
	}

	render() {
		return (
		<div>
			<h1>Feed</h1>

	      <h1>Привет, мир!</h1>
	      <div className={s.timeBlock}>
	      	<h2>Зараз <span className={s.clock}>{ this.state.time } </span></h2>
	      </div>
	      {someText}
		</div>
		) 	
	}


}



export default Feed;