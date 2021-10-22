class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    empName () {
        return this.name;
    }

    empID () {
        return this.id;
    }

    empEmail () {
        return this.email;
    }

    empRole () {
        return 'Employee';
    }
};

module.exports = Employee;