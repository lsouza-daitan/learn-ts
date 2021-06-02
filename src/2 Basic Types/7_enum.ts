/**
 * Unions indicates that a value could be any of the specified values.
 */

enum ActionMethods {
  Get = 'GET',
  Create = 'POST',
  Update = 'PUT',
}
enum ResponseType {
  JSON = 1,
  Blob,
  Stream,
  ArrayBuffer,
}

type Actions = keyof (typeof ActionMethods);

export function enumTest() {
  makeRequest(ActionMethods.Get, ResponseType.JSON);
  mapToMethod('Update');
}

export function makeRequest(method: ActionMethods, expectType: ResponseType) {
  // Make the request here...
}

export function mapToMethod(method: Actions) {
  // ...
}
