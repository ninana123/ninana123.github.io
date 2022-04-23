window.addEventListener('DOMContentLoaded', () => {

	const btns = document.querySelectorAll('.btn'),
		btnSend = btns.querySelector('.btn_send'),
		btnCancel = btns.querySelector('.btn_cancel'),

		menu = document.querySelector('.menu'),
		menuLink = menu.querySelectorAll('.menu_link'),
		hamburger = document.querySelector('.hamburger'),

		modal = document.querySelector('.modal'),
		modalTrigger = document.querySelectorAll('[data-form=modal]'),

		hideFormWrapper = hideForm(modal, 'modal_active'),
		toggleMenuOnMobileWrapper = toggleMenuOnMobile(hamburger, menu);


	showForm(modalTrigger, modal, 'modal_active');

	btnSend.addEventListener('click', (e) => {
		e.preventDefault();
		hideFormWrapper();
	});

	btnCancel.addEventListener('click', (e) => {
		e.preventDefault();
		hideFormWrapper();
	});

	modal.addEventListener('click', (e) => {
		if (e.target == modal) {
			hideFormWrapper();
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.classList.contains('modal_active')) {
			hideFormWrapper();
		}
	});

	hamburger.addEventListener('click', toggleMenuOnMobileWrapper);

	hideMenuOnMobile(menuLink, 'menu_active');

	function showForm(elems, modal, modalActive) {
		elems.forEach((item, i) => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				document.body.classList.add('hidden');

				modal.classList.add(modalActive);

				const div = document.createElement('div');
				div.classList.add('overlay');
				document.body.append(div);
			});
		});
	}

	function hideForm(modal, modalActive) {
		return function () {
			modal.classList.remove(modalActive);

			document.body.classList.remove('hidden');
			document.querySelector('.overlay').remove();
		};
	}

	function toggleMenuOnMobile(hamburger, menu) {
		return function () {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('menu_active');
		};
	}

	function hideMenuOnMobile(menuLink, menuActive) {
		menuLink.forEach(item => {
			item.addEventListener('click', (e) => {
				if (menu.classList.contains(menuActive)) {
					toggleMenuOnMobileWrapper();
				}
			});
		});
	}

});
