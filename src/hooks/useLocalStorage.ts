import { useState, useEffect } from "react";
import { localStorageUtil } from "../utils/LocalStorage";
import { TryParseJson } from "../utils/TryParseJson";

export function useLocalStorage<T>({
  key,
  initialValue,
  parser,
  hydrationOnly = false,
}: {
  key: string;
  initialValue?: T;
  parser?: (data: unknown) => T;
  hydrationOnly?: boolean;
}) {
  // Get the initial value from Local storage or use the initial value provided
  const [storedValue, setStoredValue] = useState<T>(getInitValue(key, initialValue, parser, hydrationOnly));

  // This effect updates Local storage when the stored value changes

  useEffect(() => {
    if (storedValue === undefined) {
      localStorageUtil.removeItem(key);
    } else {
      localStorageUtil.setItem<T>(key, storedValue);
    }
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        if (event.newValue == JSON.stringify(storedValue)) return;

        setStoredValue(TryParseJson(event.newValue as string) as T);
        if (key == "user") {
          window.location.reload();
        }
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, storedValue]);

  // Function to clear the stored value
  const clearStoredValue = () => {
    localStorageUtil.removeItem(key);
  };

  // Return the stored value, a function to update it, and a function to clear it
  return [storedValue, setStoredValue, clearStoredValue] as const;
}

const getInitValue =
  <T>(key: string, initialValue?: T, parser?: (data: unknown) => T, hydrationOnly: boolean = false) =>
  () => {
    const item = localStorageUtil.getItem<T>(key);
    if (!hydrationOnly) {
      try {
        return item !== null ? (parser ? parser(item) : item) : (initialValue as T);
      } catch {
        return item !== null ? item : (initialValue as T);
      }
    } else {
      return item !== null ? (parser ? parser(item) : item) : (initialValue as T);
    }
  };
