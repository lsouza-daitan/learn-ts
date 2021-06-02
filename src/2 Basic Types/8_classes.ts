/**
 * Classes are now supported natively since ECMAScript 5.
 * It's worth noting a few things about how TypeScript handles Classes:
 * 
 *  - Class declarations creates two things: a constructor and an interface.
 * 
 *  - Class types are handled like any other type: an instance of a class A
 *    can be used where class B is expected as long as they are compatible.
 * 
 *  - TypeScript supports access modifiers (i.e. public, private, protected keywords)
 *  
 */

class Student {
  constructor(public name: string) {}
}

class Teacher {
  public name: string;
  constructor(_name: string) {
    this.name = _name;
  }
}

export function classTest() {
  let mary = makeTeacher(Teacher, 'Mary');
  printStudentName(mary);
}

export function printStudentName(student: Student) {
  if (student instanceof Student) {
    console.log(`Hello, ${student.name}`);
  }
}

export function makeTeacher(TeacherClass: typeof Teacher, name: string): Teacher {
  return new TeacherClass(name);
}


