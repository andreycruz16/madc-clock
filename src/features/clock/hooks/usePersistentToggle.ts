import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

type SetToggleValue = Dispatch<SetStateAction<boolean>>;

export function usePersistentToggle(
  storageKey: string,
  initialValue: boolean,
): [boolean, SetToggleValue] {
  const [value, setValue] = useState(() => {
    const savedValue = window.localStorage.getItem(storageKey);

    if (savedValue === null) {
      return initialValue;
    }

    return savedValue === "true";
  });

  useEffect(() => {
    window.localStorage.setItem(storageKey, String(value));
  }, [storageKey, value]);

  return [value, setValue];
}
