document.addEventListener('DOMContentLoaded', () => {

	document.addEventListener('click', (event) => {
		if (event.target.hasAttribute('data-order') || event.target.classList.contains('products__img')) {
			let productsBlock = event.target.parentElement;
			showModal(productsBlock);

		}
	});

	function showModal(productsBlock) {
		let div = document.createElement('div');
		div.classList.add('modal');

		document.body.style.overflow = 'hidden';

		div.innerHTML = `
		<div class="modal__body">
			<form class="order-form" action="#">
				<div class="order-form__product-name">Ваш заказ: ${productsBlock.querySelector('.products__name').innerHTML}</div>
				<div class="order-form__product-price">Цена: ${productsBlock.querySelector('.products__prices').firstElementChild.innerHTML}</div>
				<input class="order-form__input" type="text" name="name" required placeholder="Ваше имя">
				<input class="order-form__input" type="number" name="phone" required placeholder="Ваш телефон">
				<input class="order-form__input" type="email" name="email" required placeholder="Ваш E-mail">
				<button class="btn order-form__btn" data-send>Отправить заявку</button>
			</form>
		</div>
	</div>`;

		document.documentElement.append(div);

		const form = document.querySelector('form');

		form.addEventListener('submit', (event) => {
			event.preventDefault();
			hideModal();

			showModalMini();
		});
	}

	function showModalMini() {
		if (document.querySelector('.modal')) {
			hideModal()
		}

		let div = document.createElement('div');
		div.classList.add('modal', 'modal__mini');

		div.innerHTML = `
	
	<div class="modal modal-mini">
		<div class="modal__body">
			<div class="modal-mini__title">Спасибо за вашу заявку!</div>
			<div class="modal-mini__text">Наш менеджер свяжется с вами в ближайшее время!
			</div>
		</div>
	</div>`;
		document.body.style.overflow = 'hidden';

		document.documentElement.append(div);
	}

	function hideModal() {
		document.querySelector('.modal').remove();
		document.body.style.overflow = '';
	}

	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape' && document.querySelector('.modal')) {
			hideModal();
		}
	});

	document.addEventListener('click', (event) => {
		if (event.target.classList.contains('modal') && document.querySelector('.modal')) {
			hideModal();
		}
	});

	const login = document.querySelector('.header__login');
	const registration = document.querySelector('.header__registration');

	login.addEventListener('click', (event) => {
		showModalLogin();
	});

	registration.addEventListener('click', (event) => {
		showModalRegistration();
	});

	function showModalLogin() {
		if (document.querySelector('.modal')) {
			hideModal()
		}

		let div = document.createElement('div');
		div.classList.add('modal', 'modal__login');

		document.body.style.overflow = 'hidden';

		div.innerHTML = `
		<div class="modal__body">
		<form class="order-form" action="#" method="POST">
			<h2 class="modal-login__title">Вход:</h2>
			<input class="order-form__input" type="text" name="name" required placeholder="Ваше имя">
			<input class="order-form__input" type="password" name="password" required placeholder="Ваш пароль">
			<button class="btn order-form__btn" data-send>Войти</button>
		</form>
	</div>`;

		document.documentElement.append(div);

		document.querySelector('form').addEventListener('submit', (e) => {
			e.preventDefault();
			hideModal();
		});
	}

	function showModalRegistration() {
		if (document.querySelector('.modal')) {
			hideModal()
		}

		let div = document.createElement('div');
		div.classList.add('modal', 'modal__registration');

		document.body.style.overflow = 'hidden';

		div.innerHTML = `
		<div class="modal__body">
		<form class="order-form" action="#" method="POST">
			<h2 class="modal-login__title">Регистрация:</h2>
			<input class="order-form__input" type="text" name="name" required placeholder="Ваше имя">
			<input class="order-form__input" type="email" name="email" required placeholder="Ваш E-mail">
			<input class="order-form__input" type="password" name="password" required placeholder="Ваш пароль">
			<button class="btn order-form__btn" data-send>Зарегистрироваться</button>
		</form>
	</div>`;

		document.documentElement.append(div);

		document.querySelector('form').addEventListener('submit', (e) => {
			e.preventDefault();
			hideModal();
		});
	}
});