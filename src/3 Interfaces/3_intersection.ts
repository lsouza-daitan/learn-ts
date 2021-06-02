/**
 * Intersections creates a new type that combines all properties of the specified types.
 */

interface ITextContent {
  content: string;
}

interface ITitled {
  title: string;
  subtitle?: string;
}

interface IPaginated {
  numPages: number;
}

interface IPrinted {
  publisher: string;
  coverType: 'paperback' | 'hard-cover';
  trimSize: [number, number],
}

export type Tweet        = ITextContent;
export type BlogArticle  = ITextContent & ITitled;
export type Book         = ITextContent & ITitled & IPaginated;
export type PrintedBook  = Book & IPrinted & { isbn: string };

export function printBook(book: Book, printOptions: Partial<IPrinted>): PrintedBook {
  const printInfo: IPrinted = {
    publisher: 'Self-published',
    coverType: 'paperback',
    trimSize: [6, 9],
    ...printOptions,
  };

  return { ...book, ...printInfo, isbn: generateISBN() };
}

export function generateISBN() {
  return '123-4-56-123456-0'
}
