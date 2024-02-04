var WaffleType;
(function (WaffleType) {
    WaffleType[WaffleType["Small"] = 10] = "Small";
    WaffleType[WaffleType["Big"] = 25] = "Big";
})(WaffleType || (WaffleType = {}));
var ToppingType;
(function (ToppingType) {
    ToppingType[ToppingType["Marshmallow"] = 5] = "Marshmallow";
    ToppingType[ToppingType["Chocolate"] = 5] = "Chocolate";
    ToppingType[ToppingType["Caramel"] = 6] = "Caramel";
    ToppingType[ToppingType["Berries"] = 10] = "Berries";
})(ToppingType || (ToppingType = {}));
var iceCream = {
    waffle: { type: '', price: 0 },
    toppings: [],
    totalPrice: 0,
};
function chooseWaffle() {
    var userInput;
    while (true) {
        userInput = prompt('What ice-cream cone do you want?\n' +
            "\n1. Small (".concat(WaffleType.Small, " UAH)") +
            "\n2. Big (".concat(WaffleType.Big, " UAH)"));
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
    var userInput;
    while (true) {
        userInput = prompt('Choose a toping:\n' +
            "\n1. Chocolate (".concat(ToppingType.Chocolate, " UAH)") +
            "\n2. Caramel (".concat(ToppingType.Caramel, " UAH)") +
            "\n3. Berries (".concat(ToppingType.Berries, " UAH)"));
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
    var addMoreTopings = true;
    do {
        confirm('Do you want to add another toping?')
            ? chooseTopping()
                ? null
                : (addMoreTopings = false)
            : (addMoreTopings = false);
    } while (addMoreTopings);
}
function addOptionalToppings() {
    confirm("Add marshmallow? (".concat(ToppingType.Marshmallow, " UAH) "))
        ? iceCream.toppings.push({
            type: 'Marshmallow',
            price: ToppingType.Marshmallow,
        })
        : null;
}
function calculateTotalPrice() {
    iceCream.totalPrice += iceCream.waffle.price;
    iceCream.toppings.forEach(function (topping) {
        iceCream.totalPrice += topping.price;
    });
}
function designPage() {
    var orderTemplateEl = document.getElementById('order-template');
    var orderSectionEl = document.getElementById('order-section');
    var orderElements = document.importNode(orderTemplateEl.content, true);
    var orderWaffleEl = orderElements.querySelector('#order-waffle');
    var orderToppingsEl = orderElements.querySelector('#order-toppings');
    var orderPriceEl = orderElements.querySelector('#order-price');
    orderWaffleEl.textContent = "".concat(iceCream.waffle.type, " ice-cream cone");
    orderToppingsEl.textContent = "Topings: ".concat(iceCream.toppings
        .map(function (topping) { return topping.type; })
        .join(', '));
    orderPriceEl.textContent = iceCream.totalPrice.toString();
    orderSectionEl.appendChild(orderElements);
}
function buyIceCream() {
    if (!chooseWaffle()) {
        return;
    }
    if (!chooseTopping()) {
        return;
    }
    else {
        addMoreTopings();
    }
    addOptionalToppings();
    calculateTotalPrice();
    designPage();
}
buyIceCream();
//# sourceMappingURL=Main.js.map