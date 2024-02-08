import { Car } from './CarAbstract';

export class Tesla extends Car {
	isAnythingChanged = false;

	constructor(
		model: string,
		year: number,
		horsePower: number,
		engine: string,
		totalIncome: string,
		owner: string
	) {
		super(model, year, horsePower, engine, totalIncome, owner);
	}

	printCarDataWasEditedMessage() {
		if (this.isAnythingChanged) {
			console.log(`Some data about ${this.model} was modified.`);
		}
	}

	set totalIncome(totalIncome: string) {
		this._totalIncome = totalIncome;
		this.isAnythingChanged = true;
		this.printCarDataWasEditedMessage();
	}
}

export class Audi extends Car {
	isAnythingChanged = false;

	constructor(
		model: string,
		year: number,
		horsePower: number,
		engine: string,
		totalIncome: string,
		owner: string
	) {
		super(model, year, horsePower, engine, totalIncome, owner);
	}

	printCarDataWasEditedMessage() {
		if (this.isAnythingChanged) {
			console.log(`Some data about ${this.model} was modified.`);
		}
	}

	set owner(owner: string) {
		this._owner = owner;
		this.isAnythingChanged = true;
		this.printCarDataWasEditedMessage();
	}
}

export class Suzuki extends Car {
	constructor(
		model: string,
		year: number,
		horsePower: number,
		engine: string,
		totalIncome: string
	) {
		super(model, year, horsePower, engine, totalIncome);
	}
}
