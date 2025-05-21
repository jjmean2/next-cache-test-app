export default class ValueRef {
  constructor(title: string, public value: number) {
    console.log(`    📦 ${title}-ContentRef constructing...`, value);
  }
}
