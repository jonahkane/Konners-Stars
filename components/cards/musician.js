import Template from "./template";
class Musician extends Template {
    constructor(name, email, instrument) {
        super(name, email);
        this.instrument = instrument;
    }
}

export default Musician;