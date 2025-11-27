const newTree = () => null;
const newNode = (key, left = null, right = null) => ({
    key,
    left,
    right,
});
const isEmpty = (tree) => tree === null;

const find = (tree, keyToFind) => {
    if (isEmpty(tree)) {
        return false;
    } else if (keyToFind === tree.key) {
        return true;
    } else {
        return find(keyToFind < tree.key ? tree.left : tree.right, keyToFind);
    }
};

const add = (tree, keyToAdd) => {
    if (isEmpty(tree)) {
        return newNode(keyToAdd);
    } else {
        const side = keyToAdd <= tree.key ? 'left' : 'right';
        tree[side] = add(tree[side], keyToAdd);
        return tree;
    }
};

const remove = (tree, keyToRemove) => {
    if (isEmpty(tree)) {
    } else if (keyToRemove < tree.key) {
        tree.left = remove(tree.left, keyToRemove);
    } else if (keyToRemove > tree.key) {
        tree.right = remove(tree.right, keyToRemove);
    } else if (isEmpty(tree.left) && isEmpty(tree.right)) {
        tree = null;
    } else if (isEmpty(tree.left)) {
        tree = tree.right;
    } else if (isEmpty(tree.right)) {
        tree = tree.left;
    } else {
        tree.key = minKey(tree.right);
        tree.right = remove(tree.right, tree.key);
    }

    return tree;
};

const _minMax = (tree, side, defaultValue) => {
    if (isEmpty(tree)) {
        return defaultValue;
    } else if (isEmpty(tree[side])) {
        return tree.key;
    } else {
        return _minMax(tree[side], side, defaultValue);
    }
};

const minKey = (tree) => {
    _minMax(tree, 'left', Infinity);
};
const maxKey = (tree) => _minMax(tree, 'right', -Infinity);

const preOrder = (tree, visit = (x) => console.log(x)) => {
    if (!isEmpty(tree)) {
        visit(tree.key);
        preOrder(tree.left, visit);
        preOrder(tree.right, visit);
    }
};

const inOrder = (tree, visit = (x) => console.log(x)) => {
    if (!isEmpty(tree)) {
        inOrder(tree.left, visit);
        visit(tree.key);
        inOrder(tree.right, visit);
    }
};

const postOrder = (tree, visit = (x) => console.log(x)) => {
    if (!isEmpty(tree)) {
        postOrder(tree.left, visit);
        postOrder(tree.right, visit);
        visit(tree.key);
    }
};

const print = (tree, s = '') => {
    if (!isEmpty(tree)) {
        console.log(s, tree.key);
        print(tree.left, `${s} L:`);
        print(tree.right, `${s} R:`);
    }
};

let tree = newTree();
const values = [5, 3, 7, 2, 4, 6, 8];

for (const value of values) {
    tree = add(tree, value);
}

print(tree);
