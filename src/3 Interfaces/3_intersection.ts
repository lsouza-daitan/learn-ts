/**
 * Intersections creates a new type that combines all properties of the specified types.
 */

interface ArrayExtras {
  decorate: () => string;
  greet: () => void;
}

type StringArrayWithExtras = string[] & ArrayExtras;

export function intersectionTest() {
  const nameList = getStringArrayWithExtras([
    'Rachel',
    'Monica',
    'Phoebe',
  ]);
  nameList.greet();
}

export function getStringArrayWithExtras(baseArray: string[]): StringArrayWithExtras {
  const array = [...baseArray] as StringArrayWithExtras;
  array.decorate = () => '%~' + array.join('~') + '~%';
  array.greet = () => console.log('Greetings to ', array.join(', '));
  return array;
}
