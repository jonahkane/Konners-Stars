const Template = require('./template')
class Musician extends Template {
    constructor(name, email, instrument) {
        super(name, email);
        this.instrument = instrument;
    }
}

module.exports = Musician;