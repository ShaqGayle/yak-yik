import React, { Component } from 'react';

class CreateComment extends Component {
	constructor(){
		super();
		this.state = {
			comment: {

			}
		}
	}

	updateComment(event){
		let updatedComment = Object.assign({}, this.state.comment);
		updatedComment[event.target.id] = event.target.value;

		this.setState({
			comment: updatedComment
		})
		console.log(updatedComment);
	}

	submitComment(event){
		this.props.onCreate(this.state.comment);
	}

	render(){
		return(
			<div>
				<h3> Create Comment </h3>
				<input onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="username" id="username" /><br />
				<input onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="comment" id="body"/><br />
				<button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
			</div>
		);
	}
}

export default CreateComment;