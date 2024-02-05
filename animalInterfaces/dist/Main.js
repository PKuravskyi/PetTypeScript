var Cat = (function () {
    function Cat(name, typeOfMovement, ageLimit) {
        this.name = name;
        this.typeOfMovement = typeOfMovement;
        this.ageLimit = ageLimit;
    }
    Cat.prototype.eat = function (food, isStillHungry) {
        var message = "".concat(this.name, " ate ").concat(food, ".");
        if (isStillHungry) {
            message += " ".concat(this.name, " is still hungry...");
        }
        return console.log(message);
    };
    Cat.prototype.howDoTheyMove = function () {
        return console.log("They ".concat(this.typeOfMovement, "."));
    };
    Cat.prototype.howLongDoTheyLive = function () {
        return console.log("They usually live ".concat(this.ageLimit, " years."));
    };
    return Cat;
}());
var Bird = (function () {
    function Bird(name, typeOfMovement, ageLimit) {
        this.name = name;
        this.typeOfMovement = typeOfMovement;
        this.ageLimit = ageLimit;
    }
    Bird.prototype.eat = function (food, isStillHungry) {
        var message = "".concat(this.name, " ate ").concat(food, ".");
        if (isStillHungry) {
            message += " ".concat(this.name, " is still hungry...");
        }
        return console.log(message);
    };
    Bird.prototype.howDoTheyMove = function () {
        return console.log("They ".concat(this.typeOfMovement, "."));
    };
    Bird.prototype.howLongDoTheyLive = function () {
        return console.log("They usually live ".concat(this.ageLimit, " years."));
    };
    return Bird;
}());
var Fish = (function () {
    function Fish(name, typeOfMovement, ageLimit) {
        this.name = name;
        this.typeOfMovement = typeOfMovement;
        this.ageLimit = ageLimit;
    }
    Fish.prototype.eat = function (food, isStillHungry) {
        var message = "".concat(this.name, " ate ").concat(food, ".");
        if (isStillHungry) {
            message += " ".concat(this.name, " is still hungry...");
        }
        return console.log(message);
    };
    Fish.prototype.howDoTheyMove = function () {
        return console.log("They ".concat(this.typeOfMovement, "."));
    };
    Fish.prototype.howLongDoTheyLive = function () {
        return console.log("They usually live ".concat(this.ageLimit, " years."));
    };
    return Fish;
}());
var cat = new Cat('Whisker', 'walk', 15);
cat.eat('fish', true);
var bird = new Bird('Crow', 'fly', 8);
bird.eat('worm');
var fish = new Fish('Catfish', 'swim', 25);
fish.eat('plankton', true);
//# sourceMappingURL=Main.js.map