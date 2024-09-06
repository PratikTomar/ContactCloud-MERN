import { useEffect, useState } from "react";

const useDebounce = (val, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(val);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceValue(val);
    }, delay);

    return () => clearTimeout(timerId);
  }, [val, delay]);

  return debounceValue;
};

export default useDebounce;
