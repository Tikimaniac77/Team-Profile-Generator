const Engineer = require('../lib/Engineer');

test('Should create an Engineer Object', () => {
    const eng = new Engineer('Michael', 77, 'michaelwachtel@yahoo.com', 'Tikimaniac77');

    expect(eng.github).toEqual(expect.any(String));
});

test('Should get engineer github from empGithub function', () => {
    const eng = new Engineer('Michael', 77, 'michaelwachtel@yahoo.com', 'Tikimaniac77');

    expect(eng.empGithub()).toEqual(expect.stringContaining(eng.github.toString()));
});

test('Should get role from empRole function', () => {
    const eng = new Engineer('Michael', 77, 'michaelwachtel@yahoo.com', 'Tikimaniac77');

    expect(eng.empRole()).toEqual('Engineer');
});