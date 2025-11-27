export class Dictionary {
    #items = {};
    #size = 0;

    #elementToString(data) {
        if (typeof data === 'object' && data !== null) {
            return JSON.stringify(data);
        } else {
            return data.toString();
        }
    }

    hasKey(key) {
        return this.#items[this.#elementToString(key)] != undefined;
    }

    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.#elementToString(key);
            this.#items[tableKey] = value;
            this.#size++;
            return true;
        }
        return false;
    }

    delete(key) {
        if (this.hasKey(key)) {
           delete this.#items[this.#elementToString(key)]
            this.#size--;
            return true;
        }
        return false;
    }

    clear() {
        this.#items = {};
        this.#size = 0;
    }

    get size() {
        return this.#size;
    }

    isEmpty() {
        return this.#size === 0;
    }

    get(key) {
        return this.#items[this.#elementToString(key)];
    }

    values() {
        return Object.values(this.#items);
    }

    keys() {
        return Object.keys(this.#items);
    }

    forEach(callbackFn) {
        for (const key in this.#items) {
            if (this.#items.hasOwnProperty(key)) {
                callbackFn(this.#items[key], key);
            }
        }
    }
}
