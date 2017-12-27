import React from 'react';

import { CalendarIcon } from '../../icons/CalendarIcon';

export class ProductHolder extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		/* START CUSTOM HACKS 💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩 */
		var orderQtyInvalid = document.querySelector('.message-qty');
		var Product;
		var buyButton;
		var qtyInput;

		function applyHacks(component) {
			Product.selectedQuantity = 2;

			buyButton = component.node.querySelector('.shopify-buy__btn');
			qtyInput = component.node.querySelector('.shopify-buy__quantity');

			buyButton.setAttribute('disabled', 'disabled');

			qtyInput.addEventListener('change', onInputChange);
			qtyInput.addEventListener('blur', onInputChange);
			qtyInput.addEventListener('keyup', onInputChange);
		}

		function validateQuantity(component) {
			if (Product.selectedQuantity < 2) {
				Product.selectedQuantity = 2;
			}
		}

		function onInputChange(event) {
			if (Number(event.target.value) >= 2) {
				buyButton.removeAttribute('disabled');
				orderQtyInvalid.style.display = 'none';
			} else {
				buyButton.setAttribute('disabled', 'disabled');
				orderQtyInvalid.style.display = 'block';
			}
		}
		/* END CUSTOM HACKS 💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩 */
		var scriptURL =
			'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

		if (window.ShopifyBuy) {
			if (window.ShopifyBuy.UI) {
				ShopifyBuyInit();
			} else {
				loadScript();
			}
		} else {
			loadScript();
		}

		function loadScript() {
			var script = document.createElement('script');
			script.async = true;
			script.src = scriptURL;
			(
				document.getElementsByTagName('head')[0] ||
				document.getElementsByTagName('body')[0]
			).appendChild(script);
			script.onload = ShopifyBuyInit;
		}

		function ShopifyBuyInit() {
			var client = ShopifyBuy.buildClient({
				domain: 'dona-rita.myshopify.com',
				apiKey: '260e658ec8cdc689ca1342a79adba733',
				appId: '6',
			});

			var componentOptions = {
				product: {
					iframe: false,
					buttonDestination: 'directCheckout',
					variantId: 'all',
					width: '240px',
					contents: {
						img: false,
						title: false,
						price: false,
						description: false,
						button: true,
						quantity: true,
						options: false, // Hide variants
					},
					text: {
						button: 'Buy me',
					},
					events: {
						afterInit: applyHacks,
						afterRender: validateQuantity,
					},
				},
				cart: {
					popup: false,
				},
			};

			ShopifyBuy.UI.onReady(client).then(function(ui) {
				ui.createComponent('product', {
					id: [9367035273],
					node: document.getElementById('product-inject'),
					moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
					options: componentOptions,
				});
				Product = ui.components.product[0];
			});
		}
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
				<p className="postcode-message message-qty" style={{ display: 'none' }}>
					The minimum order quantity is 2.
				</p>
			</div>
		);
	}
}
