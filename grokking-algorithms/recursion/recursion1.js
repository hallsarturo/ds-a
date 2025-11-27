function lookForKey(box) {
    for (const item in box) {
        if (item.isABox()) {
            lookForKey(item);
        } else if (item.isAKey()) {
            console.log('Found the key');
        }
    }
}

