const p1 = {
  name : '하진',
  age : 20,
  getName: () => this.name,
  //getName () => this.name, 저는 에러나는데 왤까요 ??
  setName: new_name => this.name = new_name
}
const log = console.log;

log(p1.getName());
p1.setName('김하진');

