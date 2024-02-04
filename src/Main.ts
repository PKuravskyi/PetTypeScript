enum WaffleType {
	Small = 10,
	Big = 25,
}

enum ToppingType {
	Marshmallow = 5,
	Chocolate = 5,
	Caramel = 6,
	Berries = 10,
}

const iceCream = {
	waffle: { type: '', price: 0 },
	toppings: [] as { type: string; price: number }[],
	totalPrice: 0,
};

function chooseWaffle() {
	let userInput: string;

	while (true) {
		userInput = prompt(
			'What ice-cream cone do you want?\n' +
				`\n1. Small (${WaffleType.Small} UAH)` +
				`\n2. Big (${WaffleType.Big} UAH)`
		);

		switch (userInput) {
			case '1' || 'Small' || 'small':
				iceCream.waffle = { type: 'Small', price: WaffleType.Small };
				return true;
			case '2' || 'Big' || 'big':
				iceCream.waffle = { type: 'Big', price: WaffleType.Big };
				return true;
			case null:
				alert('Ok, maybe next time :)');
				return false;
			default:
				alert('Please choose your desired ice-cream cone!');
				continue;
		}
	}
}

function chooseTopping() {
	let userInput: string;

	while (true) {
		userInput = prompt(
			'Choose a toping:\n' +
				`\n1. Chocolate (${ToppingType.Chocolate} UAH)` +
				`\n2. Caramel (${ToppingType.Caramel} UAH)` +
				`\n3. Berries (${ToppingType.Berries} UAH)`
		);

		switch (userInput) {
			case '1' || 'Chocolate' || 'chocolate':
				iceCream.toppings.push({
					type: 'Chocolate',
					price: ToppingType.Chocolate,
				});
				return true;
			case '2' || 'Caramel' || 'caramel':
				iceCream.toppings.push({
					type: 'Caramel',
					price: ToppingType.Caramel,
				});
				return true;
			case '3' || 'Berries' || 'berries':
				iceCream.toppings.push({
					type: 'Berries',
					price: ToppingType.Berries,
				});
				return true;
			case null:
				alert('Ok, maybe next time :)');
				return false;
			default:
				alert('Please choose at least one toping!');
				continue;
		}
	}
}

function addMoreTopings() {
	let addMoreTopings: Boolean = true;
	do {
		confirm('Do you want to add another toping?')
			? chooseTopping()
				? null
				: (addMoreTopings = false)
			: (addMoreTopings = false);
	} while (addMoreTopings);
}

function addOptionalToppings() {
	confirm(`Add marshmallow? (${ToppingType.Marshmallow} UAH) `)
		? iceCream.toppings.push({
				type: 'Marshmallow',
				price: ToppingType.Marshmallow,
		  })
		: null;
}

function calculateTotalPrice() {
	iceCream.totalPrice += iceCream.waffle.price;
	iceCream.toppings.forEach(topping => {
		iceCream.totalPrice += topping.price;
	});
}

function designPage() {
	const orderTemplateEl = document.getElementById(
		'order-template'
	)! as HTMLTemplateElement;
	const orderSectionEl = document.getElementById('order-section');

	const orderElements = document.importNode(orderTemplateEl.content, true);
	const orderWaffleEl = orderElements.querySelector('#order-waffle');
	const orderToppingsEl = orderElements.querySelector('#order-toppings');
	const orderPriceEl = orderElements.querySelector('#order-price');

	orderWaffleEl.textContent = `${iceCream.waffle.type} ice-cream cone`;
	orderToppingsEl.textContent = `Topings: ${iceCream.toppings
		.map(topping => topping.type)
		.join(', ')}`;
	orderPriceEl.textContent = iceCream.totalPrice.toString();

	orderSectionEl.appendChild(orderElements);
}

function buyIceCream() {
	if (!chooseWaffle()) {
		return;
	}

	if (!chooseTopping()) {
		return;
	} else {
		addMoreTopings();
	}

	addOptionalToppings();
	calculateTotalPrice();
	designPage();
}

buyIceCream();
