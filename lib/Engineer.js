const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, github) {
        super(name);
        this.id = id;
        this.github = github
    }

    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;