import Template from "./template";
class Lead extends Template {
    constructor(name, email, phone) {
        super(name, email);
        this.phone = phone;
    }
}

export default Lead;