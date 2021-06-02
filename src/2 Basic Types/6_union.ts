/**
 * Unions indicates that a value could be any of the specified values.
 */

type SortDirection = 'asc' | 'desc';
type Collection = Array<number> | Array<string>;
// Notice that this is different in pratice:
// type MixedCollection = Array<number | string>;

export function unionTest() {
  const numberList: Collection = [
    128,
    6,
    42,
    0,
    80,
  ];
  const sortedList = sortCollection(numberList, 'asc');
  console.log(sortedList);
}

export function sortCollection(collection: Collection, direction: SortDirection) {
  return collection.sort((a: number | string, b: number | string) => {
    const pivot = direction === 'asc' ? a : b;
    const reference = direction === 'asc' ? b : a;

    if (pivot < reference) return -1;
    if (pivot > reference) return 1;
    return 0;
  });
}
