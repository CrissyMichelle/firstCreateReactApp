/** chooses a random item */
function choice(items) {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
};

/** returns a copy of array without the first appearance of item
 * 
 * If not found, returns undefined
 */
function remove(item, items) {
    for (let i =0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)];
        }
    }
}

export { choice, remove }