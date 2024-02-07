class StringGenerator {
	private strings: string[];

	constructor(...strings: string[]) {
		this.strings = strings;
	}

	*makeSentance() {
		for (let i = 0; i < this.strings.length; i++) {
			if (i < this.strings.length - 1) {
				yield this.strings[i] + ' ';
			} else {
				yield this.strings[i];
			}
		}
	}
}

const stringGen = new StringGenerator('I', 'love', 'potato', 'chips', '!');

let result = '';
for (const str of stringGen.makeSentance()) {
	result += str;
}

console.log(result);
