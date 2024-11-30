export class localStorageUtil {
  static setItem<T>(key: string, value: T): void {
    const serializedItem = JSON.stringify(value);
    localStorage.setItem(key, serializedItem);
  }

  static getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item) as T;
    }
    return null;
  }

  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
