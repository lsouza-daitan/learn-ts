/**
 * TODO
 */

interface IStringTree {
  [K: string]: string | IStringTree;
}

export function indexesTest() {
  const example: IStringTree = {
    hello: {
      world: 'Hello, world',
      person: {
        jack: 'Hello, Jack',
        mary: 'Hello, Mary',
      },
    },
  };

  console.log(example);
}
