type Key = string | number;

export type GenericObjectInterface<T, K extends Key = Key> = {
  [key in K]: T;
};

export type StringObject = GenericObjectInterface<string>;

export type NumberObject = GenericObjectInterface<number>;

export type ListKeyExtractor<T> = (item: T, index: number) => string;

export interface Loadable {
  loading: boolean;
}

export type Nullable<T> = T | null;
