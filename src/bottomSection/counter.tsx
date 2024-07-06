export class Counter {
  private static count: number = 0;

  static plus(): void {
    Counter.count++;
  }
  static minus(): void {
    Counter.count--;
  }

  static getCount(): number {
    return Counter.count;
  }
}
