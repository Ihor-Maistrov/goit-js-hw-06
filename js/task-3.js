class StringBuilder {
    #value;

    constructor(params) {
        this.#value = [params];
    }

    getValue() {
        return this.#value.join("");
    }

    padEnd(str) {
        this.#value.push(str);
    }

    padStart(str) {
        this.#value.splice(0, 0, str);
    }

    padBoth(str) {
         this.#value.push(str);
         this.#value.splice(0, 0, str);
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
