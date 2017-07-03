import React, { Component } from 'react';
import Zone from '../presentational/Zone';
import superagent from 'superagent';

class Zones extends Component {
		constructor(){
		super();
		this.state = {
			zone: {
				name: '',
				zipCode: '',
				numComments: ''
			},
			list: []
		}
	}

	submitZone() {
		console.log('submitted: ' + JSON.stringify(this.state.zone));
		let updatedList = Object.assign([], this.state.list);
		updatedList.push(this.state.zone);

		this.setState({
			list: updatedList
		})
	}

	updateName(event) {
		let updatedName = Object.assign({}, this.state.zone);
		updatedName['name'] = event.target.value;

		this.setState ({
			zone: updatedName
		})
	}

	updateZip(event) {
		let updatedZip = Object.assign({}, this.state.zone);
		updatedZip['zipCode'] = event.target.value;

		this.setState ({
			zone: updatedZip
		})
	}

	updateComments(event) {
		let updatedComments = Object.assign({}, this.state.zone);
		updatedComments['numComments'] = event.target.value;

		this.setState ({
			zone: updatedComments
		})
	}


	render(){
		const listItems = this.state.list.map((zone, i) => {
				return(
					<li key={i}><Zone zone={zone}/></li>
				)
			});

		return(
			<div>
				<ol style={{listStyleType: 'none'}}>
					{listItems}
				</ol>
				<input onChange={this.updateName.bind(this)} className="form-control" type="text" placeholder="Zone" />
				<input onChange={this.updateZip.bind(this)} className="form-control" type="text" placeholder="zip" />
				<input onChange={this.updateComments.bind(this)} className="form-control" type="text" placeholder="numComments" />
				<button onClick={this.submitZone.bind(this)} className="btn btn-danger">Submit Zone</button>
			</div>
		)
	}
}

export default Zones