const Template = require('./template')
class Lead extends Template {
    constructor(name, email, phone) {
        super(name, email);
        this.phone = phone;
    }
}

module.exports = Lead;