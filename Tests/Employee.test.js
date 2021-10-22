const Employee = require('../lib/Employee');

test('Should get an employee object', () => {
    const emp = new Employee('Michael', 77, 'michaelwachtel@yahoo.com');

    expect(emp.name).toEqual(expect.any(String));
    expect(emp.id).toEqual(expect.any(Number));
    expect(emp.email).toEqual(expect.any(String));
});

test('Should get an employee name from empName function', () => {
    const empName = new Employee('Michael', 77, 'michaelwachtel@yahoo.com');

    expect(empName.empName()).toEqual(expect.any(String));
});

test('Should get an employee ID from empID function', () => {
    const empID = new Employee('Michael', 77, 'michaelwachtel@yahoo.com');

    expect(empID.empID()).toEqual(expect.any(Number));
});

test('Should get an employee Email from empEmail function', () => {
    const empEmail = new Employee('Michael', 77, 'michaelwachtel@yahoo.com');

    expect(empEmail.empEmail()).toEqual(expect.stringContaining(empEmail.email.toString()));
});

test('Should get role from empRole function', () => {
    const empRole = new Employee('Michael', 77, 'michaelwachtel@yahoo.com');

    expect(empRole.empRole()).toEqual("Employee");
});
