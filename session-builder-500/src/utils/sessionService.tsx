import { Session } from "./session.model";
const defaultSession = {
    leadInfo: {
        sessionLead: '',
        leadEmail: '',
        leadPhoneNumber: ''
    },
    musicianInfo: [],
    vocalistInfo: [],
    engineerInfo: [],
    producerInfo: [],
    finalD: {
        startTime: '',
        endTime: '',
        locationName: '',
        locationAddress: '',
    }
};
class seshyWeshy {
    session: Session = defaultSession;
    public settler(sessionData:Session) {
        this.session = sessionData;
    };
    public gettler() {
        return(this.session)
    };
    public wipeler() {
        this.session = defaultSession;
    }
    public createSessionFunction() {
        const nuSesh = this.session;
        this.settler(nuSesh);
        console.log(nuSesh);
    }
};

const service = new seshyWeshy();
export default service;