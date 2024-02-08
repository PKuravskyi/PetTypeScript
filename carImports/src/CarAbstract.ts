export abstract class Car {
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
