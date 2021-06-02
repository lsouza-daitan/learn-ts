/**
 * Function types can be specified using an arrow function-like notation.
 * 
 * Do not use the type "Function"! That corresponds to the Function constructor.
 */
export function functionTest() {
  const bookList: Array<object> = [
    asBook(`The Hitchhiker's Guide to the Galaxy`, 1979),
    asBook(`The Restaurant at the End of the Universe`, 1980),
    asBook(`Life, the Universe and Everything`, 1982),
    asBook(`So Long, and Thanks for All the Fish`, 1984),
  ];
  runForEachBook(bookList, console.log);
}

export function asBook(name: string, year: number) {
  return {
    name,
    year,
  };
}

export function runForEachBook(bookList: object[], func: (book: object) => void) {
  bookList.forEach(func);
}
