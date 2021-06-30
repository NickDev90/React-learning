import React from 'react';
import s from './Feed.module.css'

// let localTime = new Date().toLocaleTimeString();


// console.log(typeof localTime)

// let state = {
// 	time: localTime
// }

class Feed extends React.Component {

	// state = {
	//     time: localTime
 //  	}

 //  	timeUpdating = () => {
 //  		setTimeout( ()=>this.state.time, 1000)
 //  	}

  	


// 	function tick() {
//   const element = (
//     <div>
//       <h1>Привет, мир!</h1>
//       <h2>Сейчас {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
	componentDidMount() {
		console.log('componentDidMount');
		// setInterval(this.render, 1000);
	}

	componentDidUpdate() {
		console.log('did update')
	}

	render() {
		return (
		<div>
			<h1>Feed</h1>

	      <h1>Привет, мир!</h1>
	      <h2>Сейчас { new Date().toLocaleTimeString() } </h2>

		</div>
		) 	
	}


}



export default Feed;