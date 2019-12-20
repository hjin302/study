const p1 = {
  name : '하진',
  age : 20,
  getName: () => p1.name,
  setName: (new_name) => p1.name = new_name
}

console.log(p1.getName());
p1.setName('김하진');

