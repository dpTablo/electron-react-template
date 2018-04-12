import React, { Component } from 'react'
import styles from './App.scss'

import image_king from '../asset/king.png'

class App extends Component {
	constructor() { 
		super()
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">electron + React</h1>
					<img className="testImage" src={image_king} />
				</header>
				<p className="App-intro">
					<button className="testButton" onClick={ (event) => this.alertMessage(event) }>react 버튼</button>
				</p>
			</div>
		)
	}

	alertMessage(event) {
		alert('click : className => ' + event.target.className)
	}
}

export default App