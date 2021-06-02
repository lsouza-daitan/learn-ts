/**
 * The following modifiers can be used for interface fields:
 *  - readonly keyword: the field cannot be modified after the object is created
 *  - ? flag: the field is optional and can be omitted when the object is created
 *    Also implies the type "undefined" for that field.
 */

interface IPerson {
  name: string;
  readonly birthDate: Date;
  ssn?: string;
}

type ITaxReturnPerson = { readonly [K in keyof IPerson]-?: IPerson[K] };

interface ITaxReturn {
  readonly taxpayer: ITaxReturnPerson;
  readonly submitDate: Date;
}

export function submitTaxReturn(person: IPerson): ITaxReturn {
  if (!person.ssn) {
    throw new Error('SSN is required to submit tax return!')
  };
  return {
    taxpayer: person as ITaxReturnPerson,
    submitDate: new Date(),
  };
}

export function modifiersTest() {
  const john: IPerson = {
    name: 'John Doe',
    birthDate: new Date(),
  };

  submitTaxReturn(john);
}
