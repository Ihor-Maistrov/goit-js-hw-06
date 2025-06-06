class Storage {
    #items = [];
    
    constructor(params) {
        this.#items = params;
    }
    
    getItems() {
        return this.#items;
    }
    
    addItem(newItem) {
        this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
        if (this.#items.includes(itemToRemove)) {
            const i = this.#items.indexOf(itemToRemove);
            this.#items.splice(i, 1);
        }
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
