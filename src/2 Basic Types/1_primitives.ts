/**
 * TypeScript supports the standard primitives, such as "string", "number", and "boolean".
 * There is also other useful primitive values:
 *  - object
 *  - null
 *  - undefined
 *  - symbol
 * 
 * When a value is constant, its type is interpreted as a literal type.
 */
export function primitiveTest() {
  // ↓ Try let!
  const name = `The Hitchhiker's Guide to the Galaxy`;
  const year = 1979;
  const isPublished = true;

  const book = asBook(name, year, isPublished);
  printBook(book);
}

export function asBook(name: string, year: number, isPublished: boolean) {
  return {
    name,
    year,
    isPublished,
  };
}

export function printBook(book: object) {
  console.log(book);
}

export function maybePrintBook(book?: object | null) {
  if (book) {
    console.log(book);
  }
}
