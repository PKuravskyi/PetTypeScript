var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = (function () {
    function Car(model, year, horsePower, engine, _totalIncome, _owner) {
        this.model = model;
        this.year = year;
        this.horsePower = horsePower;
        this.engine = engine;
        this._totalIncome = _totalIncome;
        this._owner = _owner;
    }
    Object.defineProperty(Car.prototype, "totalIncome", {
        get: function () {
            return this._totalIncome;
        },
        set: function (totalIncome) {
            this._totalIncome = totalIncome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (owner) {
            this._owner = owner;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.printModel = function () {
        console.log("Model: ".concat(this.model, "."));
    };
    Car.prototype.printYearOfManufacture = function () {
        console.log("Produced in ".concat(this.year, " year."));
    };
    Car.prototype.printHorsePower = function () {
        console.log("Horsepower: ".concat(this.horsePower, "."));
    };
    Car.prototype.printEngine = function () {
        console.log("Engine: ".concat(this.engine, "."));
    };
    Car.prototype.printTotalIncome = function () {
        console.log("Total Income: ".concat(this._totalIncome));
    };
    Car.prototype.printOwner = function () {
        console.log("Owner: ".concat(this._owner));
    };
    Car.prototype.printOverallInfo = function () {
        console.log('------------------------------\n');
        this.printModel();
        this.printYearOfManufacture();
        this.printHorsePower();
        this.printEngine();
        this.printTotalIncome();
        if (this.owner) {
            this.printOwner();
        }
    };
    return Car;
}());
var Tesla = (function (_super) {
    __extends(Tesla, _super);
    function Tesla(model, year, horsePower, engine, totalIncome, owner) {
        var _this = _super.call(this, model, year, horsePower, engine, totalIncome, owner) || this;
        _this.isAnythingChanged = false;
        return _this;
    }
    Tesla.prototype.printCarDataWasEditedMessage = function () {
        if (this.isAnythingChanged) {
            console.log("Some data about ".concat(this.model, " was modified."));
        }
    };
    Object.defineProperty(Tesla.prototype, "totalIncome", {
        set: function (totalIncome) {
            this._totalIncome = totalIncome;
            this.isAnythingChanged = true;
            this.printCarDataWasEditedMessage();
        },
        enumerable: false,
        configurable: true
    });
    return Tesla;
}(Car));
var Audi = (function (_super) {
    __extends(Audi, _super);
    function Audi(model, year, horsePower, engine, totalIncome, owner) {
        var _this = _super.call(this, model, year, horsePower, engine, totalIncome, owner) || this;
        _this.isAnythingChanged = false;
        return _this;
    }
    Audi.prototype.printCarDataWasEditedMessage = function () {
        if (this.isAnythingChanged) {
            console.log("Some data about ".concat(this.model, " was modified."));
        }
    };
    Object.defineProperty(Audi.prototype, "owner", {
        set: function (owner) {
            this._owner = owner;
            this.isAnythingChanged = true;
            this.printCarDataWasEditedMessage();
        },
        enumerable: false,
        configurable: true
    });
    return Audi;
}(Car));
var Suzuki = (function (_super) {
    __extends(Suzuki, _super);
    function Suzuki(model, year, horsePower, engine, totalIncome) {
        return _super.call(this, model, year, horsePower, engine, totalIncome) || this;
    }
    return Suzuki;
}(Car));
var teslaModelS = new Tesla('Tesla Model S', 2015, 670, '3-phase AC induction motor', '$112233', 'Elon Musk');
teslaModelS.printOverallInfo();
teslaModelS.totalIncome = '$111000';
teslaModelS.printOverallInfo();
var audiA6 = new Audi('Audi A6', 2018, 450, 'V5', '€99887766', 'Volkswagen Group');
audiA6.printOverallInfo();
var suzukiVitara = new Suzuki('Suzuki Vitara', 2023, 150, 'Suzuki H', '€99999999');
suzukiVitara.printOverallInfo();
//# sourceMappingURL=Main.js.map