import React, { Component } from 'react';
import { Zone, CreateZone } from '../presentational';
import { APIManager } from '../../utils';

class Zones extends Component {
		constructor(){
		super();
		this.state = {
			list: []
		}
	}

	componentDidMount() {
		console.log('Component mounted');

		APIManager.get('api/zone', null, (err, res) => {
			if(err){
				alert('ERROR: ' +err.message);
				return;
			}

			this.setState({
				selected: 0,
				list: res.result
			})
		});
	}

	submitZone(zone) {
		let updatedZone = Object.assign({}, zone);
		updatedZone['zipCodes'] = updatedZone.zipCode.split(',');

		APIManager.post('/api/zone', updatedZone, (err, res) => {
			if(err) {
				alert('ERROR: ' + err.message);
				return;
			}

			console.log("Zone Submitted: " + JSON.stringify(res));
			let updatedList = Object.assign([], this.state.list);
			updatedList.push(res.result);

			this.setState({
				list: updatedList
			});
		});

		// let updatedList = Object.assign([], this.state.list);
		// updatedList.push(this.state.zone);

		// this.setState({
		// 	list: updatedList
		// })
	}

	selectZone(index) {
		let updatedTitle = index;
		this.setState({
			selected: updatedTitle
		});
	}

	render(){
		const listItems = this.state.list.map((zone, i) => {
			let selected = (i == this.state.selected);
				return(
					<li key={i}><Zone index = {i} select={this.selectZone.bind(this)} isSelected={selected} zone={zone}/></li>
				)
			});

		return(
			<div>
				<ol style={{listStyleType: 'none'}}>
					{listItems}
				</ol>
				<CreateZone onCreate = {this.submitZone.bind(this)} />
			</div>
		)
	}
}

export default Zones