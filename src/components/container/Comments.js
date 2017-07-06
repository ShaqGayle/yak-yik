import React, { Component } from 'react';
import {CreateComment, Comment} from '../presentational';
import styles from '../styles';
import { APIManager } from '../../utils';

class Comments extends Component {
	constructor(){
		super();
		//When setting a new state, it updates the component. The component REACTS to the changes
		this.state = {
			list: []
		}
	}

	componentDidMount() {
		console.log('Component mounted');

		APIManager.get('/api/comment', null, (err, res) => {
			if(err){
				alert('ERROR' +err.message);
				return;
			}

			this.setState({
				list: res.result
			})
		});
	}

	submitComment(comment) {
		console.log('submitted: ' + JSON.stringify(comment));
		// let updatedList = Object.assign([], this.state.list);
		// updatedList.push(this.state.comment);

		// this.setState({
		// 	list: updatedList
		// })



		APIManager.post('/api/comment', comment, (err, res) => {
			if(err) {
				alert('ERROR: ' + err.message);
				return;
			}

			console.log("Comment Accepted: " + JSON.stringify(res));
			let updatedList = Object.assign([], this.state.list);
			updatedList.push(res.result);

			this.setState({
				list: updatedList
			});

		});
	}

	render(){
		const listItems = this.state.list.map((data, i) => {
			return(
				<li key={i}><Comment data={data} /></li>
			);
		})

		const style = styles.comment;

		return(
			<div style={style.commentsBox}>
				<h1>Current Zone: Zone 1</h1>
				<div>
					<ul style={style.commentsList}>
						{listItems}
					</ul>
					<CreateComment onCreate={this.submitComment.bind(this)}/>
				</div>
			</div>
		)
	}
}

export default Comments