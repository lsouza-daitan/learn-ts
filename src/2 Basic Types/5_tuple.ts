/**
 * Tuple is a type of array of known elements.
 * Tuples can have variable length by using "...rest[]" syntax.
 */

type Vertex = [number, number];
type Polygon = [Vertex, Vertex, Vertex, ...Vertex[]];

export function tupleTest() {
  const square: Polygon = [
    [100, 100],
    [200, 100],
    [200, 200],
    [100, 200],
  ];
  const perimeter = getPerimeter(square);
  console.log('Square perimeter is: ', perimeter);
}

export function getPerimeter(polygon: Polygon) {
  return polygon.reduce((perimeter, currVertex, index) => {
    const nextIndex = (index + 1) % polygon.length;
    const nextVertex = polygon[nextIndex];
    const length = getLineLength([currVertex, nextVertex]);
    
    return perimeter + length;
  }, 0);
}

export function getLineLength(line: [Vertex, Vertex]) {
  const vector = [line[1][0] - line[0][0], line[1][1] - line[0][1]];
  return Math.hypot(vector[0], vector[1]);
}
