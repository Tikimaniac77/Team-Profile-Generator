const Manager = require('../lib/Manager');

test('Should create a Manager object', () => {
    const mgr = new Manager('Michael', 77, 'michaelwachtel@yahoo.com', 11);

    expect(mgr.officeNum).toEqual(expect.any(Number));
});

test('Should get role from getRole function', () => {
    const mgr = new Manager('Michael', 77, 'michaelwachtel@yahoo.com', 11);

    expect(mgr.empRole()).toEqual('Manager');
});