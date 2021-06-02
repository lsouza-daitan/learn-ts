/**
 * "any" means that absolutely anything can be accepted as a value.
 * 
 * A type-safe alternative is using the "unknown" type.
 */
export function anyTest() {
  const name = `The Hitchhiker's Guide to the Galaxy`;
  const year = 1979;

  const book = asBook(name, year);
  printBookInfo(book);
  printBookInfo(name);
}

export function asBook(name: string, year: number) {
  return {
    name,
    year,
  };
}

export function printBookInfo(book: unknown) {
  if (typeof book === 'string') {
    console.log(`We don't know when ${book} was published`);

  } else if (typeof book === 'object') {
    const bookObj = book as { name: string, year: number };

    const message = `${bookObj.name} was published ${2021 - bookObj.year} years ago`;
    console.log(message);
  }
}
