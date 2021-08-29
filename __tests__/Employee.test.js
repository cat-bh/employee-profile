const Employee = require('../lib/Employee');

test('Creates a new employee object', () => {
    const person = new Employee('Brad', 3);

    expect(person.name).toBe('Brad');
    expect(person.id).toEqual(expect.any(Number));
    expect(person.email).toEqual(expect.any(String));
    
});

test('gets Employees name', () => {
    const employee = new Employee("Jim", 4);

    expect(employee.getName()).toBe('Jim');
});

test('get employee id', () => {
    const employee = new Employee('Pam', 2);

    expect(employee.getId()).toBe(2);
});

test('get employee email', () => {
    const employee = new Employee('Dwight Schrute', 5);

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('get employee role', () => {
    const employee = new Employee('Stanley', 8);

    expect(employee.getRole()).toBe('Employee');
})