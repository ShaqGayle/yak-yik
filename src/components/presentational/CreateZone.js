import React, { Component } from 'react'

class CreateZone extends Component {
	constructor() {
		super();
		this.state = {
			zone: {}
		}
	}

	updateZone(event) {
		let updatedZone = Object.assign({}, this.state.zone);
		updatedZone[event.target.id] = event.target.value;

		this.setState({
			zone: updatedZone
		});

		console.log(updatedZone);
	}

	submitZone(event) {
		this.props.onCreate(this.state.zone);
	}

	render() {
		return(
			<div>
				<h3> Create Zone </h3>
				<input onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zone" id="name"/>
				<input onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="zip" id="zipCode"/>
				<button onClick={this.submitZone.bind(this)} className="btn btn-danger">Submit Zone</button>
			</div>
		);
	}
}

export default CreateZone;