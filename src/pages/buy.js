import React from 'react';

import { Section } from '../components/Section/Section';
import { Contact } from '../components/Contact/Contact';
import { Product } from '../components/Product/Product';

import BannerMobile from '../images/banner-mobile.jpg';
import Banner from '../images/banner.jpg';

function BuyPage() {
	return (
		<div className="main">
			<Product />

			<div className="banner">
				<div
					className="banner-img -small fake-img -sixteen-x-seven"
					style={{ backgroundImage: `url(${BannerMobile})` }}
				/>
				<div
					className="banner-img -medium fake-img -sixteen-x-seven"
					style={{ backgroundImage: `url(${Banner})` }}
				/>
			</div>

			<Section>
				<Contact />
			</Section>
		</div>
	);
}

export default BuyPage;
