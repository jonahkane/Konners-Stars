export interface Session {
    leadInfo: LeadQ;
    musicianInfo: MusicianQ[];
    vocalistInfo: VocalistQ[];
    engineerInfo: EngineerQ[];
    producerInfo: ProducerQ[];
    finalD: FinalDeetzz;
}

export interface LeadQ {
    sessionLead: string;
    leadEmail: string;
    leadPhoneNumber: string;
}

export interface MusicianQ {
    musicianName: string;
    musicianInstruments: string;
    musicianEmail: string;
}

export interface VocalistQ {
    vocalistName: string;
    vocalistEmail: string;
    vocalistRange: string;
}

export interface EngineerQ {
    engineerName: string;
    engineerEmail: string;
    engineerDaw: string;
}

export interface ProducerQ {
    producerName: string;
    producerEmail: string;
    producerDaw: string;
    producerRole: string;
}

export interface FinalDeetzz {
    startTime: string;
    endTime: string;
    locationName: string;
    locationAddress: string;
}
