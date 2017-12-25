import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import { Nav } from '../components/Nav/Nav';

import './index.scss';

const TemplateWrapper = ({ children }) => (
	<div>
		<Helmet
			title="Dona Rita – Brazilian cheese bread. Pão de Queijo."
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' },
			]}
		>
			<link
				href="https://fonts.googleapis.com/css?family=Montserrat"
				rel="stylesheet"
			/>
		</Helmet>
		<Nav />
		{children()}
	</div>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper;
