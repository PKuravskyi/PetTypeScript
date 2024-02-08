import { Tesla, Audi, Suzuki } from './CarClasses';

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
