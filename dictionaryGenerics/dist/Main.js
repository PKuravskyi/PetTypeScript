var KeyValueDesc = (function () {
    function KeyValueDesc() {
    }
    Object.defineProperty(KeyValueDesc.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyValueDesc.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyValueDesc.prototype, "desc", {
        get: function () {
            return this._desc;
        },
        set: function (value) {
            this._desc = value;
        },
        enumerable: false,
        configurable: true
    });
    return KeyValueDesc;
}());
var Dictionary = (function () {
    function Dictionary() {
        this.data = [];
    }
    Dictionary.prototype.add = function (key, value, desc) {
        var entry = new KeyValueDesc();
        entry.key = key;
        entry.value = value;
        entry.desc = desc;
        this.data.push(entry);
    };
    Dictionary.prototype.getValue = function (key) {
        var entry = this.data.find(function (item) { return item.key === key; });
        return entry ? entry.value : null;
    };
    Dictionary.prototype.getDescription = function (key) {
        var entry = this.data.find(function (item) { return item.key === key; });
        return entry ? entry.desc : null;
    };
    Dictionary.prototype.getOverallInfo = function (key) {
        var entry = this.data.find(function (item) { return item.key === key; });
        return entry ? "".concat(entry.value, ": ").concat(entry.desc) : null;
    };
    return Dictionary;
}());
var dictionary = new Dictionary();
dictionary.add(1, 'Pizza', "A classic Italian dish made with dough, tomato sauce, cheese, and toppings like meats and vegetables. It's baked in an oven and enjoyed hot.");
dictionary.add(2, 666, 'A number often associated with evil and the Antichrist, mentioned in the Book of Revelation in the Bible.');
console.log(dictionary);
console.log(dictionary.getOverallInfo(1));
console.log(dictionary.getOverallInfo(2));
//# sourceMappingURL=Main.js.map