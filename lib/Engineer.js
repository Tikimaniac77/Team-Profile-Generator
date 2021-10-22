const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {

        super (name, id, email);

        this.github = github;
    }

    empGithub() {
        return this.github;
    }

    empRole () {
        return 'Engineer';
    }
}

module.exports = Engineer;