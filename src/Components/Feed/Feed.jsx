import React from 'react';
import s from './Feed.module.css'

class Feed extends React.Component {

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

	render() {
		return (
		<div>
			<h1>Feed</h1>

	      <h1>Привет, мир!</h1>
	      <h2>Сейчас {new Date().toLocaleTimeString()}.</h2>

		</div>
		) 	
	}

	// setInterval(this.render, 1000);
}

// setInterval(Feed.render, 1000);

export default Feed;