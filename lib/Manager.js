const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, officeNum) {
        super(name);
        this.id = id;
        this.officeNumber = officeNum;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;