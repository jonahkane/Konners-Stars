const Template = require('./template')
class Engineer extends Template {
    constructor(name, email, daw) {
        super(name, email);
        this.daw = daw;
    }
}

module.exports = Engineer;