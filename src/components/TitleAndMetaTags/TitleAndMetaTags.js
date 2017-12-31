import React from 'react';
import Helmet from 'react-helmet';

export function TitleAndMetaTags({ url, pathname, title, description }) {
	return (
		<Helmet>
			<title>
				{title} – {description}
			</title>

			<meta property="og:url" content={`${url}/${pathname}`} />
			<meta property="og:image" content="/social/hero-1.jpg" />
			<meta property="og:image" content="/social/hero-2.jpg" />
			<meta property="og:image" content="/social/hero-3.jpg" />
			<meta property="og:image" content="/social/hero-4.jpg" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />

			<meta name="twitter:url" content={`${url}/${pathname}`} />
			<meta name="twitter:image" content="/social/hero-1.jpg" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:site" content="@oidonarita" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content="@oidonarita" />
		</Helmet>
	);
}

TitleAndMetaTags.defaultProps = {
	url: 'http://donarita.co.uk',
	pathname: '',
	title: 'Dona Rita',
	description: 'Brazilian cheese bread. Pão de Queijo.',
};
