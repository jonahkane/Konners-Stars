const Template = require('./template')
class Vocalist extends Template {
    constructor(name, email, range) {
        super(name, email);
        this.range = range;
    }
}

module.exports = Vocalist;