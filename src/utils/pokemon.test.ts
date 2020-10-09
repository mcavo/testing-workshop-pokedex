import { formatPokemonHeight } from './pokemon';

const INTEGER_EXAMPLE = 245;

describe('formatPokemonHeight', () => {
  test('is undefined', () => {
    expect(formatPokemonHeight(undefined)).toBe('???');
  });

  test('is INTEGER', () => {
    expect(formatPokemonHeight(INTEGER_EXAMPLE)).toBe('24.50 m');
  });
});

describe('formatPokemonName', () => {
  test.todo('does something');
});

describe('getTypeWeaknesses', () => {
  test.todo('does something');
});
