/**
 * 
 */


class ClaudeList<T> implements CustomList<T>, Iterable<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    add(t: T): void {
        this.items.push(t);
    }

    get(i: number): T {
        if (i < 0 || i >= this.items.length) {
            throw new Error(`Index ${i} out of bounds for list of size ${this.items.length}`);
        }
        return this.items[i];
    }

    remove(i: number): T {
        if (i < 0 || i >= this.items.length) {
            throw new Error(`Index ${i} out of bounds for list of size ${this.items.length}`);
        }
        const removed = this.items[i];
        this.items.splice(i, 1);
        return removed;
    }

    replace(t: T, i: number): void {
        if (i < 0 || i >= this.items.length) {
            throw new Error(`Index ${i} out of bounds for list of size ${this.items.length}`);
        }
        this.items[i] = t;
    }

    clear(): void {
        this.items = [];
    }

    length(): number {
        return this.items.length;
    }

    [Symbol.iterator](): Iterator<T> {
        let index = 0;
        const items = this.items;

        return {
            next(): IteratorResult<T> {
                if (index < items.length) {
                    return {
                        value: items[index++],
                        done: false
                    };
                } else {
                    return {
                        value: undefined as any,
                        done: true
                    };
                }
            }
        };
    }
}



// Example usage
const list = new ClaudeList<string>();
list.add("Hello");
list.add("World");
list.add("TypeScript");

console.log(list.length()); // 3
console.log(list.get(1)); // "World"

for (const item of list) {
    console.log(item);
}

list.replace("Claude", 1);
console.log(list.get(1)); // "Claude"

list.remove(0);
console.log(list.length()); // 2