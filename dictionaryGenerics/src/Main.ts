class KeyValueDesc<TKey, TValue, TDesc extends string> {
	private _key: TKey;

	public get key(): TKey {
		return this._key;
	}

	public set key(value: TKey) {
		this._key = value;
	}

	private _value: TValue;

	public get value(): TValue {
		return this._value;
	}

	public set value(value: TValue) {
		this._value = value;
	}

	private _desc: TDesc;

	public get desc(): TDesc {
		return this._desc;
	}

	public set desc(value: TDesc) {
		this._desc = value;
	}
}

class Dictionary<TKey, TValue, TDesc extends string> {
	private data: KeyValueDesc<TKey, TValue, TDesc>[] = [];

	add(key: TKey, value: TValue, desc: TDesc) {
		const entry = new KeyValueDesc<TKey, TValue, TDesc>();
		entry.key = key;
		entry.value = value;
		entry.desc = desc;
		this.data.push(entry);
	}

	getValue(key: TKey): TValue | null {
		const entry = this.data.find(item => item.key === key);

		return entry ? entry.value : null;
	}

	getDescription(key: TKey): TDesc | null {
		const entry = this.data.find(item => item.key === key);

		return entry ? entry.desc : null;
	}

	getOverallInfo(key: TKey): string | null {
		const entry = this.data.find(item => item.key === key);

		return entry ? `${entry.value}: ${entry.desc}` : null;
	}
}

const dictionary = new Dictionary<number, string | number, string>();
dictionary.add(
	1,
	'Pizza',
	"A classic Italian dish made with dough, tomato sauce, cheese, and toppings like meats and vegetables. It's baked in an oven and enjoyed hot."
);
dictionary.add(
	2,
	666,
	'A number often associated with evil and the Antichrist, mentioned in the Book of Revelation in the Bible.'
);

console.log(dictionary);
console.log(dictionary.getOverallInfo(1));
console.log(dictionary.getOverallInfo(2));
