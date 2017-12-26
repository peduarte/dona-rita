import React from 'react';

import { Section } from '../components/Section/Section';
import { Contact } from '../components/Contact/Contact';

import Stock from '../images/stock.jpg';
import FullWidthImageTwoHands from '../images/full-width-image-twohands.jpg';

const stockists = [
	{
		name: 'Eat 17 Walthamstow',
		area: 'Walthamstow',
		address: '28-30 Orford Rd',
		postCode: 'E17 9NJ',
	},

	{
		name: 'Eat 17 Hackney',
		area: 'Clapton',
		address: "64-66 Brooksby's Walk",
		postCode: 'E9 6DA',
	},

	{
		name: 'The Deli Downstairs',
		area: 'Victoria Park Village',
		address: '211 Victoria Park Rd',
		postCode: 'E9 7JN',
	},

	{
		name: 'The Grocery',
		area: 'Shoreditch',
		address: '52-56 Kingsland Rd',
		postCode: 'E2 8DP',
	},

	{
		name: 'Raw Store',
		area: 'Shoreditch',
		address: '343 Old St',
		postCode: 'EC1V 9LL',
	},

	{
		name: 'Pickles of London',
		area: 'Dalston',
		address: '45 Kingsland High St',
		postCode: 'E8 2JS',
	},

	{
		name: 'Portobello Wholefoods',
		area: 'Notting Hill',
		address: '266 Portobello Rd',
		postCode: 'W10 5TY',
	},
];

function Stockist({ className, shop }) {
	return (
		<div className={`col sm-10 md-3 ${className}`}>
			<div>
				<h3>{shop.name}</h3>
				<h4>{shop.area}</h4>
				<address>
					{shop.address}
					<br />
					{shop.postCode}
				</address>
				<a
					href="https://www.google.com/maps/dir/?api=1&destination={ shop.postCode }"
					className="small faded"
					target="_blank"
				>
					View on map
				</a>
			</div>
		</div>
	);
}

function StockistsPage() {
	return (
		<div className="main">
			<Section>
				<div className="grid">
					<h1 className="col -block md-push-1 lg-push-2 title">
						Where to buy<br />
						<span className="salmon">
							Bake-at-home<br />frozen packs.
						</span>
					</h1>
				</div>
				<div className="grid stockist-list">
					{stockists.map((shop, index) => {
						if (index < 3) {
							return (
								<Stockist
									key={shop.name}
									shop={shop}
									className={index === 0 ? 'md-push-2 lg-push-3' : ''}
								/>
							);
						}
					})}
				</div>
				<div className="grid stockist-list">
					{stockists.map((shop, index) => {
						if (index >= 3 && index < 6) {
							return (
								<Stockist
									key={shop.name}
									shop={shop}
									className={index === 3 ? 'md-push-2 lg-push-3' : ''}
								/>
							);
						}
					})}
				</div>
				<div className="grid stockist-list">
					{stockists.map((shop, index) => {
						if (index >= 6 && index < 9) {
							return (
								<Stockist
									key={shop.name}
									shop={shop}
									className={index === 6 ? 'md-push-2 lg-push-3' : ''}
								/>
							);
						}
					})}
				</div>
			</Section>

			<Section className="-blue center">
				<div className="grid">
					<h2>Can't find Dona Rita Pão de Queijo near you?</h2>
					<p>Bring our Product Request Form to your favourite store.</p>
					<a
						className="button"
						href="{{ site.url}}/product-request-form.pdf"
						target="_blank"
					>
						Get request form
					</a>
				</div>
			</Section>

			<div className="banner">
				<div
					className="banner-img -small fake-img -sixteen-x-seven"
					style={{ backgroundImage: `url(${FullWidthImageTwoHands})` }}
				/>
				<div
					className="banner-img -medium fake-img -sixteen-x-seven"
					style={{ backgroundImage: `url(${FullWidthImageTwoHands})` }}
				/>
			</div>

			<Section className="-blue stockist-interest">
				<div className="grid">
					<h2 className="h1 col md-push-1 lg-push-2">
						Interested in stocking?
					</h2>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-3">
						<p className="measure-wider">
							We're currently growing our network of retailers in London. If
							you're interested in stocking our product at your store, please
							call Clara on +447952216979 or email us at{' '}
							<a href="mailto:oi@donarita.co.uk">oi@donarita.co.uk</a>.
							Distributors welcome.
						</p>
					</div>
				</div>

				<div className="grid">
					<div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
						<div
							className="fake-img -three-x-two"
							style={{ backgroundImage: `url(${Stock})` }}
						/>
					</div>
				</div>
			</Section>

			<Contact />
		</div>
	);
}

export default StockistsPage;
