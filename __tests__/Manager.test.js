const Manager = require('../lib/Manager');

test('Creates a new manager object', () => {
    const manager = new Manager('Michael', 3);

    expect(manager.name).toBe('Michael');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    
});

test('gets managers name', () => {
    const manager = new Manager("Jim", 4);

    expect(manager.getName()).toBe('Jim');
});

test('get manager id', () => {
    const manager = new Manager('Pam', 2);

    expect(manager.getId()).toBe(2);
});

test('get manager email', () => {
    const manager = new Manager('Dwight Schrute', 5);

    expect(manager.getEmail()).toEqual(expect.any(String));
});

test('get manager role', () => {
    const manager = new Manager('Stanley', 8);

    expect(manager.getRole()).toBe('Manager');
});

test('get Managers office number', () => {
    const manager = new Manager('Michael', 3, 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
})