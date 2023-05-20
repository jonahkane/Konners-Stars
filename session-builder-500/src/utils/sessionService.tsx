import { Session } from "./session.model";
class seshyWeshy {
    session: Session = {
        leadInfo: {
            sessionLead: '',
            leadEmail: '',
            leadPhoneNumber: ''
        },
        musicianInfo: {
            musicianName: '',
            musicianInstruments: '',
            musicianEmail: '',
        },
        vocalistInfo: {
            vocalistName: '',
            vocalistEmail: '',
            vocalistRange: '',
        },
        engineerInfo: {
            engineerName: '',
            engineerEmail: '',
            engineerDaw: '',
        },
        producerInfo: {
            producerName: '',
            producerEmail: '',
            producerDaw: '',
            producerRole: '',
        },
        finalD: {
            startTime: '',
            endTime: '',
            locationName: '',
            locationAddress: '',
        }
    };
    public settler(sessionData:Session) {
        this.session = sessionData;
    };
    public gettler() {
        return(this.session)
    };
    public createSessionFunction() {
        const nuSesh = this.session;
        this.settler(nuSesh);
        console.log(nuSesh);
    }
};

const service = new seshyWeshy();
export default service;