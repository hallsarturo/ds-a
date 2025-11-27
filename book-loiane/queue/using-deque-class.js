import { Deque } from './deque-class.js';

class BrowserHistory {
    #history = new Deque();
    #currentPage = null;
    visit(url) {
        this.#history.addFront(url);
        this.#currentPage = url;
    }
    goBack() {
        if (this.#history.size() > 1) {
            this.#history.removeFront();
            this.#currentPage = this.#history.peekFront();
        }
    }
}
