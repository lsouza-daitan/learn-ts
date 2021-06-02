/**
 * Interfaces are the bread and butter of TypeScript.
 * 
 * An interface determines an object structure. A value doesn't need to explicitly
 * implement an interface structure to be accepted as valid when the interface is
 * expected.
 */

export interface Titled {
  title: string;
  subtitle?: string; // ? indicates an optional property
}

export interface Book {
  title: string;
  author: string;
  year: number;
}

export function interfaceTest() {
  const book = {
    title: 'The Colour of Magic',
    author: 'Terry Pratchett',
    year: 1983,
  };

  printTitleOf(book);
}

export function printTitleOf(obj: Titled) {
  console.log(obj.title, obj.subtitle);
}
