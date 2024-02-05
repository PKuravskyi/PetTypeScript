interface Animal {
	name: string;
	typeOfMovement: string;
	ageLimit: number;
	eat(food: string, isStillHungry?: boolean): void;
}

class Cat implements Animal {
	constructor(
		public name: string,
		public typeOfMovement: string,
		public ageLimit: number
	) {}

	eat(food: string, isStillHungry?: boolean): void {
		let message = `${this.name} ate ${food}.`;
		if (isStillHungry) {
			message += ` ${this.name} is still hungry...`;
		}

		return console.log(message);
	}

	howDoTheyMove() {
		return console.log(`They ${this.typeOfMovement}.`);
	}

	howLongDoTheyLive() {
		return console.log(`They usually live ${this.ageLimit} years.`);
	}
}

class Bird implements Animal {
	constructor(
		public name: string,
		public typeOfMovement: string,
		public ageLimit: number
	) {}

	eat(food: string, isStillHungry?: boolean): void {
		let message = `${this.name} ate ${food}.`;
		if (isStillHungry) {
			message += ` ${this.name} is still hungry...`;
		}

		return console.log(message);
	}

	howDoTheyMove() {
		return console.log(`They ${this.typeOfMovement}.`);
	}

	howLongDoTheyLive() {
		return console.log(`They usually live ${this.ageLimit} years.`);
	}
}

class Fish implements Animal {
	constructor(
		public name: string,
		public typeOfMovement: string,
		public ageLimit: number
	) {}

	eat(food: string, isStillHungry?: boolean): void {
		let message = `${this.name} ate ${food}.`;
		if (isStillHungry) {
			message += ` ${this.name} is still hungry...`;
		}

		return console.log(message);
	}

	howDoTheyMove() {
		return console.log(`They ${this.typeOfMovement}.`);
	}

	howLongDoTheyLive() {
		return console.log(`They usually live ${this.ageLimit} years.`);
	}
}

const cat: Animal = new Cat('Whisker', 'walk', 15);
cat.eat('fish', true);

const bird: Animal = new Bird('Crow', 'fly', 8);
bird.eat('worm');

const fish: Animal = new Fish('Catfish', 'swim', 25);
fish.eat('plankton', true);
