import { formatPokemonHeight } from './pokemon';
import React from 'react';

describe('formatPokemonHeight', () => {
  test('is undefined', () => {
    expect(formatPokemonHeight(undefined)).toBe('???');
  });

  test('is 245', () => {
    expect(formatPokemonHeight(245)).toBe('24.50 m');
  })
});

describe('formatPokemonName', () => {
  test.todo('does something');
});

describe('getTypeWeaknesses', () => {
  test.todo('does something');
});
