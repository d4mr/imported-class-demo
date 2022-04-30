import type { Demo } from '.';

export default function importedMethod(this: Demo) {
  this.canImportedMethodChangeObjectProperty = true;
}
