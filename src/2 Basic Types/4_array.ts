/**
 * An array type can be specified with two different notations: "type[]" or "Array<type>".
 * 
 * Beware: "[type]" is not the same as "type[]"!
 */
export function arrayTest() {
  const bookList: Array<object> = [
    asBook(`The Hitchhiker's Guide to the Galaxy`, 1979),
    asBook(`The Restaurant at the End of the Universe`, 1980),
    asBook(`Life, the Universe and Everything`, 1982),
    asBook(`So Long, and Thanks for All the Fish`, 1984),
  ];
  printBooks(bookList);
}

export function asBook(name: string, year: number) {
  return {
    name,
    year,
  };
}

export function printBooks(bookList: object[]) {
  bookList.forEach((book) => console.log(book));
}
