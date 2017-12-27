import React from 'react';

import { TitleAndMetaTags } from '../components/TitleAndMetaTags/TitleAndMetaTags';
import { Section } from '../components/Section/Section';
import { Contact } from '../components/Contact/Contact';
import { Product } from '../components/Product/Product';

import bannerMobileImg from '../images/banner-mobile.jpg';
import bannerImg from '../images/banner.jpg';

function BuyPage({ data }) {
	return (
		<div className="main">
			<TitleAndMetaTags title="Buy online" pathname="buy" />

			<Product
				postcodes={data.allPostcodesJson.edges[0].node.allowed}
				stockists={data.allStockistsJson.edges}
			/>

			<div className="banner">
				<div
					className="banner-img -small fake-img -sixteen-x-seven"
					style={{ backgroundImage: `url(${bannerMobileImg})` }}
				/>
				<div
					className="banner-img -medium fake-img -sixteen-x-seven"
					style={{ backgroundImage: `url(${bannerImg})` }}
				/>
			</div>

			<Section>
				<Contact />
			</Section>
		</div>
	);
}

export const pageQuery = graphql`
	query allStockistsBuyQueryAndAllPostcodesQuery {
		allPostcodesJson {
			edges {
				node {
					allowed
				}
			}
		}
		allStockistsJson {
			edges {
				node {
					name
					address
					postCode
				}
			}
		}
	}
`;

export default BuyPage;
