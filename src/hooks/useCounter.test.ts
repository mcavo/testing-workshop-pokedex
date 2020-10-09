import { act, renderHook } from "@testing-library/react-hooks"
import useCounter from "./useCounter"

const DEFAULT_INITIAL_VALUE = 0;
const INITIAL_VALUE = 10;

describe('useCounter', () => {
  test('default initialize', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useCounter());
    expect(result.current.count).toBe(DEFAULT_INITIAL_VALUE);

    act(() => result.current.increment());
    expect(result.current.count).toBe(DEFAULT_INITIAL_VALUE + 1);

    result.current.incrementAsync();
    await waitForNextUpdate();
    expect(result.current.count).toBe(DEFAULT_INITIAL_VALUE + 2);

    act(() => result.current.reset());
    expect(result.current.count).toBe(DEFAULT_INITIAL_VALUE);
  });

  test('initial value', ()  => {
    const { result, waitForNextUpdate } = renderHook(
      (initialValue: number) => useCounter(initialValue),
      {
        initialProps: INITIAL_VALUE
      }
    );
    expect(result.current.count).toBe(INITIAL_VALUE);

  })
})