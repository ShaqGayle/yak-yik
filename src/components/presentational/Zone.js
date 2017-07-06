import React, { Component } from 'react';
import styles from '../styles';


class Zone extends Component {
	SelectTitle(event){
		event.preventDefault();
		this.props.select(this.props.index);
	}

	render() {
		const style = styles.zone;
		const zipCode = this.props.zone.zipCodes[0];
		const title = (this.props.isSelected) ? <a style={style.anchor} href="#">{this.props.zone.name}</a> : 
			<a href="#">{this.props.zone.name}</a>;

		return(

			<div style={style.container}>
				<h2 onClick={this.SelectTitle.bind(this)} style={style.header}> { title } </h2>
				<span>{zipCode}</span><br />
				<span>{this.props.zone.numComments} comments </span>
			</div>


		)
	}
}

export default Zone;