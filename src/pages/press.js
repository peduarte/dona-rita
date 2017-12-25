import React from 'react';

import { Section } from '../components/Section/Section';
import { Contact } from '../components/Contact/Contact';

import FullWidthImageDark from '../images/full-width-image-dark.jpg';
import EveningStandard from '../images/press-logos/evening-standard.png';
import Timeout from '../images/press-logos/timeout.png';
import TheSundayTimes from '../images/press-logos/the-sunday-times.png';
import Vice from '../images/press-logos/vice.png';
import Msn from '../images/press-logos/msn.png';
import Londonist from '../images/press-logos/londonist.png';
import Munchies from '../images/press-logos/munchies.png';
import Metro from '../images/press-logos/metro.png';

function PressPage() {
	return (
		<div className="main">
			<Section>
				<div className="grid">
					<h1 className="col -block md-push-1 lg-push-2 title">
						Press.<br />
						<span className="salmon">Word on the street.</span>
					</h1>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-2 lg-push-3">
						<p className="measure">
							We’ve only been trading since March but the media are already
							getting excited about Dona Rita. Here are some of the names that
							wrote an article about us.
						</p>
					</div>
				</div>

				<div className="grid press-icons">
					<div className="col sm-6 md-2 md-push-3">
						<a
							href="http://www.standard.co.uk/goingout/restaurants/p-o-de-queijo-in-london-brazilian-cheese-bread-comes-to-old-street-a3530296.html"
							target="_blank"
						>
							<img src={EveningStandard} />
						</a>
					</div>
					<div className="col sm-6 md-2">
						<a
							href="https://www.timeout.com/london/blog/a-brazilian-cheese-balls-pop-up-is-coming-to-london-050917"
							target="_blank"
						>
							<img src={Timeout} />
						</a>
					</div>
					<div className="col sm-6 md-2">
						<a
							href="https://www.instagram.com/p/BTo1qaajvIP/?taken-by=sundaytimesfood"
							target="_blank"
						>
							<img src={TheSundayTimes} />
						</a>
					</div>
					<div className="col sm-6 md-2">
						<a
							href="https://munchies.vice.com/en_uk/article/a3dw4g/pao-de-queijo-is-cheesy-gluten-free-comfort-food"
							target="_blank"
						>
							<img src={Vice} />
						</a>
					</div>
				</div>
				<div className="grid press-icons">
					<div className="col sm-6 md-2 md-push-3">
						<a
							href="https://www.msn.com/en-gb/news/other/p%C3%A3o-de-queijo-in-london-brazilian-cheese-bread-comes-to-old-street/ar-BBAIZ5w"
							target="_blank"
						>
							<img src={Msn} />
						</a>
					</div>
					<div className="col sm-6 md-2">
						<a
							href="http://londonist.com/london/things-to-do/things-to-do-in-london-this-week-8-14-may-2017"
							target="_blank"
						>
							<img src={Londonist} />
						</a>
					</div>
					<div className="col sm-6 md-2">
						<a
							href="https://munchies.vice.com/en_uk/article/a3dw4g/pao-de-queijo-is-cheesy-gluten-free-comfort-food"
							target="_blank"
						>
							<img src={Munchies} />
						</a>
					</div>
					<div className="col sm-6 md-2">
						<a
							href="http://metro.co.uk/2017/07/14/19-of-the-best-gluten-free-market-stands-in-london-you-have-to-try-6753012/"
							target="_blank"
						>
							<img src={Metro} />
						</a>
					</div>
				</div>
			</Section>

			<div className="banner">
				<div
					className="banner-img -small fake-img -three-x-two"
					style={{ backgroundImage: `url(${FullWidthImageDark})` }}
				/>
				<div
					className="banner-img -medium fake-img -sixteen-x-seven"
					style={{ backgroundImage: `url(${FullWidthImageDark})` }}
				/>
			</div>

			<div className="section -salmon testimonial">
				<div className="grid">
					<blockquote className="col md-9 md-push-1 lg-push-2">
						<h3 className="h1">
							Forget cronuts and duffins, there’s a new baked good in town.
						</h3>
						<p>Ben Norum — Evening standard</p>
					</blockquote>
				</div>
			</div>
			<Contact />
		</div>
	);
}

export default PressPage;
