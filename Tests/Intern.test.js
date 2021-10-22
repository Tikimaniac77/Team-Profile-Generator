const Intern = require('../lib/Intern');

test('Should create an Intern Object', () => {
    const int = new Intern('Michael', 77, 'michaelwachtel@yahoo.com', 'CSUF');

    expect(int.school).toEqual(expect.any(String));
});

test('Should get employee school from intSchool function', () => {
    const int = new Intern('Michael', 77, 'michaelwachtel@yahoo.com', 'CSUF');

    expect(int.intSchool()).toEqual(expect.stringContaining(int.school.toString()));
});

test('Should get role from empRole function', () => {
    const int = new Intern('Michael', 77, 'michaelwachtel@yahoo.com', 'CSUF');

    expect(int.empRole()).toEqual("Intern");
});