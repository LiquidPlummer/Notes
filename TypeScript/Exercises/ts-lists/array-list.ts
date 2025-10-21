/**
 * Array-based implementation of CustomList.
 * Uses a TypeScript array internally to store elements.
 * Elements are stored contiguously in memory with O(1) access time by index.
 */
class CustomArrayList<T> implements CustomList<T>{
    length(): number {
        throw new Error("Method not implemented.");
    }
    add(t: T): void {
        throw new Error("Method not implemented.");
    }
    get(i: number): T {
        throw new Error("Method not implemented.");
    }
    remove(i: number): T {
        throw new Error("Method not implemented.");
    }
    replace(t: T, i: number): void {
        throw new Error("Method not implemented.");
    }
    clear(): void {
        throw new Error("Method not implemented.");
    }

}