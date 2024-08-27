function identity<T>(value: T): T {
  return value;
}

const num = identity(42);
const str = identity("hello");

class Queue<T> {
  private items: T[] = [];
  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }
}

const queueObj = new Queue<number>();
queueObj.enqueue(1);
queueObj.enqueue(2);
