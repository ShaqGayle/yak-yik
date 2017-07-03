import React, { Component } from 'react';
import Comment from '../presentational/Comment';
import styles from '../styles';

class Comments extends Component {
	constructor(){
		super();
		//When setting a new state, it updates the component. The component REACTS to the changes
		this.state = {
			comment: {
				username: '',
				body: '',
				timestamp: ''
			},

			list: []
		}
	}

	submitComment() {
		console.log('submitted: ' + JSON.stringify(this.state.comment));
		let updatedList = Object.assign([], this.state.list);
		updatedList.push(this.state.comment);

		this.setState({
			list: updatedList
		})
	}

	updateUsername(event) {
		// this.state.comment['username'] = event.target.value // WRONG
		let updatedUser = Object.assign({}, this.state.comment);
		updatedUser['username'] = event.target.value;

		this.setState ({
			comment: updatedUser
		})
	}

	updateComment(event) {
		let updatedBody = Object.assign({}, this.state.comment);
		updatedBody['body'] = event.target.value;

		this.setState ({
			comment: updatedBody
		})
	}

	updateTime(event) {
		let updatedBody = Object.assign({}, this.state.comment);
		updatedBody['timestamp'] = event.target.value;

		this.setState ({
			comment: updatedBody
		})
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

					<input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="username" /><br />
					<input onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="comment" /><br />
					<input onChange={this.updateTime.bind(this)} className="form-control" type="text" placeholder="timestamp" /><br />
					<button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
				</div>
			</div>
		)
	}
}

export default Comments