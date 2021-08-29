const Intern = require('../lib/Intern');

test('Creates a new intern object', () => {
    const person = new Intern('Ryan', 3);

    expect(person.name).toBe('Ryan');
    expect(person.id).toEqual(expect.any(Number));
    expect(person.email).toEqual(expect.any(String));
    
});

test('gets Intern name', () => {
    const intern = new Intern('Ryan', 3);

    expect(intern.getName()).toBe('Ryan');
});

test('gets intern id', () => {
    const intern = new Intern('Ryan', 3);

    expect(intern.getId()).toBe(3);
});

test('get intern email', () => {
    const intern = new Intern('Ryan', 3);

    expect(intern.getEmail()).toEqual(expect.any(String));
});

test('get intern role', () => {
    const intern = new Intern('Ryan', 3);

    expect(intern.getRole()).toBe('Intern');
});

test('Intern object has a school value', () => {
    const intern = new Intern('Ryan', 3, 'Yale');

    expect(intern.school).toBe('Yale');
});

test('get intern school name function', () => {
    const intern = new Intern('Ryan', 3, 'Yale');

    expect(intern.getSchool()).toBe('Yale');
})