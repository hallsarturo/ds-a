export class MySet {
    #items = {};
    #size = 0;

    has(value) {
        return this.#items.hasOwnProperty(value);
    }

    add(value) {
        if (!this.has(value)) {
            this.#items[value] = true;
            this.#size++;
            return true;
        }
        return false;
    }

    delete(value) {
        if (this.has(value)) {
            delete this.#items[value];
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

    values() {
        return Object.keys(this.#items);
    }

    union(otherSet) {
        const unionSet = new MySet();
        this.values().forEach((value) => unionSet.add(value));
        otherSet.values().forEach((value) => unionSet.add(value));
        return unionSet;
    }

    addAll(values) {
        values.forEach((value) => this.add(value));
    }

    intersection(otherSet) {
        const intersectionSet = new MySet();
        const [smallerSet, largerSet] =
            this.size <= otherSet.size ? [this, otherSet] : [otherSet, this];
        smallerSet.values().forEach((value) => {
            if (largerSet.has(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }

    difference(otherSet) {
        const differenceSet = new MySet();
        this.values().forEach((value) => {
            if (!otherSet.has(value)) {
                differenceSet.add(value);
            }
        });
        return differenceSet;
    }

    isSubsetOf(otherSet) {
        if (this.size > otherSet.size) {
            return false;
        }
        return this.values().every((value) => {
            otherSet.has(value);
        });
    }
}
