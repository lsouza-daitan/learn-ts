/**
 * The optional property access operator ?. allows safely accessing an object property
 * which could be undefined. The operator short-circuits the statement to an undefined
 * value instead of causing a "Cannot read property 'foo' of undefined" during runtime.
 */

interface IComplexObject {
  lorem?: {
    ipsum?: {
      dolor?: {
        sit?: {
          amet: 'Lorem ipsum dolor sit amet';
        }
      }
    }
  }
}

export function optionalChainTest(obj: IComplexObject) {
  const str = obj.lorem?.ipsum?.dolor?.sit?.amet; // Safe!
  console.log(str);
}
