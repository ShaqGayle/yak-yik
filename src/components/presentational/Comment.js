import React, { Component } from 'react';
import styles from '../styles';

class Comment extends Component{
	render() {
		return(
			<div>
				<p style={{fontSize:20, fontWeight:400}}>
					{this.props.data.body}
				</p>
				<span style={{fontWeight:200}}>{this.props.data.username}</span>
				<span style={{fontWeight:200, marginRight: 12, marginLeft: 12}}> | </span>
				<span style={{fontWeight:200}}>{this.props.data.timestamp}</span>
				<hr />
			</div>
		);
	}
}

export default Comment