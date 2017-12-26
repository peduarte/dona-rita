import React from 'react';

import { ProductHolder } from './ProductHolder';
import { PostcodeValidator } from '../PostcodeValidator/PostcodeValidator';

import ProductImg from '../../images/product.png';

const allowedPostCodes = [
	'E1',
	'E11',
	'E12',
	'E14',
	'E15',
	'E16',
	'E1W',
	'E2',
	'E20',
	'E3',
	'E5',
	'E6',
	'E7',
	'E8',
	'E9',
	'E98',
	'EC1',
	'EC1A',
	'EC1M',
	'EC1N',
	'EC1P',
	'EC1R',
	'EC1V',
	'EC1Y',
	'EC2',
	'EC2A',
	'EC2M',
	'EC2N',
	'EC2P',
	'EC2R',
	'EC2V',
	'EC2Y',
	'EC3',
	'EC3A',
	'EC3M',
	'EC3N',
	'EC3P',
	'EC3R',
	'EC3V',
	'EC4',
	'EC4A',
	'EC4M',
	'EC4N',
	'EC4P',
	'EC4R',
	'EC4V',
	'EC4Y',
	'EC50',
	'N1',
	'N16',
	'N1P',
	'N5',
	'N6',
	'E18',
	'IG2',
	'IG7',
	'IG8',
	'IG9',
	'IG10',
	'SW4',
	'SW12',
];

export class Product extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
			postcode: '',
			outcode: '',
			isValid: false,
			isDeliverable: false,
		};
	}

	handleValidPostcode = (postcode, outcode) => {
		const isDeliverable = allowedPostCodes.indexOf(outcode) > -1;

		this.setState(prevState => {
			return {
				counter: prevState.counter + 1,
				postcode,
				outcode,
				isValid: true,
				isDeliverable,
			};
		});
	};

	handleInvalidPostcode = postcode => {
		this.setState(prevState => {
			return {
				counter: prevState.counter + 1,
				postcode,
				outcode: '',
				isValid: false,
				isDeliverable: false,
			};
		});
	};

	render() {
		return (
			<div className="section product-section">
				<div className="grid">
					<div className="col sm-11 sm-push-1 md-6 md-push-0 lg-5 lg-push-1">
						<img src={ProductImg} />
					</div>

					<div className="col fluid md-6 lg-5">
						<h1 style={{ marginTop: 0 }}>Bake-at-home frozen pack.</h1>
						<h3 className="color-salmon1">15 cheesy balls – £5.</h3>

						<div className="postcode" id="postcode-holder">
							<p className="small">
								We're a small family business and we only deliver in certain
								postcodes. Enter your postcode below and let's hope we can
								deliver to you.
							</p>

							{!this.state.isDeliverable && (
								<PostcodeValidator
									onValidPostcode={this.handleValidPostcode}
									onInvalidPostcode={this.handleInvalidPostcode}
								/>
							)}

							{this.state.isDeliverable && <ProductHolder />}

							{!this.state.isValid &&
								this.state.counter > 0 && (
									<p className="postcode-message postcode-wrong">
										Please enter a valid postcode.
									</p>
								)}

							{this.state.isValid &&
								!this.state.isDeliverable &&
								this.state.counter > 0 && (
									<div className="postcode-message postcode-nope">
										<h4>Sorry, we don't deliver there.</h4>
									</div>
								)}

							{this.state.isValid &&
								this.state.outcode === 'W10' && (
									<div className="postcode-message postcode-shop">
										{/* {% assign shop = site.data.stockists | where: 'name', 'Portobello Wholefoods' | first %} */}
										<h4>
											🎉 Head down to your nearest store to buy your frozen
											pack.
										</h4>
										{/* <address>{{ shop.name }}<br>{{ shop.address }}<br>{{ shop.postCode }}</address>
										<a href="https://www.google.com/maps/dir/?api=1&destination={{ shop.postCode }}" target="_blank">View on map</a> */}
									</div>
								)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
