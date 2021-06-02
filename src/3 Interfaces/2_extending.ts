/**
 * Interfaces can be extended and will inherit the parent properties.
 */

export interface Titled {
  title: string;
  subtitle?: string;
}

export interface Book extends Titled {
  author: string;
  year: number;
}

export function extendingTest() {
  const book: Book = {
    title: 'The Colour of Magic',
    author: 'Terry Pratchett',
    year: 1983,
  };

  printTitleOf(book);
}

export function printTitleOf(obj: Titled) {
  console.log(obj.title, obj.subtitle);
}
