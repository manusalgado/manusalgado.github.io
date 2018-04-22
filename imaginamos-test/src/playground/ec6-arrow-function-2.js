const add = (a, b) => {

  return a + b;
}

console.log(add(1, 2));

const user = {
  name: 'Manuel',
  skills: ['HTML5', 'Javascript', 'CSS'],
  printSkillsUser() {

    return this.skills.map((skill) => return this.name + ' Sabe ' + skill; );
  }
};
console.log(user.printSkillsUser());
