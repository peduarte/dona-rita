import React from 'react';

export class FakeImg extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div
				className={`fake-img ${this.props.className}`}
				style={{ backgroundImage: `url(${this.props.img})` }}
			/>
		);
	}
}
