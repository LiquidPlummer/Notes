/**
 * Linked list implementation of CustomList.
 * Uses nodes that contain data and a reference to the next node.
 * Elements are not stored contiguously - each node points to the next.
 * O(n) access time by index but O(1) insertion/deletion at known positions.
 */
class CustomLinkedList<T> implements CustomList<T>{
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
    length(): number {
        throw new Error("Method not implemented.");
    }

}