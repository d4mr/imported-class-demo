import importedMethod from './importedMethod';

export class Demo {
  canImportedMethodChangeObjectProperty: boolean = false;

  importedMethod = importedMethod;
}

const demo = new Demo();

demo.importedMethod();

console.log(demo.canImportedMethodChangeObjectProperty);
