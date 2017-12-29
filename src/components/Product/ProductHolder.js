import React from 'react';

import { CalendarIcon } from '../../icons/CalendarIcon';
import { shopifyOptions } from './shopifyOptions';
import { loadScript } from '../../utils/loadScript';

export class ProductHolder extends React.Component {
	constructor(props) {
		super(props);

		this.buyButton = null;
		this.qtyInput = null;
		this.Product = null;
		this.minQty = 2;
		this.state = { isBelowMin: false };
	}

	onInputChange = event => {
		if (Number(event.target.value) >= this.minQty) {
			this.buyButton.removeAttribute('disabled');
			this.setState({ isBelowMin: false });
		} else {
			this.buyButton.setAttribute('disabled', 'disabled');
			this.setState({ isBelowMin: true });
		}
	};

	applyHacks = component => {
		this.Product.selectedQuantity = this.minQty;

		this.buyButton = component.node.querySelector('.shopify-buy__btn');
		this.qtyInput = component.node.querySelector('.shopify-buy__quantity');

		this.buyButton.setAttribute('disabled', 'disabled');

		this.qtyInput.addEventListener('change', this.onInputChange);
		this.qtyInput.addEventListener('blur', this.onInputChange);
		this.qtyInput.addEventListener('keyup', this.onInputChange);
	};

	validateQuantity = component => {
		if (this.Product.selectedQuantity < this.minQty) {
			this.Product.selectedQuantity = this.minQty;
		}
	};

	shopifyReady = (ui, componentOptions) => {
		ui.createComponent('product', {
			id: [9367035273],
			node: document.getElementById('product-inject'),
			moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
			options: componentOptions,
		});
		this.Product = ui.components.product[0];
	};

	componentDidMount() {
		const shopifyBuyInit = () => {
			const client = ShopifyBuy.buildClient({
				domain: 'dona-rita.myshopify.com',
				apiKey: '260e658ec8cdc689ca1342a79adba733',
				appId: '6',
			});

			ShopifyBuy.UI.onReady(client).then(ui =>
				this.shopifyReady(
					ui,
					shopifyOptions(this.applyHacks, this.validateQuantity)
				)
			);
		};

		if (window.ShopifyBuy && window.ShopifyBuy.UI) {
			shopifyBuyInit();
		} else {
			loadScript(
				'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
			).then(shopifyBuyInit, error => {
				console.log(`Failed to load script: ${error}`);
			});
		}
	}

	componentWillUnmount() {
		this.qtyInput.removeEventListener('change', this.onInputChange);
		this.qtyInput.removeEventListener('blur', this.onInputChange);
		this.qtyInput.removeEventListener('keyup', this.onInputChange);
	}

	render() {
		return (
			<div>
				<div id="product-holder">
					<p className="small delivery-date">
						<CalendarIcon /> Delivery date: usually within 3-5 days
					</p>
					<div id="product-inject" />
				</div>
				{this.state.isBelowMin && (
					<p className="postcode-message message-qty">
						The minimum order quantity is 2.
					</p>
				)}
			</div>
		);
	}
}
