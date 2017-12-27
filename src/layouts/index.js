import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import { Nav } from '../components/Nav/Nav';
import './index.scss';

const faviconSizes = [16, 32, 64];

const TemplateWrapper = ({ title, children }) => (
	<div>
		<Helmet>
			<link
				href="https://fonts.googleapis.com/css?family=Montserrat"
				rel="stylesheet"
			/>
			{faviconSizes.map(size => (
				<link
					rel="icon"
					type="image/png"
					href={`/social/${size}x${size}.png`}
					sizes={`${size}x${size}`}
					key={`${size}x${size}`}
				/>
			))}
		</Helmet>
		<Nav />
		{children()}
	</div>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper;
