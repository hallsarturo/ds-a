export default class Stack {
    #items = [];

    push(item) {
        this.#items.push(item);
    }

    pop() {
        return this.#items.pop();
    }
}
