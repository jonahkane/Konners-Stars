import Template from './template'
class Engineer extends Template {
    constructor(name, email, daw) {
        super(name, email);
        this.daw = daw;
    }
}

export default  Engineer;