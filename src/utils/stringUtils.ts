export const capitalize = (text?: string) => text && text[0].toUpperCase() + text.slice(1);

export const formatFloat = (digit?: number) => `${Number.isInteger(digit) ? digit : digit?.toFixed(2)}`;
