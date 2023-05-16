import Template from "./template";
class Vocalist extends Template {
    constructor(name, email, range) {
        super(name, email);
        this.range = range;
    }
}

export default Vocalist;