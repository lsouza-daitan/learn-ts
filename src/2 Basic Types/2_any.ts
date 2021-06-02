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

export function printBookInfo(book: any) {
  if (typeof book === 'string') {
    console.log(`We don't know when ${book} was published`);
    return;
  }

  const message = `${book.name} was published ${2021 - book.year} years ago`;
  console.log(message);
}
