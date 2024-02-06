abstract class Car {
	constructor(
		public model: string,
		public year: number,
		public horsePower: number,
		public engine: string,
		protected _totalIncome: string,
		protected _owner?: string
	) {}

	get totalIncome() {
		return this._totalIncome;
	}

	protected set totalIncome(totalIncome: string) {
		this._totalIncome = totalIncome;
	}

	get owner() {
		return this._owner;
	}

	protected set owner(owner: string) {
		this._owner = owner;
	}

	printModel(): void {
		console.log(`Model: ${this.model}.`);
	}

	printYearOfManufacture(): void {
		console.log(`Produced in ${this.year} year.`);
	}

	printHorsePower(): void {
		console.log(`Horsepower: ${this.horsePower}.`);
	}

	printEngine(): void {
		console.log(`Engine: ${this.engine}.`);
	}

	printTotalIncome(): void {
		console.log(`Total Income: ${this._totalIncome}`);
	}

	printOwner(): void {
		console.log(`Owner: ${this._owner}`);
	}

	printOverallInfo() {
		console.log('------------------------------\n');
		this.printModel();
		this.printYearOfManufacture();
		this.printHorsePower();
		this.printEngine();
		this.printTotalIncome();
		if (this.owner) {
			this.printOwner();
		}
	}
}

class Tesla extends Car {
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

class Audi extends Car {
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

class Suzuki extends Car {
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

const teslaModelS: Tesla = new Tesla(
	'Tesla Model S',
	2015,
	670,
	'3-phase AC induction motor',
	'$112233',
	'Elon Musk'
);
teslaModelS.printOverallInfo();
teslaModelS.totalIncome = '$111000';
teslaModelS.printOverallInfo();

const audiA6: Audi = new Audi(
	'Audi A6',
	2018,
	450,
	'V5',
	'€99887766',
	'Volkswagen Group'
);

audiA6.printOverallInfo();

const suzukiVitara: Suzuki = new Suzuki(
	'Suzuki Vitara',
	2023,
	150,
	'Suzuki H',
	'€99999999'
);

suzukiVitara.printOverallInfo();
