const Engineer = require('../lib/Engineer');

test('Creates a new engineer object', () => {
    const person = new Engineer('Brad', 3);

    expect(person.name).toBe('Brad');
    expect(person.id).toEqual(expect.any(Number));
    expect(person.email).toEqual(expect.any(String));
    
});

test('gets Engineer name', () => {
    const employee = new Engineer("Jim", 4);

    expect(employee.getName()).toBe('Jim');
});

test('get engineer id', () => {
    const employee = new Engineer('Pam', 2);

    expect(employee.getId()).toBe(2);
});

test('get engineer email', () => {
    const employee = new Engineer('Dwight Schrute', 5);

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('get engineer role', () => {
    const employee = new Engineer('Stanley', 8);

    expect(employee.getRole()).toBe('Engineer');
});

test('engineer has a github', () => {
    const engineer = new Engineer('Bob Vance', 5, 'vance-refridgeration');

    expect(engineer.github).toBe('vance-refridgeration');
});

test('get engineer github function', () => {
    const engineer = new Engineer('Bob Vance', 5, 'vance-refridgeration');

    expect(engineer.getGithub()).toBe('vance-refridgeration');
})