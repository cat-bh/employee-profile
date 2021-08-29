const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, school) {
        super(name);
        this.id = id;
        this.school = school;
    }

    getRole() {
        return 'Intern';
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;