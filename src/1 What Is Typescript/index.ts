import multiply from './multiply';

export function tester() {
  /**
   * TypeScript allows developers to find bugs while typing the code.
   * 
   * As a project codebase expands, it can be difficult to predict what could
   * be affected even by a small change. TypeScript allows you to identify the
   * dependencies that would be affected and will alert you of something that
   * could break.
   */
  const four = multiply(2, 'two');

  /**
   * TypeScript also accelerates development by providing inline documentation
   * and autocompletion, making it easier to understand large codebases and
   * interfaces from third party libraries.
   */
  const four_squared = Math.pow(four, 2);
  console.log(four_squared);
}
