import React from 'react';
import Link from 'gatsby-link';

import { BurgerIcon } from '../../icons/BurgerIcon';
import { CrossIcon } from '../../icons/CrossIcon';

export function Nav() {
	return (
		<div className="grid">
			<a href="#mobile-nav" className="mobile-menu -open">
				<BurgerIcon />
			</a>

			<nav id="mobile-nav" className="main-nav -mobile">
				<a href="#" className="mobile-menu -close">
					<CrossIcon />
				</a>
				<Link to="/">Home</Link>
				<Link to="/story">Story</Link>
				<Link to="/press">Press</Link>
				<Link to="/stockists">Stockists</Link>

				<Link to="/buy" className="button">
					Buy online
				</Link>
			</nav>
			<nav className="main-nav -desktop col md-9 md-push-2">
				<Link to="/">Home</Link>
				<Link to="/story">Story</Link>
				<Link to="/press">Press</Link>
				<Link to="/stockists">Stockists</Link>

				<Link to="/buy" className="button">
					Buy online
				</Link>
			</nav>
		</div>
	);
}
