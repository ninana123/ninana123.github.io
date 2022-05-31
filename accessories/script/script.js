document.addEventListener('DOMContentLoaded', () => {

	class ProductBlock {
		constructor(parent, ...classes) {
			this.parent = document.querySelector(parent);
			this.classes = classes;
		}

		addProduct(src, name, price, dataName) {

			let div = document.createElement('div');
			this.classes.forEach(className => div.classList.add(className));
			div.innerHTML = `
				<div class="catalog__product" data-category=${dataName}>
						<img src="${src}" alt="product" class="catalog__product-img">
						<div class="catalog__product-name">${name}</div>
						<div class="catalog__product-price">${price}</div>
				</div>
			`;

			this.parent.append(div);
		}

		clearCatalog() {
			this.parent.innerHTML = '';
		}
	}

	const productBlock = new ProductBlock('.catalog__products', 'catalog__block');
	const infoProducts =
		[
			[
				"img/clock.jpg", 'Часы Multi Watches', '9 500р', 'clock'
			],
			[
				"img/clock2.jpg", 'Часы GeekCook', '9 900р', 'clock'
			],
			[
				"img/clock3.jpg", 'Часы Rainbow', '7 300р', 'clock'
			],
			[
				"img/vase.jpg", 'Белая ваза', '1 700р', 'house'
			],
			[
				"img/specs.jpg", 'Очки Elton', '1 700р', 'accessories'
			],
			[
				"img/notebook.jpg", 'Огранайзер', '400р', 'house'
			],
			[
				"img/glasses.jpg", 'Набор стаканов', '2 300р', 'house'
			],
			[
				"img/shaker.jpg", 'Спортивный шейкер', '650р', 'house'
			],
			[
				"img/column.jpg", 'B & O акустическая система', '9 250р', 'house'
			],
			[
				"img/tea.jpg", 'Заварочный чайник', '1 150р', 'house'
			],
			[
				"img/board.jpg", 'Разделочная доска', '650р', 'house'
			],
			[
				"img/vinyl.jpg", 'Винил', '1 500р', 'house'
			]
		];

	infoProducts.forEach(item => {
		productBlock.addProduct(item[0], item[1], item[2], item[3])
	});

	document.querySelectorAll('.catalog__filter-category').forEach(item => {
		item.addEventListener('click', (event) => {
			productBlock.clearCatalog();
			document.querySelector('.catalog__filter-category_active').classList.remove('catalog__filter-category_active');
			event.target.classList.add('catalog__filter-category_active');

			if (event.target.getAttribute('data-category') == 'all') {
				infoProducts.forEach(item => {
					productBlock.addProduct(item[0], item[1], item[2], item[3])
				});
			} else if (event.target.getAttribute('data-category') == 'clock') {
				infoProducts.forEach(item => {
					if (item[3] == 'clock') {
						productBlock.addProduct(item[0], item[1], item[2], item[3])
					}
				});
			} else if (event.target.getAttribute('data-category') == 'house') {
				infoProducts.forEach(item => {
					if (item[3] == 'house') {
						productBlock.addProduct(item[0], item[1], item[2], item[3])
					}
				});
				let catalogProduct = document.querySelectorAll('.catalog__product');
				catalogProduct.forEach(item => {
					if (item.querySelector('.catalog__product-name').innerHTML == 'Огранайзер') {
						item.addEventListener('mouseover', () => {
							item.firstElementChild.src = 'img/notebook_green.jpg';
						});
						item.addEventListener('mouseout', () => {
							item.firstElementChild.src = 'img/notebook.jpg';
						})
					}
				});

			} else if (event.target.getAttribute('data-category') == 'accessories') {
				infoProducts.forEach(item => {
					if (item[3] == 'accessories') {
						productBlock.addProduct(item[0], item[1], item[2], item[3])
					}
				});
			}
		});
	})

	let catalogProduct = document.querySelectorAll('.catalog__product');

	function repaintImg() {
		catalogProduct.forEach(item => {
			if (item.querySelector('.catalog__product-name').innerHTML == 'Огранайзер') {
				item.addEventListener('mouseover', () => {
					item.firstElementChild.src = 'img/notebook_green.jpg';
				});
				item.addEventListener('mouseout', () => {
					item.firstElementChild.src = 'img/notebook.jpg';
				})
			}
		});
	}
	repaintImg();

	const registrationTrigger = document.querySelector('.header__registration'),
		registration = document.querySelector('.registration'),
		form = document.querySelector('form')

	registrationTrigger.addEventListener('click', () => {
		registration.classList.toggle('registration_active')
	})

	document.querySelector('.create').addEventListener('click', () => {
		registration.classList.toggle('registration_active')
	})
	document.querySelector('.clear').addEventListener('click', (e) => {
		e.preventDefault()
		registration.reset();

	})


});