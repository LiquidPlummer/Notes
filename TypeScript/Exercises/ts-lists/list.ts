/**
 * Interface defining a generic list data structure.
 * Implement this using either an array-based approach (ArrayList) or a node-based 
 * approach (LinkedList). Both implementations should support the same operations 
 * but will have different performance characteristics.
 */

interface CustomList<T>{
    
    /**
     * Adds an element to the end of the list
     * @param t - The element to add
     */
    add(t: T): void;
    
    /**
     * Returns the element at the specified index
     * @param i - The index of the element to retrieve (0-based)
     * @returns The element at index i
     * @throws Error if index is out of bounds
     */
    get(i: number): T;
    
    /**
     * Removes and returns the element at the specified index
     * @param i - The index of the element to remove (0-based)
     * @returns The removed element
     * @throws Error if index is out of bounds
     */
    remove(i: number): T;
    
    /**
     * Replaces the element at the specified index with a new element
     * @param t - The new element to insert
     * @param i - The index where the element should be replaced (0-based)
     * @throws Error if index is out of bounds
     */
    replace(t: T, i: number): void;
    
    /**
     * Removes all elements from the list
     */
    clear(): void;

    
    /**
     * Returns the number of elements in the list
     * @returns The size of the list
     */
    length(): number;

}