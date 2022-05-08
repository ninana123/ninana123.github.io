window.addEventListener('DOMContentLoaded', () => {

	// modal

	const modalActive = '.modal_active';

	document.addEventListener('click', (event) => {
		if (event.target.closest('[data-modal=advice]')) {
			event.preventDefault();
			showModal('#advice');
		} else if (event.target.closest('[data-modal=order]')) {
			showModal('#order');

			let modalSubtitle = document.querySelector('#order').querySelector('.modal__subtitle');
			modalSubtitle.innerHTML = event.target.closest('.product__block').querySelector('.product__name').innerHTML;
		} else if (!event.target.closest('.modal__content') && document.querySelector(modalActive)) {
			hideModal(document.querySelector(modalActive));
		} else if (event.target.closest('.modal__close') && document.querySelector(modalActive)) {
			hideModal(document.querySelector(modalActive));
		}
	});

	const modals = document.querySelectorAll('.modal');
	modals.forEach(modal => {

		document.addEventListener('keydown', (event) => {
			if (event.code === 'Escape' && modal.classList.contains('modal_active')) {
				hideModal(modal);
			}
		});

	});

	document.addEventListener('submit', (event) => {
		event.preventDefault();
		showModalMini('.modal_mini');
	});

	function addOverlay() {
		let div = document.createElement('div');

		div.classList.add('overlay');
		document.body.append(div);
	}

	function showModal(modal) {
		document.querySelector(modal).classList.add('modal_active');
		addOverlay();
		document.body.style.overflow = 'hidden';

	}

	function hideModal(modal) {
		modal.classList.remove('modal_active');
		document.querySelector('.overlay').remove();

		document.body.style.overflow = '';
	}

	function showModalMini(modal) {
		let modalActive = document.querySelector('.modal_active');

		if (modalActive) {
			modalActive.classList.remove('modal_active');
			document.querySelector(modal).classList.add('modal_active');
		} else {
			showModal(modal);
		}
	}

	// tabs

	class ProductBlock {
		constructor(parent, ...classes) {
			this.parent = document.querySelector(parent);
			this.classes = classes;
		}

		addProduct(src, name, descr, oldPrice, discountPrice) {

			let div = document.createElement('div');
			this.classes.forEach(className => div.classList.add(className));
			div.innerHTML = `
					<div class="product__inner">
						<div class="product__content">
								<img class="product__img" src=${src} alt="pulsometer">
								<div class="product__name">${name}</div>
								<div class="product__descr">${descr}</div>
							</div>
							<div class="product__info product__info_hidden">
								<ul class="product__info-list">
									<li class="product__info-item">Вы услышите звуковое оповещение о нужном пульсе во время тренировки;</li>
									<li class="product__info-item">Вы увидите информативный графический индикатор целевых тренировочных зон
										пульса;</li>
									<li class="product__info-item">Также Вы увидите информацию о расходе калорий за тренировку;</li>
									<li class="product__info-item">Вы сможете посмотреть данные по 10 тренировкам.</li>
								</ul>
		
							</div>
					</div>
													<a href="#" class="product__link">Подробнее</a>
					<div class="product__footer">
						<div class="product__price">
							<div class="product__old-price">${oldPrice}
								&#8381;</div>
							<div class="product__discount-price">${discountPrice}
								&#8381;</div>
						</div>
						<button class="btn product__btn" data-modal="order">купить</button>
					</div>
			`;

			this.parent.append(div);
		}

		clearCatalog() {
			this.parent.innerHTML = '';
		}
	}

	const productBlock = new ProductBlock('.product', 'product__block');
	const infoProducts =
		[
			[
				"images/catalog/img/pulsometer.png", 'Пульсометр Polar FT1', `Для первых шагов в тренировках, основанных на сердечном ритме`, '4 750', '4 500', 'fitness'
			],
			[
				"images/catalog/img/pulsometer.png", 'Пульсометр Polar FT3', `Для первых шагов в тренировках, основанных на сердечном ритме`, '4 750', '4 500', 'run'
			],
			[
				"images/catalog/img/pulsometer.png", 'Пульсометр Polar FT2', `Для первых шагов в тренировках, основанных на сердечном ритме`, '4 750', '4 500', 'triathlon'
			],
			[
				"images/catalog/img/pulsometer.png", 'Пульсометр Polar FT4', `Для первых шагов в тренировках, основанных на сердечном ритме`, '4 750', '4 500', 'fitness'
			],
			[
				"images/catalog/img/pulsometer.png", 'Пульсометр Polar FT5', `Для первых шагов в тренировках, основанных на сердечном ритме`, '4 750', '4 500', 'fitness'
			],
			[
				"images/catalog/img/pulsometer.png", 'Пульсометр Polar FT6', `Для первых шагов в тренировках, основанных на сердечном ритме`, '4 750', '4 500', 'run'
			],
			[
				"images/catalog/img/pulsometer.png", 'Пульсометр Polar FT8', `Для первых шагов в тренировках, основанных на сердечном ритме`, '4 750', '4 500', 'triathlon'
			], [
				"images/catalog/img/pulsometer.png", 'Пульсометр Polar FT7', `Для первых шагов в тренировках, основанных на сердечном ритме`, '4 750', '4 500', 'fitness'
			],
			[
				"images/catalog/img/pulsometer.png", 'Пульсометр Polar FT9', `Для первых шагов в тренировках, основанных на сердечном ритме`, '4 750', '4 500', 'run'
			]
		];

	catalogUpdate(infoProducts, document.querySelector('.tab__item_active').getAttribute('data-category'));

	const tab = document.querySelector('.tab');
	tab.addEventListener('click', (event) => {
		if (event.target.closest('.tab__item') && !event.target.closest('.tab__item_active')) {
			if (event.target.closest('.tab__item')) {
				tab.querySelector('.tab__item_active').classList.remove('tab__item_active');
				event.target.classList.add('tab__item_active');

				productBlock.clearCatalog();
				catalogUpdate(infoProducts, event.target.getAttribute('data-category'));
			}
		}
	});

	function catalogUpdate(products, dataAtr) {
		products.forEach((item) => {
			if (dataAtr == item[item.length - 1]) {
				productBlock.addProduct(...item);
			}
		});
	}

	const product = document.querySelector('.product');
	product.addEventListener('click', (event) => {
		if (event.target.closest('.product__link')) {
			event.preventDefault();

			let parent = event.target.closest('.product__block')

			parent.querySelector('.product__content').classList.toggle('product__content_hidden');
			parent.querySelector('.product__info').classList.toggle('product__info_hidden');


		}
	});
});
