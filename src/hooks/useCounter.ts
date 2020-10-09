import { useState, useCallback } from 'react';

const WAIT_TIME = 100;

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount(x => x + 1), []);
  const incrementAsync = useCallback(() => setTimeout(increment, WAIT_TIME), [increment]);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);

  return { count, increment, incrementAsync, reset };
}

export default useCounter;
